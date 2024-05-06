import React from 'react'



function Kart({ isim, firma, tel, mail }) {
    return (
        <div>
            <div><p>isim soyisim: {isim}</p></div>
            <div><p>Çalıştığı firma: {firma}</p></div>
            <div><p>Telefon: {tel}</p></div>
            <div><p>E-Posta: {mail}</p></div>
        </div>
    )
}


export default Kart