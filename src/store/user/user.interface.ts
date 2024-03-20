import { UserType } from "src/interface/user.interface";

export interface UserInitialStateType {
  user: UserType | null;
  isLoading: boolean;
}
