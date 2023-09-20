import products from '../mocks/products.json'
import PropTypes from 'prop-types'

const ProductsFiltered = ({
    products,
    filterState,
    handleFilterChange
}) => {
    return (<>
        <div>
            <div>
                <label > Ingrese el producto a buscar</label>
                <input type="text" value={filterState} onChange={handleFilterChange} />
            </div>
        </div>
        {
            filterState === "" ?
                products.map((item) => (<h1 key={item.id}>{item.title}</h1>))
                : products.filter((product) => product.title.toLowerCase().includes(filterState.toLowerCase()))
                    .map((product) => <h1 key={product.id}>{product.title}</h1>)
        }
    </>);
}

ProductsFiltered.propTypes = {
    products: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        itHasDues: PropTypes.bool.isRequired,
        isAnOffer: PropTypes.bool.isRequired,
    }).isRequired,
    filterState: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};
export default ProductsFiltered