import './NavBar.css'
import Button from './Button';
import Logo from './Logo'
import CartWidget from './CartWidget'

export default function NavBar() {
    return (
        <>
            <nav className='header'>
                <Logo/>
                <Button/>
                <CartWidget/>
            </nav>
        </>
    );
}