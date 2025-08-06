// Destacados.js
function Destacados() {
    return (
        <section className="alto-rendimiento">
            <h2>PINTURAS Y ACCESORIOS DE ALTO RENDIMIENTO</h2>
            <div className="destacados">
                <Tarjeta 
                    color="azul" 
                    title="Revestimientos de Protección" 
                    subtitle="Aislamiento Superior" 
                    description="En Colorex, Fusionamos Tecnología Y Funcionalidad Para Proyectos DIY Y Profesionales, Donde La Eficiencia Se Encuentra Con El Diseño."
                />
                <Tarjeta 
                    color="amarilla" 
                    title="Barnices de secado ultrarrápido" 
                    description="Ideal para retoques automotrices"
                />
            </div>
        </section>
    );
}

function Tarjeta({ color, title, subtitle, description }) {
    return (
        <div className={`tarjeta ${color}`}>
            <div className="contenido">
                <h3>{title}</h3>
                {subtitle && <h3 className="titu">{subtitle}</h3>}
                {description && <p>{description}</p>}
                <a href="#" className="boton">COMPRA AHORA</a>
            </div>
        </div>
    );
}

export default Destacados;
