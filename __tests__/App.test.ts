import React from 'react';
import renderer from 'react-test-renderer';

function testing (value: number) {
  if (value < 0 || value > 100) {
    return false;
  } else {
    return true;
  }
}

describe('testing', () => {
  test('Valid value', () => {
    expect(testing(50)).toBe(true);
  });
  test('Lesser value', () => {
    expect(testing(-1)).toBe(false);
  });
  test('Greater value', () => {
    expect(testing(101)).toBe(false);
  });
  test('Maximum limit value', () => {
    expect(testing(100)).toBe(true);
  });
  test('Minimum limit value', () => {
    expect(testing(0)).toBe(true);
  });
});
