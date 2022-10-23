import { ILoginFormData } from "../../pages/Login";
import { IRegisterFormData } from "../../pages/Register/types";
import { IUser, ITechs, IWorks } from "../types/types";

export interface iLoginResponse {
  user: IUser;
  token: string;
}

export interface IRegisterResponse {
  id: string;
  name: string;
  emai: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: ITechs[];
  works: IWorks[];
  avatar_url: string | null;
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
