function root_bisection(f, a, b, tol, N=100) {
  let iter = 0;
  let fa = f(a);
  let fb = f(b);

  while(Math.abs(b-a) > tol) {
    iter++;
    if(iter > N) {
      console.warning("iterations maximum exceeded");
      break;
    }
    let x = (a+b)/2;
    let fx = f(x);
    if(fa*fx > 0) {
      a = x;
      fa = fx;
    } else {
      b = x;
      fb = fx;
    }
  }

  // iterasi nilai x sebagai return value
  let root = (a+b)/2;
  return { 'function': f, 'root': root, 'iter': iter };
}

root_bisection(
  (x) => (x**5)-3*(x**3)+2*(x**2)+7,
  -2,
  4,
  0.0001
);