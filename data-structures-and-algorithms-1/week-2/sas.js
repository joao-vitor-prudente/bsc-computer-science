
function approximateSqrt(x, digits) {
  if (!Number.isSafeInteger(x) || x < 0) {
    throw new RangeError("x must be a non-negative safe integer");
  }

  if (!Number.isSafeInteger(digits) || digits < 0) {
    throw new RangeError("digits must be a non-negative integer");
  }

  const N = BigInt(x);
  const scale = 10n ** BigInt(digits);
  const limit = scale * scale;

  // Integer square root, calculated exactly with BigInt.
  function isqrt(n) {
    if (n < 2n) return n;

    let a = n;
    let b = (a + 1n) / 2n;

    while (b < a) {
      a = b;
      b = (a + n / a) / 2n;
    }

    return a;
  }

  const a0 = isqrt(N);

  if (a0 * a0 === N) {
    return { numerator: a0, denominator: 1n };
  }

  // Continued fraction recurrence for sqrt(N).
  let m = 0n;
  let d = 1n;
  let a = a0;

  let p0 = 0n, p1 = 1n;
  let q0 = 1n, q1 = 0n;

  while (true) {
    const p = a * p1 + p0;
    const q = a * q1 + q0;

    // |sqrt(N) - p/q| < 1/scale
    // Check exactly, without floating-point arithmetic.
    const delta = p * p - N * q * q;
    const absDelta = delta < 0n ? -delta : delta;

    // Sufficient condition:
    // |p² - Nq²| * scale² < q²
    if (absDelta * absDelta * limit < q * q) {
      return { numerator: p, denominator: q };
    }

    p0 = p1;
    p1 = p;
    q0 = q1;
    q1 = q;

    m = d * a - m;
    d = (N - m * m) / d;
    a = (a0 + m) / d;
  }
}

const result = approximateSqrt(7, 1);

console.log(`${result.numerator}/${result.denominator}`);
console.log(Number(result.numerator) / Number(result.denominator));
