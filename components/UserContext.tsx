import { createContext, useState } from 'react';

type Props = {
    children: React.ReactNode
}

interface UserContextType {
    isAuth: boolean,
    toggleAuth: () => void
}

export const UserContext = createContext<UserContextType>({
    isAuth: false,
    toggleAuth: () => { }
})

const UserContextProvider: React.FC<Props> = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const toggleAuth = () => {
        setIsAuth(prevValue => !prevValue)
    }

    const contextValue: UserContextType = {
        isAuth,
        toggleAuth
    }

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}

export default UserContextProvider;