var _ = require('lodash');
var get = _.get;
var set = _.set;
var dayjs = require('dayjs');
var customParseFormat = require('dayjs/plugin/customParseFormat');
var Message = require('./message');
var Field = require('./field');
var utils = require('./utils');

dayjs.extend(customParseFormat);

function encoder(config) {
    this.config = config;
}

encoder.prototype.decode = function (msg) {
    var config = this.config;
    var obj = {}

    config.segments.forEach(function (segmentConfig) {
        var id = segmentConfig.id.toUpperCase();
        var segments = id == "MSH"
            ? [msh.header]
            : msg.getSegments(id);

        if (!segments.length) return;
        var data = decodeSegments(msg, segments, segmentConfig);

        set(obj, segmentConfig.property, data);
    })

    return obj
}

function decodeSegments(msg, segments, config) {
    var obj;
    if (segments.length > 1) {
        obj = []
        segments.forEach(function (segment) {
            obj.push(decodeSegment(msg, segment, config));
        })
    } else {
        obj = decodeSegment(msg, segments[0], config);
    }
    return obj;
}

function decodeSegment(msg, segment, config) {
    var values = config.values;
    var obj = {}
    values.forEach(function (value) {
        setValue(msg, segment, obj, value, config)
    })

    if (config.segments) {
        var currentIndex = msg.segments.indexOf(segment);
        var nextSegment = msg.segments.find(function (x) {
            return x.name == segment.name && msg.segments.indexOf(x) > currentIndex;
        })
        var nextIndex = msg.segments.indexOf(nextSegment) != -1
            ? msg.segments.indexOf(nextSegment)
            : msg.segments.length;
        config.segments.forEach(function (subConfig) {
            var id = subConfig.id.toUpperCase();
            var subSegments = msg.segments.filter(function (x) {
                var subIndex = msg.segments.indexOf(x);
                return x.name == id
                    && subIndex > currentIndex
                    && subIndex < nextIndex;
            })

            var subObj = decodeSegments(msg, subSegments, subConfig);
            set(obj, subConfig.property, subObj);
        })
    }

    return obj
}

function setValue(msg, segment, obj, value, config) {
    var repititionCharacter = msg.header.delimiters.repititionCharacter;
    var componentSeperator = msg.header.delimiters.componentSeperator;
    var val = ''
    if (value.field) {
        if (value.repeats) {
            var args = Array.isArray(value.field) ? value.field : [value.field];
            var field = args[0];
            val = segment.getField(field)
            val = val.split(repititionCharacter);
            if (args.length > 1) {
                val = val.map(x => x.split(componentSeperator)[args[1] - 1]);
            } else {
                if (value.type) val = val.map(x => decodeValue(x, value.type))
            }
        } else {
            var args = Array.isArray(value.field) ? value.field : [value.field];
            if (args.length == 3) {
                val = segment.getFieldComponent(...args)
            } else {
                val = segment.getField(...args)
            }
            if (value.type) val = decodeValue(val, value.type)
        }

        set(obj, value.path, val)
    }
    if (value.component) {
        if (value.repeats) {
            var args = Array.isArray(value.component) ? value.component : [value.component];
            var field = args[0];
            val = segment.getField(field)
            val = val.split(repititionCharacter);
            if (args.length > 1) {
                val = val.map(x => x.split(componentSeperator)[args[1] - 1]);
            } else {
                if (value.type) val = val.map(x => encodeValue(x, value.type))
            }
        } else {
            var args = Array.isArray(value.component) ? value.component : [value.component];
            val = segment.getComponent(...args)
            if (value.type) val = decodeValue(val, value.type)
        }

        set(obj, value.path, val)
    }
    if (value.values) {
        let subObj = {};
        value.values.forEach(function(subValue) {
            subValue.repeats = value.repeats;
            setValue(msg, segment, subObj, subValue, config);
        })
        if (value.repeats) {
            var subArray = [];
            var keys = Object.keys(subObj);
            var items = subObj[keys[0]].length;
            for (var i = 0; i < items; i++) {
                var itemObj = {};
                keys.forEach(function(x) {
                    itemObj[x] = subObj[x][i]
                })
                subArray.push(itemObj);
            }
            set(obj, value.path, subArray)
        } else {
            set(obj, value.path, subObj)
        }
        
    }
}

function decodeValue(stringValue, type) {
    if (type == "Number") {
        return Number(stringValue);
    }
    if (type == "Date") {
        return dayjs(stringValue, "YYYYMMDD").toDate();
    }
    return stringValue;
}

