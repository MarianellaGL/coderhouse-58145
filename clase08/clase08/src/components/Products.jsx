import { Grid, Typography } from '@mui/material';
import products from '../mocks/products.json';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';



const Products = ({ selectedCategory }) => {
    const { categoryId } = useParams();
    const filteredProducts = products.filter((product) => {
        return selectedCategory === "all" || product.category === categoryId;
    })

    return (<>
        <div className="container">
            <Typography variant="h2" style={{
                color: "#8F8C8C", marginBottom: "20px"
            }}>Productos</Typography>
            <Grid container spacing={3}>
                {filteredProducts.map((product) => {
                    return <ProductDetail key={product.id} product={product} />
                })}
            </Grid>
        </div>
    </>);
}

export default Products;