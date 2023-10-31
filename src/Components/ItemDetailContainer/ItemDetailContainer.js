import React from "react";
import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Products from '../Json/Productos.json';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(Products.find((product) => product.id === parseInt(id)));
                    }, 2000);
                });
                setItem(data);
            } catch (error) {
                // Manejo de errores, por ejemplo, mostrar un mensaje de error
                console.error("Error:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {item ? <ItemDetail item={item} /> : "Cargando..."}
        </div>
    );
}

export default ItemDetailContainer