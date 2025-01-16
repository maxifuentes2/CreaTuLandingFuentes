import './NavBar.css'
import ButtonComponent from './ButtonComponent';
import Logo from './Logo'
import CartWidget from './CartWidget'

export default function NavBar() {
    return (
        <header>
            <nav>
                <Logo/>
                <div>
                    <ButtonComponent text="Remeras"/>
                    <ButtonComponent text="Hoodies"/>
                    <ButtonComponent text="Pantalones"/>
                </div>
                <CartWidget/>
            </nav>           
        </header>    
    );
}