var Encoder = require('../lib/hl7/encoder');
var Parser = require('../lib/hl7/parser');

var adt = 'MSH|^~\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|ADT^A04|1817457|D|2.5|' + '\r' +
'PID||0493575^^^2^ID 1|454721||DOE^JOHN^^^^|DOE^JOHN^^^^|19480203|M||B|254 MYSTREET AVE^^MYTOWN^OH^44123^USA||(216)123-4567|||M|NON|400003403~1129086|' + '\r' +
'NK1|1|ROE^MARIE^^^^|SPO||(216)123-4567||EC|||||||||||||||||||||||||||'  + '\r' +
'NK1|2|ROE^JOHN^^^^|SPO||(216)123-1234||EC|||||||||||||||||||||||||||'  + '\r' +
'PV1||O|168 ~219~C~PMA^^^^^^^^^||||277^ALLEN MYLASTNAME^BONNIE^^^^|||||||||| ||20200101&20210101|||||||||||||||||||||||||199912271408||||||002376853`'

var imm = 'MSH|^~\&||GA0000||VAERS PROCESSOR|20010331605||ORU^R01|20010422GA03|T|2.3.1|||AL|' + '\r' +
'PID|||1234^^^^SR~1234-12^^^^LR~00725^^^^MR||Doe^John^Fitzgerald^JR^^^L||20001007|M||2106-3^White^HL70005|123 Peachtree St^APT 3B^Atlanta^GA^30210^^M^^GA067||(678) 555-1212^^PRN|' + '\r' +
'NK1|1|Jones^Jane^Lee^^RN|VAB^Vaccine administered by (Name)^HL70063|' + '\r' +
'NK1|2|Jones^Jane^Lee^^RN|FVP^Form completed by (Name)-Vaccine provider^HL70063|101 Main Street^^Atlanta^GA^38765^^O^^GA121||(404) 554-9097^^WPN|' + '\r' +
'ORC|CN|||||||||||1234567^Welby^Marcus^J^Jr^Dr.^MD^L|||||||||Peachtree Clinic|101 Main Street^^Atlanta^GA^38765^^O^^GA121|(404) 554-9097^^WPN|101 Main Street^^Atlanta^GA^38765^^O^^GA121|' + '\r' +
'OBR|1|||^CDC VAERS-1 (FDA) Report|||20010316|' + '\r' +
'OBX|1|NM|21612-7^Reported Patient Age^LN||05|mo^month^ANSI|' + '\r' +
'OBX|1|TS|30947-6^Date form completed^LN||20010316|' + '\r' +
'OBX|2|FT|30948-4^Vaccination adverse events and treatment, if any^LN|1|fever of 106F, with vomiting, seizures, persistent crying lasting over 3 hours, loss of appetite|' + '\r' +
'OBX|3|CE|30949-2^Vaccination adverse event outcome^LN|1|E^required emergency room/doctor visit^NIP005|' + '\r' +
'OBX|4|CE|30949-2^Vaccination adverse event outcome^LN|1|H^required hospitalization^NIP005|' + '\r' +
'OBX|5|NM|30950-0^Number of days hospitalized due to vaccination adverse event^LN|1|02|d^day^ANSI|' + '\r' +
'OBX|6|CE|30951-8^Patient recovered^LN||Y^Yes^ HL70239|' + '\r' +
'OBX|7|TS|30952-6^Date of vaccination^LN||20010216|' + '\r' +
'OBX|8|TS|30953-4^Adverse event onset date and time^LN||200102180900|' + '\r' +
'OBX|9|FT|30954-2^Relevant diagnostic tests/lab data^LN||Electrolytes, CBC, Blood culture|' + '\r' +
'OBR|2|||30955-9^All vaccines given on date listed in #10^LN|' + '\r' +
'OBX|1|CE30955-9&30956-7^Vaccine type^LN|1|08^HepB-Adolescent/pediatric^CVX|' + '\r' +
'OBX|2|CE|30955-9&30957-5^Manufacturer^LN|1|MSD^Merck^MVX|' + '\r' +
'OBX|3|ST|30955-9&30959-1^Lot number^LN|1|MRK12345|' + '\r' +
'OBX|4|CE|30955-9&30958-3^ Route^LN|1|IM^Intramuscular ^HL70162|' + '\r' +
'OBX|5|CE|30955-9&31034-2^Site^LN|1|LA^Left arm^ HL70163|' + '\r' +
'OBX|6|NM|30955-9&30960-9^Number of previous doses^LN|1|01I' + '\r' +
'OBX|7|CE|CE|30955-9&30956-7^Vaccine type^LN|2|50^DTaP-Hib^CVX|' + '\r' +
'OBX|8|CE|30955-9&30957-5^ Manufacturer^LN|2|WAL^Wyeth_Ayerst^MVX|' + '\r' +
'OBX|9|ST|30955-9&30959-1^Lot number^LN|2|W46932777|' + '\r' +
'OBX|10|CE|30955-9&30958-3^ Route^LN|2|IM^Intramuscular^HL70162|' + '\r' +
'OBX|11|CE|30955-9&31034-2^Site^LN|2|LA^Left arm^HL70163|' + '\r' +
'OBX|12|NM|30955-9&30960-9^Number of previous doses^LN|2|01|'

