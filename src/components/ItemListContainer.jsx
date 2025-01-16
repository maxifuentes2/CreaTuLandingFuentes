import './ItemListContainer.css'

export default function ItemListContainer({ mensaje }) {
    return (
        <main>
            <h1 className="titulo">{mensaje}</h1>
        </main>    
    );
}