import { CreateUserDto } from "./dtos/CreateUserDto";

import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

import { UserEntity } from "./entity/UserEntity";
import { LoginUserDto } from "./dtos/LoginUserDto";
import { ReturnUserDto } from "./dtos/ReturnUserDto";
import { ReturnLoginDto } from "./dtos/ReturnLoginDto";
import { IUserRepository } from "./interfaces/IUserRepository";
import { IUserService } from "./interfaces/IUserService";

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  create = async (createUserDto: CreateUserDto): Promise<UserEntity> => {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    return this.userRepository.create(createUserDto);
  };

  findById = async (id: string): Promise<UserEntity> => {
    const user = await this.userRepository.findById(id);

    if (!user) throw new Error(`User: _id ${id} not found!`);

    return user;
  };

  findByEmail = async (email: string): Promise<UserEntity> => {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error(`User: ${email} not found!`);

    return user;
  };

  login = async ({
    email,
    password,
  }: LoginUserDto): Promise<ReturnLoginDto> => {
    const user = await this.findByEmail(email).catch(() => undefined);

    if (!user) throw new Error("Invalid username or password");

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Error("Invalid username or password");

    const secretKey = process.env.JWT_TOKEN!;

    const token = sign({ ...new ReturnUserDto(user) }, secretKey, {
      expiresIn: "7d",
    });

    return new ReturnLoginDto(user, token);
  };
}
