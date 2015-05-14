var hl7 = require('../lib/index.js');

var adt = new hl7.Message(
                    "EPIC",
                    "EPICADT",
                    "SMS",
                    "199912271408",
                    "CHARRIS",
                    ["ADT", "A04"] //this field has 2 components
                    // keep adding fields
                );

//addSegment takes similiar syntax as constructor, first argument is segment name
//the rest of the arguments are added as fields

adt.addSegment("PID",
            "", //blank field
            ["0493575", "", "", "2", "", "ID 1"], //multiple components again
            "454721",
            "",
            ["DOE", "JOHN", "", "", "", ""],
            "19480203"
            //keeping adding arguments to add more fields
        );


console.log(adt.toString());