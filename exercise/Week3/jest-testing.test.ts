// jest-testing.test.ts
// Description
// This file is a test file for the jest-testing.ts file
// It tests the add, subtract, multiply, and divide functions   

import { test, expect, describe } from '@jest/globals';

function add(a: number, b: number) : number {
    if (a === 0 || b === 0) {
        throw new Error('Cannot add by zero');
    }

    if (a < 0 || b < 0){
        throw new Error('Cannot add by a negative number');
    }

    if (a >= Number.MAX_SAFE_INTEGER || b >= Number.MAX_SAFE_INTEGER){
        throw new Error('Cannot add by a big number');
    }

    return a + b;
}

function subtract(a: number, b: number): number {

    if (a === 0 || b === 0) {
        throw new Error('Cannot subtract by zero');
    }

    if (a < 0 || b < 0){
        throw new Error('Cannot subtract by a negative number');
    }

    if (a >= Number.MAX_SAFE_INTEGER || b >= Number.MAX_SAFE_INTEGER){
        throw new Error('Cannot subtract by a big number');
    }   

    return a - b;
}

function multiply(a: number, b: number): number {
    if (a === 0 || b === 0) {
        throw new Error('Cannot multiply by zero');
    }

    if (a < 0 || b < 0){
        throw new Error('Cannot multiply by a negative number');
    }

    if (a >= Number.MAX_SAFE_INTEGER || b >= Number.MAX_SAFE_INTEGER){
        throw new Error('Cannot multiply by a big number');
    }   

    return a * b;
}

function divide(a: number, b: number): number {
    if (a === 0 || b === 0) {
        throw new Error('Cannot divide by zero');
    }

    if (a < 0 || b < 0){
        throw new Error('Cannot divide by a negative number');
    }

    if (a >= Number.MAX_SAFE_INTEGER || b >= Number.MAX_SAFE_INTEGER){
        throw new Error('Cannot divide by a big number');
    }   

    return a / b;
}

describe('add', () => {
    test('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('should throw an error when adding by zero', () => {
        expect(() => add(1, 0)).toThrow('Cannot add by zero');
    });

    test('should throw an error when adding by a negative number', () => {
        expect(() => add(1, -1)).toThrow('Cannot add by a negative number');
    });

    // big number
    test('should throw an error when adding by a big number', () => {
        expect(() => add(Number.MAX_SAFE_INTEGER, 1)).toThrow('Cannot add by a big number');
    });
});


describe('subtract', () => {
    test('should subtract two numbers', () => {
        expect(subtract(1, 2)).toBe(-1);
    });

    test('should throw an error when subtracting by zero', () => {
        expect(() => subtract(1, 0)).toThrow('Cannot subtract by zero');
    });

    test('should throw an error when subtracting by a negative number', () => {
        expect(() => subtract(1, -1)).toThrow('Cannot subtract by a negative number');
    });

    // big number
    test('should throw an error when subtracting by a big number', () => {
        expect(() => subtract(Number.MAX_SAFE_INTEGER, 1)).toThrow('Cannot subtract by a big number');
    });
});

describe('multiply', () => {
    test('should multiply one number by another', () => {
        expect(multiply(2,3)).toBe(6);
    });

    test('should throw an error when multiplying by zero', () => {
        expect(() => multiply(1, 0)).toThrow('Cannot multiply by zero');
    });

    test('should throw an error when multiplying by a negative number', () => {
        expect(() => multiply(1, -1)).toThrow('Cannot multiply by a negative number');
    });

    // big number
    test('should throw an error when multiplying by a big number', () => {
        expect(() => multiply(Number.MAX_SAFE_INTEGER, 2)).toThrow('Cannot multiply by a big number');
    });
});

describe('divide', () => {
    test('should divide one number by another', () => {
       expect(divide(24, 8)).toBe(3); 
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw an error when dividing by a negative number', () => {
        expect(() => divide(1, -1)).toThrow('Cannot divide by a negative number');
    });

    // big number
    test('should throw an error when dividing by a big number', () => {
        expect(() => divide(Number.MAX_SAFE_INTEGER, 2)).toThrow('Cannot divide by a big number');
    });
});

