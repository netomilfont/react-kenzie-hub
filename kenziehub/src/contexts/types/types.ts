export interface IWorks {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

export interface ITechs {
  id?: string;
  title: string;
  status: string;
}

export interface IUser {
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

export interface IDefaultContextProps {
  children: React.ReactNode;
}
