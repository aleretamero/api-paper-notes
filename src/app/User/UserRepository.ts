import { User } from "../../database/models/User";
import { CreateUserDto } from "./dtos/CreateUserDto";
import { UserEntity } from "./entity/UserEntity";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  create = (createUserDto: CreateUserDto): Promise<UserEntity> => {
    return User.create(createUserDto);
  };

  findById = (id: string): Promise<UserEntity | null> => {
    return User.findOne({ _id: id });
  };

  findByEmail = (email: string): Promise<UserEntity | null> => {
    return User.findOne({ email });
  };
}
