import { Divider, Grid, Stack, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { helpHttp } from "../Helpers/HelpHttp";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const url = "https://api.covid19api.com/world/total";

export const Globalcases = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setData(res);
        } else {
        }
      });
  }, []);

  return (
    // <Grid container justifyContent="center">
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container justifyContent="start">
            <Typography variant="h5">Casos Globales</Typography>
          </Grid>
          <Grid container justifyContent="start">
            <Typography sx={{ fontSize: 10 }} color="text.secondary">
              Actualizado al:
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item>
                <Typography variant="h6">Confirmados</Typography>
                <NumberFormat
                  value={data.TotalConfirmed}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Item>

              <Item>
                <Typography variant="h6">Fallecidos</Typography>
                <NumberFormat
                  value={data.TotalDeaths}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Item>

              <Item>
                <Typography variant="h6">Recuperados</Typography>
                <NumberFormat
                  value={data.GlobalTotalRecovered}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </Item>
            </Stack>
          </Grid>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
    // </Grid>
  );
};
