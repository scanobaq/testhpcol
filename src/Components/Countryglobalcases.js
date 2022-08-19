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

const url = "https://api.covid19api.com/summary";

export const Countryglobalcases = (props) => {
  const [data, setData] = useState([]);
  let newData = [];

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          newData = res.Countries.filter((item, indice) =>
            item.Slug.includes(props.slug)
          );
          setData(newData);
        } else {
        }
      });
  }, [props.slug]);

  return (
    // <Grid container justifyContent="center">
    <>
      {data.map((i) => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container justifyContent="start">
              <Typography variant="h5">{i.Country}</Typography>
            </Grid>
            <Grid container justifyContent="start">
              <Typography sx={{ fontSize: 10 }} color="text.secondary">
                Actualizado al: {i.Date}
              </Typography>
            </Grid>
            <Grid container justifyContent="center">
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <>
                  <Item>
                    <Typography variant="h6">Confirmados</Typography>
                    <NumberFormat
                      value={i.TotalConfirmed}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Item>
                  <Item>
                    <Typography variant="h6">Fallecidos</Typography>
                    <NumberFormat
                      value={i.TotalDeaths}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Item>
                  <Item>
                    <Typography variant="h6">Recuperados</Typography>
                    <NumberFormat
                      value={i.GlobalTotalRecovered}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </Item>
                </>
              </Stack>
            </Grid>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      ))}
    </>

    // </Grid>
  );
};
