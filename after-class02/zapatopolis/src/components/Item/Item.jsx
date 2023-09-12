import { Typography } from "@mui/material";

const Item = ({ item }) => {
    return (<>
        <div>
            <Typography >{item.title}</Typography>
            <Typography>{item.description}</Typography>
        </div>
    </>)
}

export default Item;