const testFunction = (a, b) => {
  a = b;
  console.log('a', a);
  console.log('b', b);
}

testFunction(2, 5);
