import { CreateUserDto } from "../dtos/CreateUserDto";
import { UserEntity } from "../entity/UserEntity";

export interface IUserRepository {
  create: (createUserDto: CreateUserDto) => Promise<UserEntity>;

  findById: (id: string) => Promise<UserEntity | null>;

  findByEmail: (email: string) => Promise<UserEntity | null>;
}
