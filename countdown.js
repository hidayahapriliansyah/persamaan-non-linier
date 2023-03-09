const countdown = (countUntil, start = 1) => {
  console.log(start);
  if (start >= countUntil) {
    return;
  } else {
    countdown(countUntil, start + 1);
  }
};

countdown(5);