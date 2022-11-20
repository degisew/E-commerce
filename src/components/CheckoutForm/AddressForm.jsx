import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInputField from "./FormInputField";
import DropDownField from "./Checkout/DropDownField";
import commerce from "../../lib/commerce";

const AddressForm = ({ generatedToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCounty, setShippingCountry] = useState("");
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  useEffect(() => {
    const shippingCountries = async (tokenId) => {
      // get a list of shipping counries from API and add them to the state.
      const { countries } = await commerce.services.localeListShippingCountries(
        tokenId
      );
      console.log(countries);
      setShippingCountries(countries);
    };
    shippingCountries(generatedToken.id);
  }, []);

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
            <FormInputField name="firstame" />
            <FormInputField name="middleName" />
            <FormInputField name="lastName" />
            <FormInputField name="address" />
            <FormInputField name="email" />
            <FormInputField name="city" />
            <FormInputField name="Zip Code" />
          </Grid>
          <Grid container rowSpacing={3} columnSpacing={3} mt="5px">
            <DropDownField label="Address" />
            <DropDownField label="Countries" />
            <DropDownField label="subdivision" />
          </Grid>
          <input type="submit" />
        </form>
      </FormProvider>
    </main>
  );
};

export default AddressForm;
