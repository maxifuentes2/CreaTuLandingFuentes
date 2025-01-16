import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
    const mensaje = "Bienvenidos a la tienda de UrbanVerb";
    return (
        <>
            <NavBar/>
            <ItemListContainer mensaje={mensaje} />
        </> 
    )
}

export default App
