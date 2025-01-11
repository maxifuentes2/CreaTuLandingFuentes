export default function CartWidget() {
    return (
        <>
            <div className="carrito-contenedor">
                <img src="../public/carrito.svg" alt="Widget del carrito de compras" className="carrito" />
                <span className="carrito-cantidad">3</span>
            </div>
        </>
    );
}
