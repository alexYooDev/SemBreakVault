import { test, expect } from "@jest/globals";

interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUserData() : Promise<User> {
    return {
        id: 1,
        name: "John Snow",
        email: "johnsnow@gmail.com"
    };
}

// Simulates successful async data fetch with delay
async function fetchUserDataWithTimeout() : Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "John Snow",
                email: "johnsnow@gmail.com"
            });
        }, 100); // Reduced timeout to prevent worker exit issues
    });
}

// Simulates failed async request
async function fetchUserDataWithError() : Promise<User> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Timeout of 1000ms exceeded"));
        }, 100);
    });
}

test('fetchUserData should return user data', async () => {
    const user = await fetchUserData();
    expect(user).toEqual({
        id: 1,
        name: "John Snow",
        email: "johnsnow@gmail.com"
    });
});

test('fetchUserDataWithTimeout should return user data', async () => {
    const user = await fetchUserDataWithTimeout();
    expect(user).toEqual({
        id: 1,
        name: "John Snow",
        email: "johnsnow@gmail.com"
    });
});

test('fetchUserDataWithTimeout resolves user data', async () => {
    await expect(fetchUserDataWithTimeout()).resolves.toEqual({
        id: 1,
        name: "John Snow",
        email: "johnsnow@gmail.com"
    });
});

test('fetchUserDataWithError rejects with timeout error', async () => {
    await expect(fetchUserDataWithError()).rejects.toThrow("Timeout of 1000ms exceeded");
});

test('Promise.all should resolve all promises', async () => {
    const user = await fetchUserData();
    const userWithTimeout = await fetchUserDataWithTimeout();
    const users = await Promise.all([user, userWithTimeout]);
    expect(users).toEqual([
        {
            id: 1,
            name: "John Snow",
            email: "johnsnow@gmail.com"
        },
        {
            id: 1,
            name: "John Snow",
            email: "johnsnow@gmail.com"
        }
    ]);
});




