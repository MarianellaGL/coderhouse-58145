import { Button } from '@mui/material';
import ComponentePrueba from '../ComponentePrueba/ComponentePrueba';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import products from '../../mocks/product.json';


const ItemListContainer = ({ greeting }) => {

    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(true)
    function doYouLoveMe(name) {
        return new Promise(function (resolve, reject) {
            console.log('dejame pensarlo...')

            setTimeout(() => {
                if (name === 'Mauro') {
                    resolve('yes')
                } else {
                    reject('Ay no, perdón')
                }

            }, 1000)
        })
    }

    const mockAsync = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 3000);
        });
    };

    useEffect(() => {
        mockAsync().then(res => {
            console.log('resolucion', res)
            setResponse(res)
            setLoading(false)
        })
    }, [])


    console.log(response)

    return (<>
        <div className='div-itemcontainer'>

            <ItemList response={response} loading={loading} />
            <ComponentePrueba>
                <Button> botón </Button>
            </ComponentePrueba>
        </div>
    </>);
}

export default ItemListContainer;