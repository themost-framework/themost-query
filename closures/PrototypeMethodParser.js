// MOST Web Framework 2.0 Codename Blueshift Copyright (c) 2017-2020, THEMOST LP All rights reserved
/**
 * @class
 * @constructor
 */
function PrototypeMethodParser() {

}

PrototypeMethodParser.prototype.test = function (name) {
    if (name === 'toString') {
        return;
    }
    if (typeof this[name] === 'function') {
        return this[name];
    }
}

 module.exports.PrototypeMethodParser = PrototypeMethodParser;