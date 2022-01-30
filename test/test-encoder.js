var fs = require('fs');
var assert     = require("assert")
var hl7 = require('../lib');

var config = {
    segments: [
        {
            id: "pid",
            property: "patient",
            values: [
                { path: "externalId", component: [2, 1] },
                { path: "id", component: [3, 1] },
                { 
                    path: "name", values: [
                        { path: "first", component: [5, 2] },
                        { path: "last", component: [5, 1] }
                    ]
                }
            ]
        }
    ]
}

var parser = new hl7.Parser();
var adt = parser.parse(fs.readFileSync('test/samples/adt.hl7').toString().replace(/\r?\n/g, "\r"));



describe('Encoder', function () {
    describe('decode', function () {
        it('should decode an ADT to object', function () {
            var encoder = new hl7.Encoder(config);
            var obj = encoder.decode(adt);
            var patient = obj.patient;
            console.log(obj);
            assert.equal(patient.externalId, '0493575');
            assert.equal(patient.id, '454721');
            assert.equal(patient.name.first, 'JOHN');
            assert.equal(patient.name.last, 'DOE');
        })
    })
    describe('encode', function () {
        it('should encode an ADT to object', function () {
            var encoder = new hl7.Encoder(config);
            var obj = encoder.decode(adt);
            msg = encoder.encode(obj);
            console.log(msg.log());
        })
    })
})