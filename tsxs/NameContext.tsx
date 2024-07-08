import React, { PropsWithChildren } from "react"

type NameContextType = {
    name: string
}

export const NameContext = React.createContext<NameContextType>({name: '' })

export const NameContextProvider = ({children} : PropsWithChildren) => {

    return (
        <NameContext.Provider value = {{name: 'name'}}>
            {children}
        </NameContext.Provider>
    );
}