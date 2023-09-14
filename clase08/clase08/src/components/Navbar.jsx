import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MarketLogo from '../assets/logo.svg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Navbar = () => {

    return (
        <AppBar sx={{ backgroundColor: "#FF627E" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton ></IconButton>
                <Typography className="navbar-link">
                    <img src={MarketLogo} />
                </Typography>
                <Typography className="navbar-link">
                    <Typography >
                        Home
                    </Typography>
                </Typography>
                <Typography className="navbar-link">
                    <Typography >
                        Productos
                    </Typography>
                </Typography>
                <Typography className="navbar-link">
                    <Typography >
                        Categorías
                    </Typography>
                </Typography>
                <div style={{ display: "flex" }}>
                    <AddShoppingCartIcon sx={{ width: "41px", height: "40px", margin: "0" }} /><Typography>12</Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;