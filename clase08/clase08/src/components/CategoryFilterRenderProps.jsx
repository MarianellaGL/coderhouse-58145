import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const CategoryFilterRenderProps = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("all")

    /* quiero un dropdown que me deje filtrar por categoria*/
    /** quiiero que este lo pueda implementar en mi products */

    const handleSelectedCategory = (e) => {
        setSelectedCategory(e.target.value);
    }

    return (
        <div>
            <FormControl>
                <InputLabel>Filtrar por categoría</InputLabel>
                <Select value={selectedCategory} onChange={handleSelectedCategory} >
                    <MenuItem value="all">Todos</MenuItem>
                    <MenuItem value="Mujeres">Mujeres</MenuItem>
                    <MenuItem value="Niños">Niños</MenuItem>
                    <MenuItem value="Hombres">Hombres</MenuItem>

                </Select>
            </FormControl>
            {children(selectedCategory)}
        </div>
    )
}

export default CategoryFilterRenderProps;