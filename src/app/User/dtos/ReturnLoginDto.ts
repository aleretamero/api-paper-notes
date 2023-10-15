import { UserEntity } from "../entity/UserEntity";
import { ReturnUserDto } from "./ReturnUserDto";

export class ReturnLoginDto {
  public readonly user: ReturnUserDto;
  public readonly token: string;

  constructor(user: UserEntity, token: string) {
    this.user = new ReturnUserDto(user);
    this.token = token;
  }
}
