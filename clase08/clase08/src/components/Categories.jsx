import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import products from '../mocks/products.json'
import UseFetch from "../hooks/useFetch";

const Categories = () => {
    const { categoryId } = useParams();
    const { data, loading } = UseFetch(products)

    if (loading) return <h1>CARGANDO....</h1>

    const productFiltered = data.filter((item) => item.category.toLowerCase() === categoryId.toLowerCase())

    console.log(productFiltered)

    return (<>
        {
            productFiltered.map((item) => {
                return <ProductDetail key={item.id} product={item} />

            })
        }
    </>);
}

export default Categories;