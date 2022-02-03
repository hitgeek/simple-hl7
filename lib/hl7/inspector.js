var dict = require('../dictionary');

function inspector() {

}

inspector.prototype.inspect = function (msg) {
    var obj = {};
    var header = msg.header;
    obj.version = header.getHeaderField(12);

    var messageType = header.getHeaderComponent(9, 1);
    var triggerEvent = header.getHeaderComponent(9, 2)

    obj.name = triggerEvent 
        ?  messageType + "_" + triggerEvent
        : messageType;

    var def = dict.definitions[obj.version];
    var messageDef = def.messages[obj.name];
    obj.description = messageDef.desc;

    var segments = [msg.header];
    segments = segments.concat(msg.segments);
    obj.segments = []

    segments.forEach(function (segment) {
        var segDef = undefined;

        messageDef.segments.segments.forEach(function(x) {
            if (x.name == segment.name) {
                segDef = x;
                return;
            }
            if (x.children) x.children.forEach(function(xx) {
                if (xx.name == segment.name) {
                    segDef = xx;
                    return;
                }
                if (xx.children) xx.children.forEach(function(xxx) {
                    if (xxx.name == segment.name) {
                        segDef = xxx;
                        return;
                    }
                    if (xxx.children) xxx.children.forEach(function(xxxx) {
                        if (xxxx.name == segment.name) {
                            segDef = xxxx;
                            return;
                        }
                    })
                })
                
            })
        });

        if (!segDef) {
            throw new Error("HL7 message structure could not be identified")
        }

        var segDefDetail = def.segments[segment.name];
        var fields = [];
        var retFields = [];
        var delims = header.delimiters;
        if (segment.name == "MSH") {
            fields.push(delims.fieldSeperator);
            fields.push(delims.componentSeperator
                + delims.subcomponentSeperator
                + delims.escapeCharacter
                + delims.repititionCharacter)
        }
        fields = fields.concat(segment.fields);

        fields.forEach(function (field, i) {
            var fieldDef = segDefDetail.fields[i];
            var val = field.toString(delims);

            if (!fieldDef) {
                retFields.push({
                    datatype: {},
                    description: '',
                    length: '',
                    value: val
                })
                return;
            }

            var fieldObj = {
                datatype: {
                    code: fieldDef.datatype
                },
                description: fieldDef.desc,
                length: fieldDef.len,
                value: val
            }

            var components = val.split(header.delimiters.componentSeperator);
            var compDef = def.datatypes[fieldObj.datatype.code];
            fieldObj.datatype.description = compDef?.name;
            if (components.length > 1) {
                if (compDef && compDef[0]) {
                    fieldObj.components = [];
                    components.forEach(function (x, i) {
                        fieldObj.components.push({
                            position: i + 1,
                            name: compDef[i]?.description,
                            length: compDef[i]?.length,
                            datatype: compDef[i]?.datatype,
                            value: x.toString(delims)
                        })
                    })
                }
            }

            if (fieldDef.table) {
                fieldObj.table = fieldDef.table;
            }
            retFields.push(fieldObj)
        })

        obj.segments.push({
            name: segDef.name,
            description: segDef.desc,
            fields: retFields,
            value: segment.toString(delims)
        })

    })
    return obj;
}


module.exports = inspector;