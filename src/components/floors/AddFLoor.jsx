import React, { useRef, useState } from "react";
import "./addFloor.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Autocomplete, TextField, Card } from "@mui/material";
import SingleFloor from "./SingleFloor";
import { v4 as uuidv4 } from "uuid";

const AddFLoor = () => {
  const [floors, setFloors] = useState([{ id: uuidv4() }]);
  const [selectedFile, setSelectedFile] = useState("");
  const [singleFloorData, setSingleFloordata] = useState([]);

  const saveFloorRef = useRef(null);

  const clickSaveFloor = () => [saveFloorRef.current.click()];

  const initialState = {
    file: "",
  };

  const validationSchema = Yup.object({
    // floorName: Yup.string().required("Floor no is required"),
    file: Yup.string().required("Please select the property file"),
    // files: Yup.array()
    //   .of(Yup.number().required("File number is required")) // Validating each entry as a number
    //   .min(1, "Please provide at least one file number")
    //   .required("Files are required"),
  });

  const submitHandler = (values) => {
    // console.log(values);
    console.log(singleFloorData)
  };

  const data = ["abc", "def"];

  return (
    <Card>
      <div className="container-fluid">
        <Formik
          validationSchema={validationSchema}
          onSubmit={submitHandler}
          initialValues={initialState}
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
                <div className="col-12">
                  <Autocomplete
                    onChange={(e, value) => {
                      setFieldValue("file", value);
                      setSelectedFile(value);
                    }}
                    value={values.file}
                    options={data}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="file"
                        type="text"
                        label="Select file"
                        onBlur={handleBlur}
                        error={touched.file && Boolean(errors.file)}
                        helperText={touched.file && errors.file}
                      />
                    )}
                  />
                </div>
                <button
                  ref={saveFloorRef}
                  style={{ display: "none" }}
                  type="submit"
                >
                  save
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="row g-3">
          {floors.map((floor) => (
            <div key={floor.id} className="col-12">
              <SingleFloor
                file={selectedFile}
                floors={floors}
                setFloors={setFloors}
                id={floor.id}
                setSingleFloordata={setSingleFloordata}
                singleFloorData={singleFloorData}
              />
            </div>
          ))}
        </div>
        <div className="row g-3">
          <div style={{ textAlign: "right", padding: "1rem 0" }}>
            <Button
              onClick={clickSaveFloor}
              variant="contained"
              color="success"
            >
              Save data
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddFLoor;
