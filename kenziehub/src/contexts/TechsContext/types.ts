import { ITechs } from "../types/types";

export interface ITechsContext {
  userTechs: (
    data: ITechs,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  cadModal: boolean;
  setCadModal: React.Dispatch<React.SetStateAction<boolean>>;
  userTechsDelete: (
    clickedTech: ITechs,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}
