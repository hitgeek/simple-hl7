var hl7 = require('../lib');

var adt = `MSH|^~\&|^^|MA0000^^|^^|GA0000^^|20111105122535||RSP^K11^RSP_K11|1320521135996.100000002|T|2.5.1|||||||||Z32^CDCPHINVS^^|
MSA|AA|19970522GA40||
QAK|||Z34^Request Immunization History^HL70471|
QPD|Z34^Request Immunization History^HL70471|19970522GA05||FLOYD^FRANK^^^^^L|MALIFICENT|20030123|M|L|
PID|1||25^^^^SR~0001||FLOYD^FRANK^^^^^L||20030123|M|||612 S WRIGHT CT^^KENNEWICK^WASHINGTON^99366^United States^M||(509)421-0355^^PH^^^509^4210355^|||||||||||||||||N|
PD1|||^^^^^^SR|21^MATT^SHAKY^K^^^^^^^^^SR~1679652135|||||||02^Reminder/recall -any method^HL70215|||||A^Active^HL70441|
NK1|1|FLOYD^MALIFICENT|GRD^Guardian^HL70063|
PV1||R|
ORC|RE||25.34.20100723|
RXA|0|999|20120727112142|20120727112142|998^no vaccine administered^CVX|0||||||||||||||||20120727112144|
OBX|1|CE|30956-7^vaccine type^LN||0^DTP/aP^CVX||||||F|
OBX|1|CE|59779-9^Immunization Schedule used^LN||VXC16^ACIP^CDCPHINVS||||||F|
OBX|1|NM|30973-2^Dose number in series^LN||4||||||F|
OBX|1|TS|30980-7^Date vaccination due^LN||20121206||||||F|
OBX|1|TS|30981-5^Earliest date to give^LN||20121206||||||F|
OBX|1|TS|59777-3^Latest date next dose should be given^LN||20161101||||||F|
OBX|1|TS|59778-1^Date dose is overdue^LN||20130106||||||F|
OBX|1|CE|59783-1^Status in immunization series^LN||U^Up to Date^STC0002||||||F|
ORC|RE||9999|
RXA|0|999|20120727112142|20120727112142|998^no vaccine administered^CVX|0||||||||||||||||20120727112144|
OBX|1|CE|30956-7^vaccine type^LN||0^Hib^CVX||||||F|
OBX|1|CE|59779-9^Immunization Schedule used^LN||VXC16^ACIP^CDCPHINVS||||||F|
OBX|1|NM|30973-2^Dose number in series^LN||1||||||F|
OBX|1|TS|30980-7^Date vaccination due^LN||20100102||||||F|
OBX|1|TS|30981-5^Earliest date to give^LN||20091214||||||F|
OBX|1|TS|59777-3^Latest date next dose should be given^LN||20141101||||||F|
OBX|1|TS|59778-1^Date dose is overdue^LN||20100202||||||F|
OBX|1|CE|59783-1^Status in immunization series^LN||P^Past Due^STC0002||||||F|
ORC|RE||9999|
RXA|0|999|20120727112142|20120727112142|998^no vaccine administered^CVX|0||||||||||||||||20120727112144|
OBX|1|CE|30956-7^vaccine type^LN||0^MCV4^CVX||||||F|
OBX|1|CE|59779-9^Immunization Schedule used^LN||VXC16^ACIP^CDCPHINVS||||||F|
OBX|1|NM|30973-2^Dose number in series^LN||1||||||F|
OBX|1|TS|30980-7^Date vaccination due^LN||20201102||||||F|
OBX|1|TS|30981-5^Earliest date to give^LN||20201102||||||F|
OBX|1|TS|59777-3^Latest date next dose should be given^LN||20641101||||||F|
OBX|1|TS|59778-1^Date dose is overdue^LN||20211102||||||F|
OBX|1|CE|59783-1^Status in immunization series^LN||U^Up to Date^STC0002||||||F|
ORC|RE||9999|
RXA|0|999|20120727112142|20120727112142|998^no vaccine administered^CVX|0||||||||||||||||20120727112144|
OBX|1|CE|30956-7^vaccine type^LN||0^Pneumococcal^CVX||||||F|
OBX|1|CE|59779-9^Immunization Schedule used^LN||VXC16^ACIP^CDCPHINVS||||||F|
OBX|1|NM|30973-2^Dose number in series^LN||1||||||F|
OBX|1|TS|30980-7^Date vaccination due^LN||20100102||||||F|
OBX|1|TS|30981-5^Earliest date to give^LN||20091214||||||F|
OBX|1|TS|59777-3^Latest date next dose should be given^LN||20151001||||||F|
OBX|1|TS|59778-1^Date dose is overdue^LN||20100202||||||F|
OBX|1|CE|59783-1^Status in immunization series^LN||P^Past Due^STC0002||||||F|`

var parser = new hl7.Parser();
var inspector = new hl7.Inspector();
var msg = parser.parse(adt);

try {
    var obj = inspector.inspect(msg);
    console.log(obj);
} catch(err) {
    console.log(err);
}




