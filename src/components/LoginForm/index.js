import React from "react";
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { Button, Grid, Link, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import authDuck from '../../app/modular/auth';

import * as yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

function LoginForm({ login }) {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      login(values);
      // alert(JSON.stringify(values, null, 2));
    }, 500);
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Form>
          <Grid container direction="column" justify="space-evenly" spacing={2}>
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
              <Grid item xs={12}>
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
            </Grid>

            <Grid item container justify="center">
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                fullWidth
              >
                Sign in
              </Button>
            </Grid>
            <Grid item container justify="center">
              <Link href="/signup" variant="body2">
                <Typography variant="body2" noWrap>
                  Don't have an account? Sign up
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = {
  login: authDuck.actions.login
};

export default connect(null, mapDispatchToProps)(LoginForm);
