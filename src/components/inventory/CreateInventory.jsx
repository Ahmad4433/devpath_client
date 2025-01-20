import React from "react";
import "./createInventory.css";
import { TextField, Button, Autocomplete, Card } from "@mui/material";
import { Save, List, Add } from "@mui/icons-material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { propertyCategory } from "../../utils/dropDown";

const CreateInventory = () => {
  const initialStates = {
    title: "",
    category: "",
    downPayment: "",
    installmentCount: "",
    monthlyInstallment: "",
    diggingAmount: "",
    structureAmount: "",
    halfYearAmount: "",
    possessionAmount: "",
    totalAmount: "",
    area: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    downPayment: Yup.number()
      .min(1, "Amount should be positive")
      .required("Down payment is required"),
    installmentCount: Yup.number()
      .min(1, "Number should be positive")
      .required("Installment count is required"),
    monthlyInstallment: Yup.number()
      .min(1, "Amount should be positive")
      .required("Monthly installment is required"),
    diggingAmount: Yup.number()
      .min(1, "Amount should be positive")
      .required("Digging amount is required"),
    structureAmount: Yup.number()
      .min(1, "Amount should be positive")
      .required("Structure amount is required"),
    halfYearAmount: Yup.number()
      .min(1, "Amount should be positive")
      .required("Half year amount is required"),
    possessionAmount: Yup.number()
      .min(1, "Amount should be positive")
      .required("Possession amount is required"),
    totalAmount: Yup.number()
      .min(1, "Amount should be positive")
      .required("Total amount is required"),
    area: Yup.number()
      .min(1, "Area size must be positive")
      .required("Area size is required"),
  });

  const submitHandler = (values) => {
    console.log("running");
    console.log(values);
  };

  return (
    <Card>
      <div className="container-fluid">
        <div className="page_title">
          <Add />
          <span>Add new Listing</span>
        </div>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialStates}
          validationSchema={validationSchema}
        >
          {({
            handleBlur,
            handleChange,
            touched,
            errors,
            values,
            setFieldValue,
          }) => (
            <Form>
              <div className="row g-3">
                <div className="col-md-4">
                  <TextField
                    fullWidth
                    type="text"
                    label="Title"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    error={touched.title && Boolean(errors.title)}
                    helperText={touched.title && errors.title}
                  />
                </div>
                <div className="col-md-4">
                  <Autocomplete
                    options={propertyCategory}
                    value={values.category}
                    onChange={(e, value) => {
                      setFieldValue("category", value);
                    }}
                    renderInput={(params) => (
                      <TextField
                        name="category"
                        onBlur={handleBlur}
                        {...params}
                        label="Select Category"
                        error={touched.category && Boolean(errors.category)}
                        helperText={touched.category && errors.category}
                      />
                    )}
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    type="number"
                    label="Area size (Sq.Ft)"
                    name="area"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.area}
                    error={touched.area && Boolean(errors.area)}
                    helperText={touched.area && errors.area}
                  />
                </div>
                <div className="col-md-2">
                  <TextField
                    type="number"
                    name="downPayment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.downPayment}
                    error={touched.downPayment && Boolean(errors.downPayment)}
                    helperText={touched.downPayment && errors.downPayment}
                    label="Down payment"
                  />
                </div>
                <div className="col-md-2">
                  <TextField
                    type="number"
                    name="installmentCount"
                    value={values.installmentCount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.installmentCount &&
                      Boolean(errors.installmentCount)
                    }
                    helperText={
                      touched.installmentCount && errors.installmentCount
                    }
                    label="Installment count"
                  />
                </div>
                <div className="col-md-2">
                  <TextField
                    name="monthlyInstallment"
                    type="number"
                    value={values.monthlyInstallment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.monthlyInstallment &&
                      Boolean(errors.monthlyInstallment)
                    }
                    helperText={
                      touched.monthlyInstallment && errors.monthlyInstallment
                    }
                    label="Monthly Installment"
                  />
                </div>
                <div className="col-md-2">
                  <TextField
                    type="number"
                    name="diggingAmount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.diggingAmount}
                    error={
                      touched.diggingAmount && Boolean(errors.diggingAmount)
                    }
                    helperText={touched.diggingAmount && errors.diggingAmount}
                    label="Digging amount"
                  />
                </div>
                <div className="col-md-2">
                  <TextField
                    type="number"
                    name="structureAmount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.structureAmount}
                    error={
                      touched.structureAmount && Boolean(errors.structureAmount)
                    }
                    helperText={
                      touched.structureAmount && errors.structureAmount
                    }
                    label="Structure amount"
                  />
                </div>
                <div className="col-md-2">
                  <TextField
                    type="number"
                    name="halfYearAmount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.halfYearAmount}
                    error={
                      touched.halfYearAmount && Boolean(errors.halfYearAmount)
                    }
                    helperText={touched.halfYearAmount && errors.halfYearAmount}
                    label="Half year amount"
                  />
                </div>
                <div className="col-md-2">
                  <TextField
                    type="text"
                    name="possessionAmount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.possessionAmount}
                    error={
                      touched.possessionAmount &&
                      Boolean(errors.possessionAmount)
                    }
                    helperText={
                      touched.possessionAmount && errors.possessionAmount
                    }
                    label="Possesion amount"
                  />
                </div>
                <div className="col-md-2">
                  <TextField
                    type="number"
                    name="totalAmount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.totalAmount}
                    error={touched.totalAmount && Boolean(errors.totalAmount)}
                    helperText={touched.totalAmount && errors.totalAmount}
                    label="Total amount"
                  />
                </div>
                <div style={{ textAlign: "right" }}>
                  <Button type="submit" variant="contained" endIcon={<Save />}>
                    save listing
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

export default CreateInventory;
