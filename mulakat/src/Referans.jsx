import React, { useState } from 'react'
import Card from './kart.jsx'

import "./ref.css"

function Referans() {

    const [isim, setIsım] = useState("")
    const [firma, setFirma] = useState("")
    const [tel, setTel] = useState("")
    const [mail, setMail] = useState("")

    const [isVisible, setIsVisible] = useState(true)
    const [cardVisible, setCardIsVisible] = useState(false)
    const [copyRef, setCopyRef] = useState(false)

    const toggleVisible = () => {
        setIsVisible(!isVisible);
        setCardIsVisible(!cardVisible)
    }

    const copyDiv = () => {
        setCopyRef(true)
    }

    const deleteRef = () => {
        setCopyRef(false)
    }


    const [newRef, setNewRef] = useState([])

    // const addNew = () => {
    //     const newCopy = <div key={newRef.length}>
    //         <h3>Referans Ekle</h3>
    //         <form action="#">
    //             <div className="form-group">
    //                 <label htmlFor="adiSoyadi">Adı Soyadı *</label>
    //                 <input type="text" value={isim} onChange={(e) => setIsım(e.target.value)} className="form-control" required />

    //                 <label htmlFor="calistigiFirma">Çalıştığı Firma / Görevi</label>
    //                 <input type="text" value={firma} onChange={(e) => setFirma(e.target.value)} className="form-control" />
    //             </div>

    //             <div className="form-group">
    //                 <label htmlFor="telefon">Telefon</label>
    //                 <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" />
    //             </div>

    //             <div className="form-group">
    //                 <label htmlFor="eposta">E-posta *</label>
    //                 <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} className="form-control" required />
    //             </div>

    //             <div>
    //                 <button type="submit" className="btn btn-primary btn1">Referansı Sil</button>
    //                 <button type="submit" onClick={toggleVisible} className="btn btn-primary btn2">Referansı Kaydet
    //                 </button>
    //             </div>

    //             <div>
    //                 <button type="submit" onClick={copyDiv} className="btn btn-primary btn2">Referansı Ekle</button>
    //             </div>
    //         </form>
    //     </div>;

    //     setNewRef([...newRef, newCopy])

    // }




    return (
        <div>
            {isVisible && (
                <div className='container'>
                    <div className="row">
                        <div className="baslik">
                            <h3>Referanslar</h3>
                            <p>Referans eklemek, şirketlerin sana karşı güvenini arttırır ve seni öne çıkartır.</p>
                        </div>
                        <hr />
                        <form action="#">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="adiSoyadi">Adı Soyadı *:</label>
                                        <input type="text" value={isim} onChange={(e) => setIsım(e.target.value)} className="form-control" required />

                                        <label htmlFor="calistigiFirma">Çalıştığı Firma / Görevi:</label>
                                        <input type="text" value={firma} onChange={(e) => setFirma(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="telefon">Telefon:</label>
                                        <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" />
                                        <label htmlFor="eposta">E-posta *:</label>
                                        <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} className="form-control" required />
                                    </div>
                                </div>
                            </div>

                            <div className='button-group'>
                                <button type="submit" className="btn btn-primary btn-delete">Referansı Sil</button>
                                <button type="submit" onClick={toggleVisible} className="btn btn-primary btn-save">Referansı Kaydet
                                </button>
                            </div>

                            <hr />

                            <div>
                                <button type="submit" onClick={copyDiv} className="btn btn-primary btn-add">Referansı Ekle</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}



            {cardVisible && (
                <div>
                    <Card isim={isim} firma={firma} tel={tel} mail={mail} />
                    <button className='btn' type='submit' onClick={toggleVisible}>Güncelle</button>
                </div>
            )}

            {copyRef && (
                <div className='container'>
                    <h3>Referans Ekle</h3>
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="adiSoyadi">Adı Soyadı *</label>
                            <input type="text" value={isim} onChange={(e) => setIsım(e.target.value)} className="form-control" required />

                            <label htmlFor="calistigiFirma">Çalıştığı Firma / Görevi</label>
                            <input type="text" value={firma} onChange={(e) => setFirma(e.target.value)} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefon">Telefon</label>
                            <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="eposta">E-posta *</label>
                            <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} className="form-control" required />
                        </div>

                        <div>
                            <button type="submit" onClick={deleteRef} className="btn btn-primary btn1">Referansı Sil</button>
                            <button type="submit" onClick={toggleVisible} className="btn btn-primary btn2">Referansı Kaydet
                            </button>
                        </div>

                        <div>
                            <button type="submit" onClick={copyDiv} className="btn btn-primary btn2">Referansı Ekle</button>
                        </div>
                    </form>
                </div>
            )}

            {/* {newRef.map(ref => ref)}
            <button type='submit' onClick={addNew}>Yeni Referans</button> */}


        </div>

    )
}

export default Referans