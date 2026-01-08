import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deletAll } from "../redux/action";
import { deletProduct } from "../redux/action";

export default function ProductApp(){
    const [name, setName]=useState("");

    const products=useSelector(state=> state.products);
    const dispatch = useDispatch();

    const handleAdd=()=>{
        dispatch(addProduct({id:products.length+1,
            name:name
        }))

    }
    return(
        <>
             <h2> Redux CRUD</h2>
             <input
             value={name}
             onChange={e=>setName(e.target.value)}
             />
             <button onClick={handleAdd}>add</button>
             <button onClick={()=>dispatch(deletAll())}>deleltall</button>
             <ul>
                {products.map(p=>(
                    <li key={p.id}>
                        {p.name}
                    <button onClick={()=> dispatch(deletProduct(p.id))}>
                      supprimer
                    </button>

                    </li>
                ))}
             </ul>
        
        </>
    )
}









