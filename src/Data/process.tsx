import { createContext, useContext, useReducer } from "react";
import "firebase/auth";
// Định nghĩa các hành động
type ActionKey = { type: "login"; user: any } | { type: "logout" }|{type:"notification";notification:Notification};
// Định nghĩa kiểu trạng thái
interface DataProcess {
  user: any;
  notification:Notification
}
type TypeNotifucation="info" | "warning" | "success" | "error" | "loading" | undefined

interface Notification {
    show:boolean,
    type: TypeNotifucation,
    content:string,
}
const initialState: DataProcess = {
  user: null,
  notification:{
    show:false,
    type:"success",
    content:""
  }
};
const DataProcessContext = createContext<
  { state: DataProcess; dispatch: React.Dispatch<ActionKey> } | undefined
>(undefined);

function process(state: DataProcess, action: ActionKey): DataProcess {
  switch (action.type) {
    case "logout":
        return { ...state, user: null };
    case "login":
        return { ...state, user: action.user };
    case "notification":
        if (!action.notification.show){
            action.notification={
                show:false,
                type:undefined,
                content:""
            }
        }
        return { ...state, notification: action.notification };
    default:
        throw new Error();
  }
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(process, initialState);
  return (
    <DataProcessContext.Provider value={{ state, dispatch }}>
      {children}
    </DataProcessContext.Provider>
  );
}
export function useDataProcess() {
  const context = useContext(DataProcessContext);
  if (!context) {
    throw new Error("useRunCode must be used within a RunCodeProvider");
  }
  return context;
}
