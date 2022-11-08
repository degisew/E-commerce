import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
const FormInputField = ({ name }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange }, fieldState: { errors } }) => (
          <TextField
            onChange={onChange}
            variant="outlined"
            error={errors}
            label={name}
            size="small"
            fullwidth="true"
            required
          />
        )}
      />
    </Grid>
  );
};

export default FormInputField;
