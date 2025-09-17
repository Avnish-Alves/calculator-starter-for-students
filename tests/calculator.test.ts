// tests/calculator.test.ts
import Calculator from '../src/calculator';

describe('Calculator - public tests', () => {
  test('simple addition', () => {
    expect(Calculator.evaluate('2+2')).toBe(4);
  });

  test('division', () => {
    expect(Calculator.evaluate('10 / 2')).toBe(5);
  });

  test('operator precedence', () => {
    expect(Calculator.evaluate('2 + 3 * 4')).toBe(14);
  });

  test('parentheses', () => {
    expect(Calculator.evaluate('(2 + 3) * 4')).toBe(20);
  });

  test('decimals and rounding', () => {
    expect(Calculator.evaluate('0.1 + 0.2')).toBeCloseTo(0.3, 10);
  });

  test('negative results', () => {
    expect(Calculator.evaluate('5 - 10')).toBe(-5);
  });
});

describe('Calculator - error / edge cases', () => {
  test('empty expression throws', () => {
    expect(() => Calculator.evaluate('')).toThrow();
  });

  test('invalid characters throw', () => {
    expect(() => Calculator.evaluate('2 + foo')).toThrow();
  });

  test('malformed parentheses throw', () => {
    expect(() => Calculator.evaluate('(2 + 3')).toThrow();
  });

  test('division by zero throws', () => {
    expect(() => Calculator.evaluate('1 / 0')).toThrow();
  });
});

/*
  NOTE:
  - Keep hidden/extra tests in your authoritative harness (outside student repos) to prevent hardcoding.
  - This file is a helpful local test set students can run before submitting.
*/
