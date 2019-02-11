export interface IUser {
  readonly username: string;
  readonly description: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly age?: number;
}

export interface ICreatedUser extends IUser {
  readonly id: number;
}
