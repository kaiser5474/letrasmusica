import { useState, createContext } from "react";
import axios from 'axios';

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {

    const nombre = "Artista";
    const [alerta, setAlerta] = useState("");
    const [letra, setLetra] = useState("");
    const [cargando, setCargando] = useState(false);

    const busquedaLetra = async (busqueda) => {
        setCargando(true);
        try {
            const { artista, cancion } = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const {data} = await axios(url);
            setLetra(data.lyrics);
            console.log(data);
        } catch (error) {
            setAlerta("Canción no encontrada");
            console.log(error);
        }finally{
            setCargando(false);
        }
    }

    return (
        <LetrasContext.Provider
            value={{
                nombre,
                alerta,
                letra,
                cargando,
                setAlerta,
                busquedaLetra
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