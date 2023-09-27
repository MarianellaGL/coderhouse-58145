import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {

    return (
        <AppBar sx={{ backgroundColor: "#33082E" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <NavLink className="navbar-link" to="/">
                    <Typography >
                        Home/Categorías
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/products">
                    <Typography >
                        Productos
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/cart">
                    <CartWidget />
                </NavLink>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;