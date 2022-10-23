import { ILoginFormData } from "../../pages/Login";
import { IRegisterFormData } from "../../pages/Register";
import { IUser, ITechs } from "../types/types";

export interface iLoginResponse {
  user: IUser;
  token: string;
}

export interface IUserContext {
  user: IUser | null;
  userLogin: (
    data: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userRegister: (data: IRegisterFormData) => void;
  currentRoute: string | null;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
  globalLoading: boolean;
  userLogout: () => void;
  techsList: ITechs[] | [];
  setTechsList: React.Dispatch<React.SetStateAction<ITechs[] | []>>;
}