var parser = new Parser();
var msg = parser.parse(adt);
var msg2 = parser.parse(imm);

var config = {
    segments: [
        { 
            id: "pid",
            property: "patient",
            values: [
                { path: "id", field: 3 },
                { path: "firstName", component: [5, 2] },
                { path: "lastName", component: [5, 1] },
                { path: "birthDate", component: [7, 1], type: 'Date'},
                { path: "accountNumbers", field: 18, repeats: true, type: 'Number' }
            ]
        },
        {
            id: "nk1",
            property: "patient.family",
            values: [
                { path: "sequence", field: 1 },
                { path: "firstName", component: [2, 2] },
                { path: "lastName", component: [2, 1] },
                { path: "phone", field: 5 }
            ]
        },
        {
            id: "pv1",
            property: "visit",
            values: [
                { path: "number", component: [19, 1, 1], type: 'Date'},
                { path: "numberPart", component: [19, 1, 2], type: 'Date' }
            ]
        }
    ]
}

var encoder = new Encoder(config);
var obj = encoder.decode(msg);

console.log(obj);
console.log(obj.patient);

var msh = encoder.encode(obj);

console.log(msh.log());

// var config2 = {
//     segments: [
//         { 
//             id: "pid",
//             property: "patient",
//             values: [
//                 { path: "id", field: 3, repeats: true, decode: false },
//                 { 
//                     path: "ids", repeats: true, values: [
//                         { path: "code", component: [3, 1] },
//                         { path: "type", component: [3, 5] }
//                     ]
//                 },
//                 { path: "firstName", component: [5, 2] },
//                 { path: "lastName", component: [5, 1] },
//                 { path: "birthDate", component: [7, 1], type: 'Date'}
//             ]
//         },
//         {
//             id: "nk1",
//             property: "patient.family",
//             values: [
//                 { path: "sequence", field: 1 },
//                 { path: "firstName", component: [2, 2] },
//                 { path: "lastName", component: [2, 1] },
//                 { path: "phone", field: 5 }
//             ]
//         },
//         {
//             id: "obr",
//             property: "orders",
//             values: [
//                 { path: "sequence", field: 1, type: "Number"},
//                 { path: "code", component: [4, 1] },
//                 { path: "label", component: [4, 2] }
//             ],
//             segments: [
//                 {
//                     id: "obx",
//                     property: "results",
//                     values: [
//                         { path: "sequence", field: 1 },
//                         { path: "code", component: [3, 1] },
//                         { path: "label", component: [3, 2] }
//                     ]
//                 }
//             ]
//         }
//     ]
// }

// var encoder = new Encoder(config2);
// var obj2 = encoder.decode(msg2);

// console.log(obj2.orders[0]);

// // var msh2 = encoder.decode(obj2);

// var msh2 = encoder.encode(obj2);

// console.log(msh2.log());