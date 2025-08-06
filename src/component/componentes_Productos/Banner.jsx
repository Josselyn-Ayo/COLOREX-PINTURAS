// Banner.js
function BannerProduct() {
    return (
        <div className="top-banner">
            <div className="banner-content">
                <span className="banner-text">
                    Pintura Para Interiores <br />
                    <span className="banner-small">Pintura de pared premium</span>
                </span>
                <div className="banner-offer">
                    <div className="box-banner">
                        <span className="offer-text">10%</span>
                    </div>
                    <span className="offer-small1">
                        Introduce el código <br />
                        <span className="offer-text1">DESCUENTO</span>
                    </span>
                </div>
                <div className="banner-images">
                    <img id="image-banner1" src="images/oferts/Pinturas_Oferta_1.png" alt="Banner 1" />
                    <img id="image-banner2" src="images/oferts/Pinturas_Oferta2.png" alt="Banner 2" />
                </div>
                <button className="banner-btn">COMPRAR AHORA</button>
            </div>
        </div>
    );
}

export default BannerProduct;
