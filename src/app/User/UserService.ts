import { CreateUserDto } from "./dtos/CreateUserDto";

import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

import { LoginUserDto } from "./dtos/LoginUserDto";
import { ReturnUserDto } from "./dtos/ReturnUserDto";
import { ReturnLoginDto } from "./dtos/ReturnLoginDto";
import { IUserRepository } from "./interfaces/IUserRepository";
import { IUserService } from "./interfaces/IUserService";
import { NotFound } from "../../helpers/classes/NotFound";
import { BadRequest } from "../../helpers/classes/BadRequest";
import { UserEntity } from "./entity/UserEntity";

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  create = async (createUserDto: CreateUserDto): Promise<ReturnUserDto> => {
    const userEmailAlreadyExists = await this.findByEmail(createUserDto.email);

    if (userEmailAlreadyExists)
      throw new BadRequest(
        `The requested email: ${createUserDto.email} is already registered in our database.`,
      );

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.userRepository.create(createUserDto);

    return new ReturnUserDto(user);
  };

  findById = async (id: string): Promise<ReturnUserDto> => {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFound(`User: _id ${id} not found!`);

    return new ReturnUserDto(user);
  };

  login = async ({
    email,
    password,
  }: LoginUserDto): Promise<ReturnLoginDto> => {
    const user = await this.findByEmail(email);

    if (!user) throw new BadRequest("Invalid username or password");

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new BadRequest("Invalid username or password");

    const secretKey = process.env.JWT_TOKEN!;

    const token = sign({ ...new ReturnUserDto(user) }, secretKey, {
      expiresIn: "7d",
    });

    return new ReturnLoginDto(user, token);
  };

  private readonly findByEmail = async (
    email: string,
  ): Promise<UserEntity | null> => {
    return await this.userRepository.findByEmail(email);
  };
}
