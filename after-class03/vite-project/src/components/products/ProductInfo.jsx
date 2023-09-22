import { Modal, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment'
import ItemCount from "../common/ItemCount";
import { useState } from "react";
const ProductInfo = ({ product, open, setOpen }) => {
    const { image, title, price, isAnOffer, itHasDues, stock } = product
    const [quantityInCart, setQuantityInCart] = useState(0);


    const handleClose = () => {
        setOpen(prev => !prev)
    }


    // Función para manejar la compra
    const handleAddToCart = (count) => {
        setQuantityInCart(count);
        console.log('agregado', count)
    };


    return (<>
        <Modal open={true} onClose={handleClose}>
            <div className="modal-content">
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h6" color="primary"> ${price.toFixed(2)}</Typography>
                <Typography>stock: {stock}</Typography>
                <div className="modal-scroll-content">
                    <Typography variant="body2" color="textSecondary">
                        {
                            itHasDues && (<>
                                <PaymentIcon /> Hasta tres cuotas sin interés </>)

                        }
                    </Typography>
                    {/**agrego el ITEM COUNT y le paso los valores de stock, el valor inicial que siempre sería uno y por ahora en el on Add hago un clg */}
                    <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} />
                </div>
            </div>
        </Modal>
    </>);
}

export default ProductInfo;