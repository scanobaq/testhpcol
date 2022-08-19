import { makeStyles } from "@material-ui/core";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
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
    errors.Apellido = "Debe ingresar un apellido";
    errors.error = true;
  }
  if (!form.Temperatura) {
    errors.Temperatura = "Debe ingresar la temperatura";
    errors.error = true;
  }
  return errors;
};

const columns = [
  { field: "ID", headerName: "ID", width: 150 },
  { field: "Nombre", headerName: "Nombre", width: 150 },
  { field: "Apellido", headerName: "Apellido", width: 150 },
  { field: "Temperatura", headerName: "Temperatura", width: 150 },
  { field: "Fiebre", headerName: "Fiebre", width: 150 },
  { field: "Dolorcabeza", headerName: "Dolor de Cabeza", width: 150 },
  { field: "Perdidaolfato", headerName: "Perdida Olfato", width: 150 },
];

export const NewCase = () => {
  const initialForm = {
    ID: 0,
    Nombre: "",
    Apellido: "",
    Fechanacimiento: "",
    Temperatura: "",
    Fiebre: false,
    Dolorcabeza: false,
    Perdidaolfato: false,
  };
  const styles = useStyles();
  const { form, errors, handleChange, handleBlur, handleChecked, setForm } =
    useForm(initialForm, validationsForm);
  const [value, setValue] = useState(new Date());
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setForm({ ...form, ID: count });
    setData((data) => [...data, form]);
  };

  return (
    <>
      <Grid container justifyContent="center" mt={8}>
        <Paper elevation={3} className={styles.paper}>
          <Box container sx={{ maxWidth: "100%", "& button": { m: 1 } }}>
            <Grid container spacing={2} justifyContent="center" pl={5} pr={5}>
              <Grid container justifyContent="center" mt={5}>
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
              <Grid item xs={3} container justifyContent="center">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    id="Fechanacimiento"
                    // name="FechaCompra"
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
              <Grid item xs={4} container justifyContent="center">
                <FormControlLabel
                  label="FIEBRE"
                  control={
                    <Checkbox
                      name="Fiebre"
                      checked={form.Fiebre || false}
                      onChange={handleChecked}
                    />
                  }
                />
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <FormControlLabel
                  label="DOLOR CABEZA"
                  control={
                    <Checkbox
                      name="Dolorcabeza"
                      checked={form.Dolorcabeza || false}
                      onChange={handleChecked}
                    />
                  }
                />
              </Grid>
              <Grid item xs={4} container justifyContent="center">
                <FormControlLabel
                  label="PERDIDA OLFATO"
                  control={
                    <Checkbox
                      name="Perdidaolfato"
                      checked={form.Perdidaolfato || false}
                      onChange={handleChecked}
                    />
                  }
                />
              </Grid>
              <Grid item xs={12} container justifyContent="end">
                <Button
                  id="btn-addAportante"
                  name="btn-addAportante"
                  color="primary"
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={errors.error ? true : false}
                >
                  Agregar
                </Button>
              </Grid>
              <Grid container justifyContent="center" mt={8}>
                <div style={{ height: 600, width: "100%" }}>
                  <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    rows={data}
                    columns={columns}
                    getRowId={(data) => data.ID}
                    components={{ Toolbar: GridToolbar }}
                    componentsProps={{
                      toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                      },
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};
