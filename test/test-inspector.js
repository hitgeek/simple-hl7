var fs = require('fs');
var assert     = require("assert")
var hl7 = require('../lib');

var samples = 12;
var parser = new hl7.Parser();
var inspector = new hl7.Inspector();

describe('Inspector', function () {
    describe('inspect', function() {
        it('should inspect', function() {
            for (var i = 1; i <= samples; i++) {
                var data = fs.readFileSync(`./test/inspects/${i}.hl7`).toString();
                var msg = parser.parse(data);
                console.log(i)
                var inspect = inspector.inspect(msg);
                console.log(inspect);
            }
        })
    })
})

