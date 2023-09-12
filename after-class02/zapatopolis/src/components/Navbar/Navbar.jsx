import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { useEffect, useRef } from 'react';

const Navbar = () => {

    const searchInputRef = useRef(null)

    useEffect(() => {
        searchInputRef.current.focus();
    }, [])

    return (<AppBar>
        <Toolbar className='toolbar-navbar' sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography sx={{ color: "black" }}>
                Zapatopolis
            </Typography>
            <Button sx={{ color: 'black' }}>
                Home
            </Button>
            <Button sx={{ color: 'black' }}>
                Categorias
            </Button>
            <Button sx={{ color: 'black' }}>
                Productos
            </Button>
            <CartWidget />
            <input
                type='text'
                id="search"
                ref={searchInputRef}
                placeholder='Busca tu producto' />
        </Toolbar>
    </AppBar>);
}

export default Navbar;
