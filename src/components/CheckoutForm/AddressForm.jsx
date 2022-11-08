import React from "react";
import { Grid, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import FormInputField from "./FormInputField";
import DropDownField from "./Checkout/DropDownField";
const AddressForm = () => {
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
          <Grid container rowSpacing={3} columnSpacing={3}  mt="5px">
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
