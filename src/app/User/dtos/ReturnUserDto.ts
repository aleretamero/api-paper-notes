import { UserEntity } from "../entity/UserEntity";

export class ReturnUserDto {
  public readonly _id: string;
  public readonly name: string;
  public readonly email: string;

  constructor(user: UserEntity) {
    this._id = user._id;
    this.name = user.name;
    this.email = user.email;
  }
}
