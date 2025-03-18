
export interface IUser {
    token: string;
    user:User
}

export interface User {
  address: string;
  name: string | null;
  imageUrl: string | null;
  id: number;
  createdAt: string;
  updatedAt: string;
}
