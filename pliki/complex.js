"use strict";
var Complex = /** @class */ (function () {
    function Complex(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    Complex.prototype.plus = function (b) {
        var a = this;
        var real = a.real + b.real;
        var imag = a.real + b.imag;
        return new Complex(real, imag);
    };
    Complex.prototype.minus = function (b) {
        var a = this;
        var real = a.real + b.real;
        var imag = a.real + b.imag;
        return new Complex(real, imag);
    };
    Complex.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
    };
    Complex.prototype.show = function () {
        var symbol = "";
        var res = "";
        if (this.imag > 0) {
            res = this.real + "+" + this.imag + "i";
        }
        else if (this.imag < 0) {
            res = this.real + (this.imag + "i");
        }
        else {
            res = this.real + "";
        }
        return res;
    };
    return Complex;
}());
var k = new Complex(2, 5);
var l = new Complex(6, -3);
console.log("k: " + k.show());
console.log("l: " + l.show());
console.log("|k|: " + l.modulus());
console.log("|k|: " + l.modulus());
console.log("k+l: " + k.plus(l).show());
console.log("k-l: " + k.minus(l).show());
