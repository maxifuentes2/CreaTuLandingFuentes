import Button from './Button';
import Logo from './Logo'
import CartWidget from './CartWidget'

export default function NavBar() {
    return (
        <>
            <nav className='navbarr'>
                <Logo/>
                <Button/>
                <CartWidget/>
            </nav>
        </>
    );
}