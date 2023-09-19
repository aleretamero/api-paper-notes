import { User } from "../../database/models/User";
import { CreateUserDto } from "./dtos/CreateUserDto";
import { UserEntity } from "./entity/UserEntity";

export class UserRepository {
  create = async (createUserDto: CreateUserDto): Promise<UserEntity> => {
    const user = new User(createUserDto);

    await user.save();

    return user;
  };
}
