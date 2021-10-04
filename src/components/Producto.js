import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
   
    
    const {id, nombre, precio} = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id ); 
        agregarProducto([
            ...carrito,
            ...producto
        ]);
    }
    //emilina un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //colocar los productos en el state
        agregarProducto(productos)

    }


    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            
                {productos
                ?
                    (
                        <button 
                            type="button"
                            onClick={ () => seleccionarProducto(id)}
                >Comprar</button>
                    )
                
               :
                    (
                        
                        <button 
                            type="button"
                            onClick={ () => eliminarProducto(id)}
                        >Eliminiar</button>
                        
                    )
               }
        </div>
     );
}
 
export default Producto;