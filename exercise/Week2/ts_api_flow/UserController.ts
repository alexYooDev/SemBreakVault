import { UserService } from "./UserService";
import { UserDto } from "./UserDto";

export class UserController {
    private _service = new UserService();

    async getUserById(id: string): Promise<UserDto | undefined> {
        return await this._service.getUserById(id);
    }

    async getUsers(): Promise<UserDto[]> {
        return await this._service.getUsers();
    }
}