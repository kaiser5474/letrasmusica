import {useState} from 'react'
import useLetras from '../hooks/useLetras';

const Formulario = () => {
    const {nombre} = useLetras();
    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
  return (
    <form>
        <legend>Busca por artista y canción</legend>
        <div className='form-grid'>
            <div>
                <label>{nombre}</label>
                <input 
                    type='text'
                    name='artista'
                    placeholder='Busca por artista'
                    value={busqueda.artista}
                    onChange={(e) => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value 
                    })}
                />
            </div>
            <div>
                <label>Canción</label>
                <input 
                    type='text'
                    name='cancion'
                    placeholder='Busca por canción'
                    value={busqueda.cancion}
                    onChange={(e) => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value 
                    })}
                />
            </div>
            <input type="submit"/>
        </div>
    </form>
  )
}

export default Formulario