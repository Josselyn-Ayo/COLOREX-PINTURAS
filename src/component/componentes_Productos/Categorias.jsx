// Categorias.js
function Categorias() {
    return (
        <section className="categorias">
            <h3>CATEGORIAS POPULARES</h3>
            <div className="grid-categorias">
                {categorias.map((categoria) => (
                    <Categoria key={categoria.id} {...categoria} />
                ))}
            </div>
        </section>
    );
}

function Categoria({ name, items, imgSrc }) {
    return (
        <div className="categoria">
            <div className="texto">
                <strong>{name}</strong><br />
                {items} Items
            </div>
            <img src={imgSrc} alt={name} />
        </div>
    );
}

const categorias = [
    { id: 1, name: "Pinturas de Interiores", items: 74, imgSrc: "images/products/product_11.png" },
    { id: 2, name: "Pinturas Automotrices", items: 35, imgSrc: "images/products/product_12.png" },
    { id: 3, name: "Efectos Decorativos", items: 35, imgSrc: "images/products/product_13.png" },
    { id: 4, name: "Linea Ecológica", items: 35, imgSrc: "images/products/product_14.png" },
    { id: 5, name: "Herramientas Profesionales", items: 35, imgSrc: "images/products/product_15.png" },
    { id: 6, name: "Imprimaciones y selladores", items: 35, imgSrc: "images/products/product_16.png" },
    { id: 7, name: "Productos Anticorrosivos", items: 35, imgSrc: "images/products/product_17.png" },
    { id: 8, name: "Colorimetria", items: 35, imgSrc: "images/products/product_18.png" },

];

export default Categorias;
