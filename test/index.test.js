const isTwentyEight = require('../index');

test('returns true for number 28', () => {
    expect(isTwentyEight(28)).toBe(true);
});

test('returns false for number 27', () => {
    expect(isTwentyEight(27)).toBe(false);
});

test('returns false for inputs that are not numbers', () => 
{
    expect(isTwentyEight('28')).toBe(false);
    expect(isTwentyEight('abc')).toBe(false);
    expect(isTwentyEight('twenty-eight')).toBe(false);
});

test('returns false for empty inputs', () =>  {
    expect(isTwentyEight(' ')).toBe(false);
    expect(isTwentyEight('')).toBe(false);
});