export interface LoginRequestDto {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean;
}
