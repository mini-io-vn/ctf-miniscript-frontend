
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useReducer } from "react"
import 'firebase/auth';
import { auth, db } from "./firebase";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
// Định nghĩa các hành động
type ActionKey = { type: "login", user: any }

// Định nghĩa kiểu trạng thái
interface DataProcess {
    user: any,
}

const initialState: DataProcess = {
    user: null,
}
const DataProcessContext = createContext<{ state: DataProcess; dispatch: React.Dispatch<ActionKey> } | undefined>(undefined);

function process(state: DataProcess, action: ActionKey): DataProcess {
    switch (action.type) {

        case "login":
            return { ...state, user: action.user };
        default:
            throw new Error();
    }
}
interface InformData {
    auth: string,
    create_at: Date,
    key: string,
    value: string
}
async function getDataUserByKey(key: string, state: DataProcess) {
    if (state.user) {
        try {
            const querySnapshot = await getDocs(collection(db, state.user.uid));
            querySnapshot.docs.forEach(doc => {
                const data = doc.data() as InformData;
                if (data.key === key) {
                    return data.value
                }
            });
        } catch (e) {
            return null
        }
    }
    return null
}
async function saveDataUserByKey(key: string,value:string, state: DataProcess) {
    if (state.user) {
        try {
            const docRef = await addDoc(collection(db, state.user.uid), {
                auth: state.user.email,
                create_at: new Date(),
                key: key,
                value: value
            })
            return docRef.id

        } catch (e) {
            return null
        }
    }
}
async function createUserData(state: DataProcess) {
    if (state.user) {
        try {
            const docRef = await addDoc(collection(db, state.user.uid), {
                auth: state.user.email,
                create_at: new Date(),
                key: "userdata",
                value: state.user.email
            })
            return docRef.id

        } catch (e) {
            return null
        }
    }
    return null
}
function getDataByState(state: DataProcess) {
    if (state.user) {
        try {
            // const userRef = doc(db, "inform_user", "");
        } catch (e) {
            return null
        }
    }
    return null
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
        throw new Error('useRunCode must be used within a RunCodeProvider');
    }
    return context;
}