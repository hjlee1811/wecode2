function even() {
  let array = [];

  for (let i = 1; i < 50; i++) {
    if (i % 2 === 0) {
      array.push(i);
    } else if (i % 2 !== 0) {
      continue;
    }
  }
  return array;
}