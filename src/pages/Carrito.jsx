import React, { useState, useEffect } from 'react';

const Carrito = () => {
    const [ productos, setProductos ] = useState([]);
    const [ carrito, setCarrito ] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

            return respuesta;
        }
        
        fetchProductos()
        .then(res => res.json())
        .then(data => {
            let productosModificados = data.map(prod => {
                return {
                    id: prod.id,
                    nombre: prod.name,
                    precio: 100,
                    cantidad: 0,
                }
            })
            setProductos(productosModificados)
        })
        .catch((error) => console.log(error))
    }, [])

    const incrementar = (id) => {
        let productosModificados = productos.map(prod => {
            if(prod.id === id){
                prod.cantidad = prod.cantidad + 1;
            }
            return prod;
        });

        setProductos(productosModificados);
    }

    const decrementar = (id) => {
        let productosModificados = productos.map(prod => {
            if(prod.id === id){
                prod.cantidad = prod.cantidad > 0 ? prod.cantidad - 1 : 0;
            }
            return prod;
        });

        setProductos(productosModificados);
    }

    const agregarAlCarrito = (id) => {
        let productoEnCarrito = carrito.find(prod => prod.id === id);
        let producto = productos.find(prod => prod.id === id);
        
        if(productoEnCarrito === undefined){
            producto = {
                ...producto,
                cantidadEnCarrito: producto.cantidad
            }
            setCarrito([...carrito, producto])
        }else{
            productoEnCarrito.cantidadEnCarrito = productoEnCarrito.cantidadEnCarrito + producto.cantidad
            setCarrito([...carrito])
        }

        let productosModificados = productos.map(prod => {
            if(prod.id === id){
                prod.cantidad = 0;
            }
            return prod;
        });
        setProductos(productosModificados)
    }


    
    return (
        <div >
            <h1>CARRITO</h1>
            <ul>
                {
                    productos.map(prod => (
                        <li key={prod.id}>
                            {prod.nombre} ${prod.precio} <button onClick={() => decrementar(prod.id)}>-</button><span>{prod.cantidad}</span><button onClick={() => incrementar(prod.id)}>+</button> <button onClick={() => agregarAlCarrito(prod.id)}>Agregar al carrito</button>
                        </li>
                    ))
                }
            </ul>
            <section>
                <h2>Agregados al carrito</h2>
                <button >VACIAR CARRITO</button>
                <ul>
                    <li>Nombre x Cantidad <button >Quitar del carrito</button></li>
                </ul>
            </section>
        </div>
    );
}

export default Carrito;
