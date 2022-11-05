import { useState } from "react";
import { useOrder } from "../../context/CukroContext";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useAsyncValue, useLoaderData } from "react-router-dom";
import torta from "../../assets/Torty_1.jpg";
import ProductBasicInformation from "../productBasicInformation/ProductBasicInformation";
import AmountButton from "../amountButton/AmountButton";
import MaterialCard from "../materialCard/MaterialCard";

const SpecialtiesDetail = () => {
  const data = useAsyncValue();
  const { specialties } = useLoaderData();

  const defaultValues = {
    _id: "",
    width: 0,
    height: 0,
    weight: 0,
    minimumAmount: 0,
    amount: 0,
    deliveryDate: 0,
    price: 0,
    materials: [],
    variants: { flavour: "", shape: "" },
    glutenFree: false,
    lactoseFree: false,                                                                                                                      
  };

  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [inputAutocompleteValue, setInputAutocompleteValue] = useState("");            
  const [item, setItem] = useState(defaultValues);
  const { order, setOrder } = useOrder();
                                                
  const specialtiesByName = specialties.data.filter((specialty) => specialty.name === data.name);  
  const allVariants = specialtiesByName.map((specialty) => specialty.variants);                                       
 
  const { _id, amount, width, height, weight, minimumAmount, deliveryDate, price, materials } = item;

  const basicInformation = {
    weight,
    height,
    width,
    deliveryDate,
    price,
  };

  const addToCard = () => {
    setOrder([item, ...order]);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6} lg={4}>
        <Box sx={{ height: { xs: 300, md: 350 } }}>
          <img src={torta} alt="torta" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Box>
          <Typography variant="h4" mb={2}>
            {data.name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2, mb: 3 }}>
          <Autocomplete
            disablePortal
            value={autocompleteValue}
            inputValue={inputAutocompleteValue}
            onChange={(event, newValue) => {
              setAutocompleteValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
              setInputAutocompleteValue(newInputValue);
              const specialtyByFlavour = specialtiesByName.find((specialty) => specialty.variants.flavour === newInputValue);
              newInputValue === ""
                ? setItem(defaultValues)
                : setItem({ ...specialtyByFlavour, amount: specialtyByFlavour.minimumAmount });
            }}
            id="combo-box-demo"
            options={allVariants}
            noOptionsText={"Príchuť sa nenašla"}
            getOptionLabel={(option) => option.flavour}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Príchuť" />}
          />

          <FormControl sx={{ width: 300 }}>
            <InputLabel>Tvar</InputLabel>
            <Select
              value={item.variants.shape}
              label="Tvar"
              name="shape"
              onChange={(e) => setItem({ ...item, variants: { ...item.variants, shape: e.target.value } })}
            >
              {allVariants.map(({ shape }) => (
                <MenuItem key={shape} value={shape}>
                  {shape}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography variant="subtitle2">Ak ste na niečo intoleratný zvoľte jednu z možností</Typography>
          <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
            <FormControlLabel
              control={
                <Checkbox size="small" name="glutenFree" onChange={(e) => setItem({ ...item, glutenFree: e.target.checked })} />
              }
              label={<Typography variant="body2">Bezlepková</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox size="small" name="lactoseFree" onChange={(e) => setItem({ ...item, lactoseFree: e.target.checked })} />
              }
              label={<Typography variant="body2">Bezlaktózová</Typography>}
            />
          </FormGroup>
        </Box>

        <ProductBasicInformation basicInformation={basicInformation} />
        <AmountButton minAmount={minimumAmount} setItem={setItem} amount={amount} />
        <Button variant="contained" disabled={_id === ""} onClick={addToCard}>
          Pridať do objednávky
        </Button>
      </Grid>
      <Grid item xs={12}>
        {materials?.length > 0 && <MaterialCard materials={materials} />}
      </Grid>
    </Grid>
  );
};

export default SpecialtiesDetail;
