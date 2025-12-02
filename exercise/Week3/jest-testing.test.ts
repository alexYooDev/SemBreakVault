// jest-testing.test.ts
// Description
// This file is a test file for the jest-testing.ts file
// It tests the add, subtract, multiply, and divide functions   

import { test, expect, describe } from '@jest/globals';

function add(a: number, b: number) : number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}

describe('add', () => {
    test('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});


describe('subtract', () => {
    test('should subtract two numbers', () => {
        expect(subtract(1, 2)).toBe(-1);
    });
});

describe('multiply', () => {
    test('should multiply one number by another', () => {
        expect(multiply(2,3)).toBe(6);
    });
});

describe('divide', () => {
    test('should divide one number by another', () => {
       expect(divide(24, 8)).toBe(4); 
    });
});

