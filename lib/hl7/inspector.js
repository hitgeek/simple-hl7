var dict = require('../dictionary');

function inspector() {

}

inspector.prototype.inspect = function (msg) {
    var obj = {};
    var header = msg.header;
    var delims = header.delimiters;
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

        segDef = getSegmentDefinition(segment.name, messageDef.segments.segments);

        if (!segDef) {
            obj.segments.push({
                name: 'Unknown',
                description: 'Unknown',
                fields: [],
                value: segment.toString(delims),
                type: segment.name
            })
            return;
        }

        var segDefDetail = def.segments[segment.name];
        var fields = [];
        var retFields = [];
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
            value: segment.toString(delims),
            type: segment.name
        })

    })
    return obj;
}


function getSegmentDefinition(name, definitions) {
    for (var i in definitions) {
        var d = definitions[i];
        if (d.name == name) return d;
        if (d.children) {
            var def = getSegmentDefinition(name, d.children);
            if (def) return def;
        }
        if (d.compounds) {
            var def = getSegmentDefinition(name, d.compounds);
            if (def) return def;
        }
    }
}

module.exports = inspector;