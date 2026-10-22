function myFunction(m) {
  let y = Math.floor(m / 2);
  for (let i = 0; i < 10; i++) {
    y = m + y + i;
  }
  return y;
}

function powers(n) {
  let y = 0;
  while (Math.pow(2, y) <= n) {
    if (Math.pow(2, y) == n) return y;
    y = y + 1;
  }
  return false;
}

function even(n) {
  if (n % 2 == 0) return true;
}

function sec(n) {
  let y = 2;
  for (let i = 1; i <= n; i++) {
    if (even(i)) y = y + i;
  }
  return y;
}

console.log(sec(4))
