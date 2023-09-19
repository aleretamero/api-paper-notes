import { UserRepository } from "./UserRepository";
import { CreateUserDto } from "./dtos/CreateUserDto";
import bcrypt from "bcrypt";
import { UserEntity } from "./entity/UserEntity";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create = async (createUserDto: CreateUserDto): Promise<UserEntity> => {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    return await this.userRepository.create(createUserDto);
  };
}
