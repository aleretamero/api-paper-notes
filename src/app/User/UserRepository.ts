import { User } from "../../database/models/User";
import { InternalServerError } from "../../helpers/classes/InternalServerError";
import { CreateUserDto } from "./dtos/CreateUserDto";
import { UserEntity } from "./entity/UserEntity";
import { IUserRepository } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  create = (createUserDto: CreateUserDto): Promise<UserEntity> => {
    try {
      return User.create(createUserDto);
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to create the user. Please try again later",
      );
    }
  };

  findById = (id: string): Promise<UserEntity | null> => {
    try {
      return User.findOne({ _id: id });
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to find the user. Please try again later",
      );
    }
  };

  findByEmail = (email: string): Promise<UserEntity | null> => {
    try {
      return User.findOne({ email });
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to find the user. Please try again later",
      );
    }
  };
}
