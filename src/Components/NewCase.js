import { makeStyles } from "@material-ui/core";
import {
  Box,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import React from "react";
import { useState } from "react";
import { useForm } from "../Hooks/useForm";

const useStyles = makeStyles(() => ({
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    marginRight: 3,
  },
  paper: {
    width: 1200,
  },
  listas: {
    width: "100%",
  },
  inpuntEmpresa: { width: "100%" },
  gridContainer: { paddingRight: 5, paddingLeft: 5 },
  button: { margin: "1px" },
}));

/**
 * dev-scanobaq
 * Función que valida los campos obligatorios del formulario
 * (form) estado que contiene los valores del formulario
 */

const validationsForm = (form) => {
  let errors = {};
  if (!form.Nombre) {
    errors.Nombre = "Debe ingresar un nombre";
    errors.error = true;
  }
  if (!form.Apellido) {
    errors.Apellido = "Debe ingresar su apellido";
    errors.error = true;
  }
  if (!form.Fechanacimiento) {
    errors.Fechanacimiento = "Debe ingresar la fecha de nacimiento";
    errors.error = true;
  }
  if (!form.Temperatura) {
    errors.Temperatura = "Debe ingresar la temperatura";
    errors.error = true;
  }
  return errors;
};

export const NewCase = () => {
  const initialForm = {
    Nombre: "",
    Apellido: "",
    Fechanacimiento: "",
    Temperatura: "",
    Fiebre: false,
    Dolorcabeza: false,
    Perdidaolfato: false,
  };
  const styles = useStyles();
  const { form, errors, handleChange, handleBlur, setForm } = useForm(
    initialForm,
    validationsForm
  );
  const [value, setValue] = useState(new Date());

  return (
    <>
      <Grid container justifyContent="center">
        <Paper elevation={3} className={styles.paper}>
          <Box container sx={{ maxWidth: "100%", "& button": { m: 1 } }}>
            <Grid container spacing={2} justifyContent="center" pl={5} pr={5}>
              <Grid container spacing={2} justifyContent="center" pl={5} pr={5}>
                <Typography component="h1" variant="h6" noWrap>
                  Registro de nuevos casos
                </Typography>
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Nombre"
                  name="Nombre"
                  label="Nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Nombre}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Nombre && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Nombre}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Apellido"
                  name="Apellido"
                  label="Apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Apellido}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Apellido && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Apellido}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} container justifyContent="center">
                <TextField
                  id="Temperatura"
                  name="Temperatura"
                  label="Temperatura"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.Temperatura}
                  className={styles.inpuntEmpresa}
                  size="small"
                ></TextField>
                {errors.Temperatura && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Temperatura}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={3} className={styles.grid}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="Fechanacimiento"
                    inputFormat="dd/MM/yyyy"
                    label="Fecha Nacimiento"
                    onChange={(newvalue) => {
                      setValue(newvalue);
                      form.Fechanacimiento = newvalue;
                    }}
                    onBlur={handleBlur}
                    value={form.Fechanacimiento}
                    renderInput={(params) => (
                      <TextField
                        type="datetime-local"
                        size="small"
                        id="Fechanacimiento"
                        name="Fechanacimiento"
                        onBlur={handleBlur}
                        value={form.Fechanacimiento}
                        onChange={handleChange}
                        {...params}
                      />
                    )}
                  ></DesktopDatePicker>
                </LocalizationProvider>
                {errors.Fechanacimiento && (
                  <FormHelperText id="my-helper-text" error>
                    {errors.Fechanacimiento}
                  </FormHelperText>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                mt={5}
                mb={5}
              >
                <Typography component="h1" variant="h6" noWrap>
                  Seleccione los sintomas
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
