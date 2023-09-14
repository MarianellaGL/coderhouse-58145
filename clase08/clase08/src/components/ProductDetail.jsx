import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useState } from "react";
import PropTypes from 'prop-types';




const ProductDetail = ({ product }) => {
    const { id, image, title, price, itHasDues, isAnOffer } = product

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }

    return (

        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container" onClick={handleClick}>
                <img
                    className="card-media"
                    src={image}
                />
                <CardContent className="card-products-content" >
                    <Typography gutterBottom variant="body2" color="textSecondary" sx={{ whiteSpace: "nowrap" }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" color="primary">
                        ${price}
                    </Typography>
                    <div className="card-products-extra">
                        {itHasDues && (
                            <Typography variant="body2" color="textSecondary">
                                <PaymentIcon /> Hasta 3 cuotas sin interés
                            </Typography>
                        )}
                        {isAnOffer && (
                            <Typography variant="body2" color="textSecondary">
                                <LocalOfferIcon /> 35% de descuento con Galicia
                            </Typography>
                        )}
                    </div>
                </CardContent>
            </Card>
        </Grid>);
}

ProductDetail.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        itHasDues: PropTypes.bool.isRequired,
        isAnOffer: PropTypes.bool.isRequired,
    }).isRequired,
};
export default ProductDetail;