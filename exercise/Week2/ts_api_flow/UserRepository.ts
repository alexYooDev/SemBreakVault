import { UserDto } from "./UserDto";

export class UserRepository {
    private users: UserDto[] = [
        {id: "u1", name: "Alex", email: "alex@example.come"},
        {id: "u2", name: "John", email: "john@example.come"},
    ];

    getUserById(id: string): UserDto | undefined {
        return this.users.find(user => user.id == id);
    }

    getUsers(): UserDto[] {
        return this.users;
    }
}