encoder.prototype.encode = function (obj) {
    var config = this.config;
    var header = config.header || {};
    var timestampFormat = config.timestampFormat || "YYYYMMDDhhmmss";
    var now = new Date();
    var msh = new Message(
        header.sendingApplication || "SENDAPP",
        header.sendingFacility || "SENDFAC",
        header.recievingApplication || "RECAPP",
        header.recievingFacility || "RECFAC",
        dayjs(now).format(timestampFormat),
        header.security || '',
        obj.messageType || '',
        dayjs(now).format("YYYYMMDDhhmmssSSS"),
        header.processingId || "P",
        header.version || "2.5"
    );

    config.segments.forEach(function (segment) {
        encodeSegment(msh, obj, config, segment)
    })

    return msh;
}

function encodeSegment(msh, obj, config, segment) {
    var vals = get(obj, segment.property);
    vals = Array.isArray(vals) ? vals : [vals]
    vals.forEach(function (val) {
        addSegment(msh, val, config, segment);
        if (segment.segments) {
            segment.segments.forEach(function (subSegment) {
                var subVals = get(val, subSegment.property);
                subVals = Array.isArray(subVals) ? subVals : [subVals];
                subVals.forEach(function (subVal) {
                    addSegment(msh, subVal, config, subSegment);
                })
            })
        }
    })
}

function addSegment(msh, obj, config, segment) {
    var id = segment.id.toUpperCase();
    var seg = msh.addSegment(id);
    var fields = []
    segment.values.forEach(function (value) {
        
        var encode = value.encode ?? true;
        if (!encode) return;
        
        if (value.values) {
            var subFields = [];
            var subObjs = get(obj, value.path);
            subObjs = Array.isArray(subObjs) ? subObjs : [subObjs];
            value.values.forEach(function(subValue) {
                subObjs.forEach(function(subObj) {
                    pushValueToFields(msh, subObj, config, segment, subFields, subValue);
                })
            })
            subFields.forEach(function(subField) {
                if (subField.repeats) {
                    var max = Math.max(...(subField.componentValue.map(x => x.sequence)))
                    var items = subField.componentValue.filter(x => x.sequence == max).length;
                    var val = [];
                    for (var i = 0; i < items; i++) {
                        var subArray = Array.from(' '.repeat(max));
                        for (var ii = 0; ii < max; ii++) {
                            var sequenceItems = subField.componentValue.filter(x => x.sequence == ii + 1);
                            if (sequenceItems.length > i) {
                                subArray[ii] = sequenceItems[i].value;
                            } else {
                                subArray[ii] = ''   
                            }
                        }
                        val.push(subArray);
                    }
                    subField.componentValue[0].value = val
                    fields.push(subField)
                } else {
                    fields.push(subField)
                }
            })
        } else {
            pushValueToFields(msh, obj, config, segment, fields, value)
        }
    })

    fields.forEach(function (field) {
        if (field.fieldValue) {
            if (field.repeats) {
                seg.addField(new Field(...field.fieldValue), field.index)
            } else {
                seg.addField(field.fieldValue, field.index)
            }
        }
        if (field.componentValue) {
            field.componentValue.sort(x => x.sequence);
            if (field.repeats) {
                field.componentValue.sort(x => x.sequence);
                var val = field.componentValue[0].value
                seg.addField(new Field(...val), field.index)
            } else {
                field.componentValue.sort(x => x.sequence);
                var val = field.componentValue.map(x => x.value);
                seg.addField(val, field.index)
            }

        }
    })
}

function pushValueToFields(msh, obj, config, segment, fields, value) {
    var val = get(obj, value.path) || (value.repeats ? [] : '');
        if (value.field) {
            if (value.repeats) {
                if (value.type) val = val.map(x => encodeValue(x, value.type, config));
            } else {
                if (value.type) val = encodeValue(val, value.type, config);
            }

            fields.push({ index: value.field, fieldValue: val, repeats: value.repeats })
        }
        if (value.component) {
            if (value.type) val = encodeValue(val, value.type, config);
            var index = value.component[0];
            var sequence = value.component[1];
            if (value.component.length == 3) {
                var field = fields.find(x => x.index == index);
                if (!field) {
                    field = { index: index, componentValue: [], repeats: value.repeats }
                    fields.push(field);
                }

                var currentValue = field.componentValue.find(x => x.sequence == sequence);
                if (!currentValue) {
                    field.componentValue.push({ sequence: sequence, value: val })
                } else {
                    var currentArrayValue = Array.isArray(currentValue.value)
                        ? currentValue.value
                        : [currentValue.value]
                    currentArrayValue.push(val);
                    currentValue.value = currentArrayValue;
                }
            } else {
                var field = fields.find(x => x.index == index);
                if (!field) {
                    field = { index: index, componentValue: [], repeats: value.repeats }
                    fields.push(field);
                }
                if (value.type) val = encodeValue(val, value.type, config);
                field.componentValue.push({ sequence: sequence, value: val })
            }
        }
}

function encodeValue(value, type, config) {
    if (type == "Date") {
        return dayjs(value).format("YYYYMMDD")
    }
    return value;
}

module.exports = encoder;