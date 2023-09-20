import Filter from "./Filter"
import ProductsFiltered from "./ProductsFiltered";

const ItemList = ({ products }) => {
    return (<Filter products={products}>{ProductsFiltered}</Filter>);
}

export default ItemList;