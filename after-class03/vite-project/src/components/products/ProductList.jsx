import { CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from '../../mocks/products.json';
import ProductDetail from "./ProductDetail";
import ProductInfo from "./ProductInfo";

const ProductList = () => {
    const { data, loading } = useAsyncMock(products)

    if (loading) return <CircularProgress />


    return (<div className="container">
        <Typography variant="h2" style={{ color: "#8F8C8C" }}>
            Productos
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((product) => {
                    return (
                        <ProductDetail key={product.id} product={product}>
                        </ProductDetail>
                    )
                })
            }
        </Grid>


    </div>);
}

export default ProductList;