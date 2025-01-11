import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import Logo from './components/Logo'

function App() {
    const mensaje = "Bienvenidos a la tienda de UrbanVerb";
    return (
        <>
            <NavBar className="navbarr"/>
            <ItemListContainer mensaje={mensaje} />
        </>
    )
}

export default App
