import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

const ItemList = ({ response, loading }) => {


    return (
        loading ? <h1>cargando</h1> :

            response.products.map((item, index) => {
                return <Item key={index} item={item} />
            })
    );
}

ItemList.propTypes = {
    response: PropTypes.shape({}).isRequired,

}


export default ItemList;