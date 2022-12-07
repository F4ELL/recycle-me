import { Children, createContext, ReactNode, useState } from "react"

export type User = {
    id?: string
    name?: string
    email?: string
    address?: string
}

type UserContextType = {
    user: User | undefined
    setUser: React.Dispatch<React.SetStateAction<User>>
}

type UserContextProviderProps = {
    children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
    const [ user, setUser ] = useState<User>({} as User)

    return (
        <UserContext.Provider 
            value={{ 
                user, 
                setUser 
            }}
        >
            {children}
        </UserContext.Provider>
    )
}