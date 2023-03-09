class PersamaanNonLinier {
  constructor({ f, a, b, epsilon, }) {
    this._function = f;
    this.a = a;
    this.b = b;
    this.epsilon = epsilon;
  }

  bisect(countStart = 1) {
    let akar = null;

    this.c = (this.a + this.b) / 2;

    if (this.b - this.c < this.epsilon) {
      akar = this.c;
      return console.log({
        iterasi: countStart,
        a: this.a,
        b: this.b,
        c: this.c,
        functionB: f(this.b),
        functionC: f(this.c),
        functionBxFunctionC: (f(this.b)*f(this.c)),
        keterangan: `akar ketemu: ${akar}`,
      });
    } else if (this.b - this.c >= this.epsilon) {
      return console.log({
        iterasi: countStart,
        a: this.a,
        b: this.b,
        c: this.c,
        functionB: f(this.b),
        functionC: f(this.c),
        functionBxFunctionC: (f(b)*f(c)),
        keterangan: 'Titik yang dicari',
      });
    }

    console.log({
      iterasi: countStart,
      a: a,
      b: b,
      c: c,
      functionB: f(b),
      functionC: f(c),
      functionBxFunctionC: (f(b)*f(c)),
      keterangan: 'Bukan titik yang dicari',
    });

    if (f(b) * f(c) <= 0) {
      a = c;
    } else {
      b = c;
    }

    this.bisect({ f, a, b, c }, countStart + 1);
  }
};

export default PersamaanNonLinier;
