export type UltType = {
  _id: string;
  message: string;
  user: UserType;
  datetime: number;
  likes: number;
};

export type UserType = {
  name: string;
  username: string;
  profilePicture: string;
  ults: Array<UltType>;
};