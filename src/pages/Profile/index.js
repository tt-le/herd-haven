import React from "react";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import QRCode from "qrcode.react";
import Navigation from "../../components/Navigation";

const testUser = {
  firstName: "Bryan",
  lastName: "Liu",
  email: "liu.bryan@icloud.com",
  birthDate: new Date("March 5, 2000"),
  gender: "Male",
  address: "71 Kirkland Place",
  city: "Whitby",
  country: "Canada",
};

function calculateAge(birthday) {
  const dateDiff = Date.now() - birthday;
  const ageDate = new Date(dateDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function Profile() {
  return (
    <Container maxWidth="md" style={{ height: "100%" }}>
      <CssBaseline>
        <Grid
          container
          direction="column"
          alignItems="center"
          wrap="nowrap"
          style={{ height: "100%" }}
        >
          <Grid item style={{ width: "100%" }}>
            <Navigation />
          </Grid>
          <Grid item style={{ marginTop: "60px" }}>
            <QRCode value={testUser.email} size={200} />
          </Grid>
          <Grid item style={{ marginTop: "25px" }}>
            <Typography variant="h2" style={{ opacity: 0.87 }}>
              {testUser.firstName}
            </Typography>
          </Grid>
          <Grid item container justify="center">
            <Grid
              item
              container
              direction="column"
              justifiy="space-evenly"
              alignItems="flex-start"
              style={{
                marginTop: "25px",
                marginLeft: "25px",
                maxWidth: "350px",
              }}
              xs={12}
            >
              <Grid item>
                <Typography variant="h6" style={{ opacity: 0.87 }}>
                  {"Full name: " + testUser.firstName + " " + testUser.lastName}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ opacity: 0.87 }}>
                  {"Age: " + calculateAge(testUser.birthDate)}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ opacity: 0.87 }}>
                  {"Gender: " + testUser.gender}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ opacity: 0.87 }}>
                  {"Address: " + testUser.address}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ opacity: 0.87 }}>
                  {"City: " + testUser.city}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ opacity: 0.87 }}>
                  {"Country: " + testUser.country}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
    </Container>
  );
}

export default Profile;
