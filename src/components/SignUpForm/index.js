import React from "react";
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { Button, MenuItem, Grid, Link } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import * as yup from "yup";

import authDuck from '../../app/modular/auth';

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthDate: null,
  gender: "",
  address: "",
  city: "",
  country: "",
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Password must be minimum 8 characters"),
  confirmPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  birthDate: yup.date().required("Required").nullable(),
  gender: yup.string().required("Required"),
  address: yup.string().required("Required"),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
});

function SignUpForm({ signUp }) {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      signUp(values);
      // alert(JSON.stringify(values, null, 2));
    }, 500);
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ submitForm, isSubmitting, touched, errors }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              spacing={2}
            >
              <Grid item container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name="firstName"
                    type="text"
                    label="First name"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name="lastName"
                    type="text"
                    label="Last name"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={TextField}
                    name="confirmPassword"
                    type="password"
                    label="Re-enter password"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    component={DatePicker}
                    name="birthDate"
                    label="Date of birth"
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    size="small"
                    fullWidth
                    disableFuture
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    type="text"
                    name="gender"
                    label="Gender"
                    select
                    variant="outlined"
                    size="small"
                    fullWidth
                  >
                    <MenuItem key="Male" value="Male">
                      Male
                    </MenuItem>
                    <MenuItem key="Female" value="Female">
                      Female
                    </MenuItem>
                    <MenuItem key="Other" value="Other">
                      Other
                    </MenuItem>
                  </Field>
                </Grid>
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="address"
                  type="text"
                  label="Address"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name="city"
                    type="text"
                    label="City"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name="country"
                    type="text"
                    label="Country"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  fullWidth
                >
                  Register
                </Button>
              </Grid>
              <Grid item container justify="center">
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
  );
}

const mapDispatchToProps = {
  signUp: authDuck.actions.signUp
};

export default connect(null, mapDispatchToProps)(SignUpForm);
