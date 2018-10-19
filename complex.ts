class Complex {

    real: number;
    imag: number;

    constructor(real: number,imag: number){
        this.real = real;
        this.imag = imag;

    }

    plus(b: Complex) {
        let a: Complex = this;
        let real = a.real + b.real;
        let imag = a.real + b.imag;
        return new Complex(real,imag);
    }

    minus(b: Complex) {
        let a: Complex = this;
        let real = a.real + b.real;
        let imag = a.real + b.imag;
        return new Complex(real,imag);
    }

    modulus() {
        return Math.sqrt(Math.pow(this.real,2)+Math.pow(this.imag,2));
    }

    show() {
        let symbol = "";
        let res:string = ""
        if(this.imag > 0) {
            res = this.real + "+" + this.imag + "i";
        } else if(this.imag < 0) {
            res = this.real + (this.imag + "i");
        } else {
            res = this.real + "";
        }
        return res;
    }

}

let k = new Complex(2,5);
let l = new Complex(6,-3);

console.log("k: " + k.show());
console.log("l: " + l.show());
console.log("|k|: " + l.modulus());
console.log("|k|: " + l.modulus());
console.log("k+l: " + k.plus(l).show());
console.log("k-l: " + k.minus(l).show());



