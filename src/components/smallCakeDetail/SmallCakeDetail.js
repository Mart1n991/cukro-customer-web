import { useState } from "react";
import { useOrder } from "../../context/CukroContext";
import { useAsyncValue, useLoaderData } from "react-router-dom";
import { Autocomplete, Button, Box, Grid, TextField, Typography } from "@mui/material";
import ProductBasicInformation from "../productBasicInformation/ProductBasicInformation";
import AmountButton from "../amountButton/AmountButton";
import MaterialCard from "../materialCard/MaterialCard";
import torta from "../../assets/Torty_1.jpg";

const SmallCakeDetail = () => {
  const data = useAsyncValue();
  const { smallCakes } = useLoaderData();
  const { order, setOrder } = useOrder();

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
  };

  const [autocompleteValue, setAutocompleteValue] = useState(null);
  const [inputAutocompleteValue, setInputAutocompleteValue] = useState("");
  const [item, setItem] = useState(defaultValues);

  const smallCakesByName = smallCakes.data.filter((cake) => cake.name === data.name);
  const allVariants = smallCakesByName.map((cake) => cake.variants);

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
        <Autocomplete
          disablePortal
          value={autocompleteValue}
          inputValue={inputAutocompleteValue}
          onChange={(event, newValue) => {
            setAutocompleteValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputAutocompleteValue(newInputValue);
            const smallCakeByFlavour = smallCakesByName.find((cake) => cake.variants.flavour === newInputValue);
            newInputValue === ""
              ? setItem(defaultValues)
              : setItem({ ...smallCakeByFlavour, amount: smallCakeByFlavour.minimumAmount });
          }}
          id="combo-box-demo"
          options={allVariants}
          noOptionsText={"Príchuť sa nenašla"}
          getOptionLabel={(option) => option.flavour}
          sx={{ width: 300, my: 3 }}
          renderInput={(params) => <TextField {...params} label="Príchuť" />}
        />
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

export default SmallCakeDetail;
