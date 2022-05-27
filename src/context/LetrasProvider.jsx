import { useState, createContext } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {

    const nombre = "Artista";

    return (
        <LetrasContext.Provider
            value={{
                nombre
            }}        
        >
            {children}
        </LetrasContext.Provider>
    )
}

export{
    LetrasProvider
}

export default LetrasContext;