import { UserRepository } from "./userRepository";

export class UserService {
    private repo = new UserRepository();

    fetchUser(email: string) {
        if (!email.trim()) {
            throw new Error("Email cannot be empty");
        }

        return this.repo.getUserByEmail(email);
    }
}