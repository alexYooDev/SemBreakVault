import { UserRepository } from "./UserRepository";
import { UserDto } from "./UserDto";

export class UserService {
    private _repository = new UserRepository();

    async getUserById(id: string): Promise<UserDto | undefined> {
        return await this._repository.getUserById(id);
    }
    async getUsers(): Promise<UserDto[]> {
        return await this._repository.getUsers();
    }
}