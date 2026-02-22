import {add, subtract, multiply, divide, getUserName} from './math';
// const {add, subtract, multiply, divide, getUserName} = require('./math.js');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplies 4 * 2 to equal 8', () => {
    expect(multiply(4, 2)).toBe(8);
}); 

test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('returns "Unknown User" when user is null', () => {
    expect(getUserName(null)).toBe("Unknown User");
});

test('returns user name when user object is provided', () => {
    const user = { name: "Alice" };
    expect(getUserName(user)).toBe("Alice");
});
