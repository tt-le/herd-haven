import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid, Link, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";

import * as yup from "yup";

const initialValues = {
  verificationCode: "",
};

const validationSchema = yup.object().shape({
  verificationCode: yup.string().required("Required"),
});

function VerifyForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Form>
          <Grid container direction="column" justify="space-evenly" spacing={2}>
            <Grid item container spacing={2}>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="verificationCode"
                  type="string"
                  label="Verification code"
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
                Verify
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default VerifyForm;
