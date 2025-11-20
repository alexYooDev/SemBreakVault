import { UserDTO } from "./userDto";

export class UserRepository {
    private users: UserDTO[] = [
        {id: "1", email: "alex@example.com"},
        {id: "2", email: "john@example.com"}
    ];
    
    getUserByEmail(email: string) {
        return this.users.find(user => user.email === email);
    }
}