import React, {useState} from 'react';
import Timer from '../components/Timer';

const Home = () => {
    const [mostrarReloj, setMostrarReloj ] = useState(false)
    return (
        <div>
            <h1>Homepage</h1>
            <hr />
            <button onClick={() => setMostrarReloj(mostrarReloj ? false : true)}>Mostrar reloj</button> <span>{`${mostrarReloj}`}</span>
            { mostrarReloj && <Timer />}
        </div>
    );
}

export default Home;
