const {isTwentyEight, isTwentyEightYesNo} = require('../index.js');


// isTwentyEight tests
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

// isTwentyEightYesNo tests

test('returns yes if number is 28', () => {
    expect(isTwentyEightYesNo(28)).toBe('yes');
})

test ('returns no for other numbers than 28', () => 
{
    expect(isTwentyEightYesNo(27)).toBe('no');
    expect(isTwentyEightYesNo(29)).toBe('no');
    expect(isTwentyEightYesNo(6000)).toBe('no');
    expect(isTwentyEightYesNo(0)).toBe('no');
});

test ('returns no for inputs that are not numbers', () => 
{
    expect(isTwentyEightYesNo('@')).toBe('no');
    expect(isTwentyEightYesNo('abc')).toBe('no');
    expect(isTwentyEightYesNo('twenty-eight')).toBe('no');
    expect(isTwentyEightYesNo('')).toBe('no');
});