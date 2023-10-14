import { CreateUserDto } from "../dtos/CreateUserDto";
import { UserEntity } from "../entity/UserEntity";
import { LoginUserDto } from "../dtos/LoginUserDto";
import { ReturnLoginDto } from "../dtos/ReturnLoginDto";

export interface IUserService {
  create: (createUserDto: CreateUserDto) => Promise<UserEntity>;

  findById: (id: string) => Promise<UserEntity>;

  findByEmail: (email: string) => Promise<UserEntity>;

  login: (loginUserDto: LoginUserDto) => Promise<ReturnLoginDto>;
}
