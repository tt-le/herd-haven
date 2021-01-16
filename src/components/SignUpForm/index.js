import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress, MenuItem } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function SignUpForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        birthDate: new Date(),
        gender: "",
        address: "",
        city: "",
        country: "",
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form>
            <Field
              component={TextField}
              name="firstName"
              type="text"
              label="First name"
            />
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last name"
            />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
            <Field
              component={TextField}
              name="confirmEmail"
              type="email"
              label="Re-enter email"
            />
            <Field
              component={DatePicker}
              name="birthDate"
              label="Date of birth"
            />
            <Field
              component={TextField}
              type="text"
              name="gender"
              label="Gender"
              select
              variant="standard"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
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
            <Field
              component={TextField}
              name="address"
              type="text"
              label="Address"
            />
            <Field component={TextField} name="city" type="text" label="City" />
            <Field
              component={TextField}
              name="country"
              type="text"
              label="Country"
            />
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
  );
}

export default SignUpForm;
