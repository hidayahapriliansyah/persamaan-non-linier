const bisection = ({ f, a, b, e }, N = 1, results = []) => {
  const c = (a+b) / 2;
  const bMinC = b - c;
  const fb = f(b);
  const fc = f(c);

  resultPerIteration = {
    iterasi: N,
    a,
    b,
    'b - c': bMinC,
    'f(b)': fb,
    'f(c)': fc,
  };

  
  if (b - c <= e) {
    resultPerIteration.keterangan = 'Titik yang dicari';
    results.push(resultPerIteration);
    return console.log(results);
  }
  
  resultPerIteration.keterangan = 'Bukan titik yang dicari';
  results.push(resultPerIteration);

  f(b)*f(c) <= 0
  ? a = c 
  : b = c;
  
  bisection({ f, a, b, e }, N + 1, results);
};

bisection({
  f: (x) => (x**5)-3*(x**3)+2*(x**2)+7,
  a: -2,
  b: 4,
  e: 0.0001,
});
