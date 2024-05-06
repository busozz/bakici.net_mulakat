import React from 'react'

function refIcerik() {
    return (
        <div>
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
                    <button type="submit" className="btn btn-primary btn1">Referansı Sil</button>
                    <button type="submit" onClick={toggleVisible} className="btn btn-primary btn2">Referansı Kaydet
                    </button>
                </div>

                <div>
                    <button type="submit" onClick={copyDiv} className="btn btn-primary btn2">Referansı Ekle</button>
                </div>
            </form>
        </div>
    )
}

export default refIcerik