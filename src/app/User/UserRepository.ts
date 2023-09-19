import { User } from "../../database/models/User";
import { CreateUserDto } from "./dtos/CreateUserDto";
import { UserEntity } from "./entity/UserEntity";

export class UserRepository {
  create = (createUserDto: CreateUserDto): Promise<UserEntity> => {
    return User.create(createUserDto);
  };

  findByEmail = (email: string): Promise<UserEntity | null> => {
    return User.findOne({ email });
  };
}
