import { useEffect, useState } from 'react'

export const Cargando = () => {
    const [datos,setDatos]=useState([]);
    class Articulo{
        constructor(title,img){
            this.title=title;
            this.img=img;
        }
    }


    useEffect(()=>{
        const defaultArticulo = new Articulo('Esperando...', "/"); // Valores por defecto
        const newArray = [];

        for (let i = 0; i < 50; i++) {
            newArray.push(defaultArticulo);
            
        }    
        setDatos(newArray);
    },[])
    
    return (
    <section className='section-espera'>
        {
            datos.map((dato,i)=>{
                return <article key={i}>
                    <div></div>
                    <h3></h3>
                </article>
            })
        }
    </section>
  )
}
