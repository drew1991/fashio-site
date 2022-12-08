import React from "react";
import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
import ItemList from "./ItemList";
import Grid from '@mui/material/Grid';
import { Button } from "../styles";

function Home({itemsToDisplay, onCategoryChange, selectedCategory, onGenderChange, selectedGender, setSelectedCauses, causes}) {


    return (
        <div>
            {/* <NavBar /> */}
            <Grid container spacing={2} style={{marginLeft:'20px'}}>
                <div>
                <Button style={{width:'200px'}}></Button>
            <FilterBar 
                        onCategoryChange={onCategoryChange} 
                        selectedCategory={selectedCategory} 
                        onGenderChange={onGenderChange} 
                        selectedGender={selectedGender} 
                        setSelectedCauses={setSelectedCauses}
                        causes={causes}
                    />
</div>
                <Grid item xs={2} md={2}>
                    
                </Grid>
                <Grid item xs={10} md={10}>
                    <ItemList itemsToDisplay={itemsToDisplay}/>
                </Grid>
            </Grid>
            
        </div>
    )
};

export default Home;