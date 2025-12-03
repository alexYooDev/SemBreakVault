import { test, expect, jest } from "@jest/globals";

interface User {
    id: number;
    name: string;
    email: string;
};

const partialMockUser: Partial<User> = {
    id: 1,
    name: "John Snow",
    email: "johnsnow@gmail.com"
} as const 

function createMockUser () : Partial<User> {
    return partialMockUser;
};

function getUserInfo() : Partial<User> {
    const user = createMockUser();
    return user;
};
function isUser(user: Partial<User>): user is Partial<User> {
    return typeof user.id === 'number' && typeof user.name === 'string' && typeof user.email === 'string';
}

test("getUserInfo should return mock user info", () => {
    const user = getUserInfo();
    expect(isUser(user)).toBe(true);
    expect(user).toEqual(partialMockUser);
});

test('validate callback function', () => {
    const mockCallback = jest.fn((user: Partial<User>) => user);
    const user = getUserInfo();
    mockCallback(user);
    expect(mockCallback).toHaveBeenCalledWith(user);
});

