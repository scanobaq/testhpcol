import { makeStyles } from "@material-ui/core";
import { Grid, Paper } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { helpHttp } from "../Helpers/HelpHttp";
import { useForm } from "../Hooks/useForm";
import { Countryglobalcases } from "./Countryglobalcases";
import { Globalcases } from "./Globalcases";
import { SelectList } from "./SelectList";

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

export const CaseCovidLis = () => {
  const [data, setData] = useState([]);
  const initialForm = { Slug: "colombia" };
  const styles = useStyles();

  const columns = [
    { field: "ID", headerName: "ID", width: 150 },
    { field: "Country", headerName: "Ciudad", width: 150 },
    { field: "Province", headerName: "Provincia", width: 150 },
    { field: "Confirmed", headerName: "Casos Confirmados", width: 150 },
    { field: "Deaths", headerName: "Muertes", width: 150 },
    { field: "Recovered", headerName: "Recuperados", width: 150 },
  ];

  let newData = [];

  const { form, handleChange, handleBlur } = useForm(initialForm);
  let url = `https://api.covid19api.com/dayone/country/${form.Slug}`;

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          newData = res.filter((data, indice) => indice <= 360);
          setData(newData);
        } else {
        }
      });
  }, [url]);

  return (
    <>
      <Grid container justifyContent="center" mt={5}>
        <Countryglobalcases slug={form.Slug} />
        <Globalcases />
      </Grid>

      <Grid container justifyContent="center" mt={8}>
        <Paper elevation={3} className={styles.paper}>
          <Grid item xs={4} justifyContent="start" m={5}>
            <SelectList
              title="Seleccione un pais"
              handleChange={handleChange}
              handleBlur={handleBlur}
              form={form}
              api="https://api.covid19api.com/countries"
            />
          </Grid>

          <Grid container justifyContent="center">
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
        </Paper>
      </Grid>
    </>
  );
};
