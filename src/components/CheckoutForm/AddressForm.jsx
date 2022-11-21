import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, InputLabel, MenuItem, Select } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInputField from "./FormInputField";
import { Link } from 'react-router-dom';
import commerce from "../../lib/commerce";

const AddressForm = ({ generatedToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCounty, setShippingCountry] = useState("");
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  useEffect(() => {
    const fetchShippingCountries = async (tokenId) => {
      // get a list of shipping counries from API and add them to the state.
      const { countries } = await commerce.services.localeListShippingCountries(
        tokenId
      );
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
    };
    fetchShippingCountries(generatedToken.id);
  }, []);

  useEffect(() => {
    const fetchShippingSubdivisions = async (country) => {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        country
      );
      setShippingSubDivisions(subdivisions);
      setShippingSubDivision(Object.keys(subdivisions)[0]);
    };
    if (shippingCounty) fetchShippingSubdivisions(shippingCounty);
  }, [shippingCounty]);

useEffect(() => {
  const fetchShippingOptions = async (tokenId, country, region = null) => {
    const shippingOptions = await commerce.checkout.getShippingOptions(tokenId, { country, region });
    setShippingOptions(shippingOptions);
    setShippingOption(shippingOptions[0].id);
  }
  fetchShippingOptions(generatedToken.id, shippingCounty, shippingSubDivision);
}, [shippingSubDivision]);

  // a list of converted countries.
  const listOfCountries = Object.entries(shippingCountries).map(
    ([code, name]) => ({ id: code, label: name })
  );

  // a list of subdivisions
  const listOfSubdivisions = Object.entries(shippingSubDivisions).map(
    ([code, name]) => ({ id: code, label: name }));

// a list of shipping options
const options = shippingOptions.map((opt) => ({ id: opt.id, label: `${opt.description} - (${opt.price.formatted_with_symbol})`}))

  const methods = useForm();
  return (
    <main className="form-Container">
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          action="#"
          onSubmit={methods.handleSubmit((data) => console.log(data))}
        >
          <Grid container rowSpacing={3} columnSpacing={3} mt="5px">
            <FormInputField name="firstName" />
            {/* <FormInputField name="middleName" /> */}
            <FormInputField name="lastName" />
            <FormInputField name="address" />
            <FormInputField name="email" />
            <FormInputField name="city" />
            <FormInputField name="Zip Code" />
          </Grid>
          <Grid container rowSpacing={3} columnSpacing={3} mt="5px">
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                size="small"
                fullWidth
                value={shippingCounty}
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {listOfCountries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* //##################################################### */}
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                size="small"
                fullWidth
                value={shippingSubDivision}
                onChange={(e) => setShippingSubDivision(e.target.value)}
              >
                {listOfSubdivisions.map((Subdivision) => (
                  <MenuItem key={Subdivision.id} value={Subdivision.id}>
                    {Subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* // ##################################################### */}
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                size="small"
                fullWidth
                value={shippingOption}
                onChange={(e) => setShippingOptions(e.target.value)}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div className="checkout-stepper-btn-div">
            <Button size="small" variant="contained" component={Link} to="/cart">
              Back to Cart
            </Button>
            <Button color="primary" type="submit" size="small" variant="contained">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
};

export default AddressForm;
