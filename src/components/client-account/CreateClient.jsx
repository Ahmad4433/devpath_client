import React from "react";
import { TextField, Button, IconButton, Card, Box } from "@mui/material";
import { Formik, Form } from "formik";
import { Person, Save } from "@mui/icons-material";
import * as Yup from "yup";
import RichEditor from "../common/RichEditor";

const CreateClient = () => {
  const clientState = {
    name: "",
    email: "",
    mobile: "",
    cnic: "",
    address: "",
    remarks: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Client name is required"),
    email: Yup.string().email("Invalid email format").optional(),
    cnic: Yup.string()
      .length(13, "CNIC number must be exactly 13 characters")
      .required("CNIC is required"),
    mobile: Yup.string()
      .length(11, "Mobile number must be exactly 11 characters")
      .required("Mobile number is required"),
    address: Yup.string().required("Client address is required"),
    remarks: Yup.string().optional(),
  });

  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <Card>
      <div className="container-fluid">
        <div className="page_title">
          <Person />
          <span>Create a new client</span>
        </div>

        <Formik
          onSubmit={submitHandler}
          validationSchema={validationSchema}
          initialValues={clientState}
        >
          {({ handleBlur, handleChange, values, errors, touched }) => (
            <Form>
              <div className="row g-3">
                <div className="col-md-6">
                  <TextField
                    label="Client name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    label="Mobile number"
                    type="text"
                    name="mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    error={touched.mobile && Boolean(errors.mobile)}
                    helperText={touched.mobile && errors.mobile}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    label="CNIC number"
                    type="text"
                    name="cnic"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cnic}
                    error={touched.cnic && Boolean(errors.cnic)}
                    helperText={touched.cnic && errors.cnic}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    label="Client email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </div>
                <div className="col-md-6">
                  <RichEditor
                    placeholder="Client complete address"
                    onChange={(content) => {
                      handleChange({
                        target: { name: "address", value: content },
                      });
                    }}
                    onBlur={handleBlur}
                    error={errors.address}
                    touched={touched.address}
                    value={values.address}
                  />
                </div>
                <div className="col-md-6">
                  <RichEditor
                    placeholder="Remarks (Optional)"
                    onChange={(content) => {
                      handleChange({
                        target: { name: "remarks", value: content },
                      });
                    }}
                    onBlur={handleBlur}
                    error={errors.remarks}
                    touched={touched.remarks}
                    value={values.remarks}
                  />
                </div>

                <div style={{ textAlign: "right" }}>
                  <Button endIcon={<Save />} type="submit" variant="contained">
                    save client
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Card>
  );
};

export default CreateClient;
