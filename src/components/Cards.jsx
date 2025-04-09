import React, { use, useState } from 'react'
import ListLanguage from "./languages"

// Utilizzo della usestate per l'interazione tra gli oggetti del layout.

export default function Cards() {
    const list_export = ListLanguage;
    const [isSelect, setSelect] = useState(1);
  return (
    <div className='container card-box row'>
        <div className='container text-hd-box'>
            <h3>Learn Web development</h3>
        </div>
        <div className='btn-groups-box'>
            <button className={`btn btn-add ${isSelect === 1 ? "btn-warning": "btn-primary"}`} onClick={()=>{setSelect(1)}}>Html</button>
            <button className={`btn btn-add ${isSelect === 2 ? "btn-warning": "btn-primary"}`} onClick={()=>{setSelect(2)}}>Css</button>
            <button className={`btn btn-add ${isSelect === 3 ? "btn-warning": "btn-primary"}`} onClick={()=>{setSelect(3)}}>Javascript</button>
            <button className={`btn btn-add ${isSelect === 4 ? "btn-warning": "btn-primary"}`} onClick={()=>{setSelect(4)}}>Node.js</button>
            <button className={`btn btn-add ${isSelect === 5 ? "btn-warning": "btn-primary"}`} onClick={()=>{setSelect(5)}}>Express</button>
            <button className={`btn btn-add ${isSelect === 6 ? "btn-warning": "btn-primary"}`} onClick={()=>{setSelect(6)}}>ReactJS</button>
        </div>
        <div className='container text-box-card'>
            <ul className='row cont-box rounded'>
                {list_export.length !==  0 ? list_export.map((element) =>{
                    if (element.id === isSelect) {
                        return(
                            <>
                            <li className='text-cont col-lg-6'>
                                <h2>{element.title}</h2>
                                <p>{element.description}</p>
                            </li>
                            </>
                        )}
                }) : <li className='text-cont col-lg-6'>
                    <h2 className='error-text'>Stato Inesistente.</h2>
                    <p>Sembra che qualcosa vado storto, ricarica la pagina...</p>
                    </li>}
            </ul>
        </div>
    </div>
  )
}