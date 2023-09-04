import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

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
        </Toolbar>
    </AppBar>);
}

export default Navbar;
