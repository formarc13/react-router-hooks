import React from 'react';
import { useParams } from "react-router-dom";

const Detalle = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Detalle de producto {id}</h1>
        </div>
    );
}

export default Detalle;
