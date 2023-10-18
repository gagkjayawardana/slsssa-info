export interface UserInterface {
  id: number;
  name: string;
  userName: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface JwtPayload {
  userName: string;
}
