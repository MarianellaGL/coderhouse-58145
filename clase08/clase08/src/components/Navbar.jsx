import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MarketLogo from '../assets/logo.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";



//link o navlink 
//link no es customizable y navlink si

const Navbar = () => {

    return (
        <AppBar sx={{ backgroundColor: "#FF627E" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton ></IconButton>
                <Typography className="navbar-link">
                    <img src={MarketLogo} />
                </Typography>
                <Typography component={NavLink} to="/" >
                    {
                        /** si no estoy usando material puedo declarar navlink así : <NavLink > </NavLink> */
                    }
                    Home
                </Typography>
                <Typography component={NavLink} to="/products" >
                    Productos
                </Typography>
                <Typography component={NavLink} to="/category" >
                    Categorías
                </Typography>
                <div style={{ display: "flex" }}>
                    <AddShoppingCartIcon sx={{ width: "41px", height: "40px", margin: "0" }} /><Typography>12</Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;