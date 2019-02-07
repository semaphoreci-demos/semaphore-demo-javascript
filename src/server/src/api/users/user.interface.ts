export class IUser {
  readonly username: string;
  readonly description: string;
}

export class ICreatedUser extends IUser {
  readonly id: number;
}
