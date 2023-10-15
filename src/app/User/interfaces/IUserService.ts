import { CreateUserDto } from "../dtos/CreateUserDto";
import { LoginUserDto } from "../dtos/LoginUserDto";
import { ReturnLoginDto } from "../dtos/ReturnLoginDto";
import { ReturnUserDto } from "../dtos/ReturnUserDto";

export interface IUserService {
  create: (createUserDto: CreateUserDto) => Promise<ReturnUserDto>;

  findById: (id: string) => Promise<ReturnUserDto>;

  login: (loginUserDto: LoginUserDto) => Promise<ReturnLoginDto>;
}
