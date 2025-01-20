import React, { useState } from "react";
import "./singleFloor.css";
import { TextField, Button, Paper } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Add, Delete } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
const SingleFloor = ({
  id,
  setFloors,
  floors,
  file,
  singleFloorData,
  setSingleFloordata,
}) => {
  const [tempFileNo, setTempFileNo] = useState("");

  const initialState = {
    floorName: "",
    files: [],
  };

  const validationSchema = Yup.object({
    floorName: Yup.string().required("Floor no is required"),
    files: Yup.array()
      .of(
        Yup.number()
          .typeError("File number must be a number")
          .required("File number is required")
      )
      .min(1, "Please provide at least one file number")
      .required("Files are required"),
  });

  const handleAddFile = (values, setFieldValue) => {
    const findedValue = values.files.find((item) => item === tempFileNo);
    if (findedValue) {
      return;
    }
    setFieldValue("files", [...values.files, tempFileNo]);
    setTempFileNo("");
    setSingleFloordata((prevData) => [{ ...prevData, floor: [...tempFileNo] }]);
  };

  const handleDeleteFile = (index, values, setFieldValue) => {
    const prevValues = [...values.files];
    prevValues.splice(index, 1);
    setFieldValue("files", prevValues);
  };

  const deleteFloor = () => {
    if (floors.length === 1) {
      return;
    }
    setFloors((prevFloor) => {
      return prevFloor.filter((item) => item.id !== id);
    });
  };

  const submitHandler = (values) => {
    console.log("Submitted values:", values);
    setFloors((prevFloors) => [...prevFloors, { id: uuidv4() }]);
  };

  return (
    <Paper sx={{ padding: "1rem" }} elevation={3}>
      <Formik
        onSubmit={submitHandler}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
        {({
          handleBlur,
          handleChange,
          values,
          errors,
          setFieldValue,
          touched,
        }) => (
          <Form>
            <div className="row g-3">
              <div className="col-2">
                <TextField
                  disabled={!file}
                  type="text"
                  label="Floor number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="floorName"
                  error={touched.floorName && Boolean(errors.floorName)}
                  helperText={touched.floorName && errors.floorName}
                  value={values.floorName}
                />
              </div>
              <div className="col-4">
                <TextField
                  disabled={!values.floorName}
                  value={tempFileNo}
                  onChange={(e) => setTempFileNo(e.target.value)}
                  type="text"
                  label="Type file number"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddFile(values, setFieldValue);
                    }
                  }}
                />
              </div>
              <div className="col-3">
                <Button
                  disabled={floors.length === 1}
                  onClick={deleteFloor}
                  color="error"
                  fullWidth
                  variant="outlined"
                  endIcon={<Delete />}
                >
                  remove floor
                </Button>
              </div>
              <div className="col-3">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<Add />}
                >
                  Add Floor
                </Button>
              </div>

              <div className="col-12">
                <div className="files_items">
                  {values.files.map((item, index) => (
                    <Button
                      key={index}
                      endIcon={<Delete />}
                      variant="outlined"
                      onClick={() =>
                        handleDeleteFile(index, values, setFieldValue)
                      }
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default SingleFloor;
