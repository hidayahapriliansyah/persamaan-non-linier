// import PersamaanNonLinier from './PersamaanNonLinier';

// const persamaanNonLinier = new PersamaanNonLinier({
//   f: (x) => (x**5)-3(x**3)+2(x**2)+7,
//   a: -2,
//   b: 4,
//   epsilon: 0.0001,
// });

// persamaanNonLinier.bisect();

const bisect = ({
  f,
  a,
  b,
  epsilon,
}, countStart = 1) => {
  let akar = null;

  const c = (a + b)/ 2;

  if (b - c < epsilon) {
    console.log('b - c', b - c);
    akar = c;
    return console.log({
      iterasi: countStart,
      a: a,
      b: b,
      c: c,
      functionB: f(b),
      functionC: f(c),
      functionBxFunctionC: (f(b)*f(c)),
      keterangan: `akar ketemu: ${akar}`,
    });
  } else if (b - c >= epsilon) {
    console.log('b - c', b - c);
    return console.log({
      iterasi: countStart,
      a: a,
      b: b,
      c: c,
      functionB: f(b),
      functionC: f(c),
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

  f(b) * f(c) <= 0 ? a = c : b = c;

  bisect({ f, a, b, c }, countStart + 1)
};

console.log('coba1');
bisect({
  f: (x) => (x**5)-3*(x**3)+2*(x**2)+7,
  a: -2,
  b: 4,
  epsilon: 0.0001,
});

console.log('coba2');
bisect({
  f: (x) => (x**2)+x-6,
  a: -1,
  b: 4,
  epsilon: 0.0001,
});