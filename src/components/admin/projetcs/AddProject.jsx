import React, { useState } from "react";
import "./addProject.css";
import { TextField, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";

const AddProject = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required."),
    detail: Yup.string().required("Detail is required."),
    keyFeatures: Yup.string().required("Key features are required."),
    technologies: Yup.string().required("Technologies are required."),
    image: Yup.mixed().required("At least one image is required."),
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const formattedFiles = files.map((file) => ({
      name: file.name,
      preview: URL.createObjectURL(file),
    }));
    setUploadedFiles([...uploadedFiles, ...formattedFiles]);
  };

  const handleFileRemove = (index) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  const handleSubmit = (values) => {
    const formattedKeyFeatures = values.keyFeatures
      .split(",")
      .map((feature) => feature.trim());
    const formattedTechnologies = values.technologies
      .split(",")
      .map((tech) => tech.trim());

    console.log({
      ...values,
      keyFeatures: formattedKeyFeatures,
      technologies: formattedTechnologies,
      images: uploadedFiles,
    });
    alert("Project added successfully!");
  };

  return (
    <div className="add_project_main">
      <Typography variant="h4" className="form-title">
        Add New Project
      </Typography>
      <Formik
        initialValues={{
          title: "",
          detail: "",
          keyFeatures: "",
          technologies: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="add_project_form">
            {/* Title Input */}
            <div className="form-group">
              <Field
                name="title"
                as={TextField}
                label="Project Title"
                variant="outlined"
                fullWidth
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
              />
            </div>

            {/* Detail Textarea */}
            <div className="form-group">
              <Field
                name="detail"
                as={TextField}
                label="Project Detail"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                error={touched.detail && Boolean(errors.detail)}
                helperText={touched.detail && errors.detail}
              />
            </div>

            {/* Key Features Input */}
            <div className="form-group">
              <Field
                name="keyFeatures"
                as={TextField}
                label="Key Features (comma-separated)"
                variant="outlined"
                fullWidth
                error={touched.keyFeatures && Boolean(errors.keyFeatures)}
                helperText={touched.keyFeatures && errors.keyFeatures}
              />
            </div>

            {/* Technologies Input */}
            <div className="form-group">
              <Field
                name="technologies"
                as={TextField}
                label="Technologies Used (comma-separated)"
                variant="outlined"
                fullWidth
                error={touched.technologies && Boolean(errors.technologies)}
                helperText={touched.technologies && errors.technologies}
              />
            </div>

            {/* Image Upload Section */}
            <div className="form-group">
              <Typography variant="h6" className="section-title">
                Upload Images
              </Typography>
              <div className="image-upload-container">
                <input
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  multiple
                  onChange={(e) => {
                    handleFileChange(e);
                    setFieldValue("image", e.target.files);
                  }}
                  className="file-input"
                />
                <label htmlFor="image-upload" className="upload-label">
                  <CloudUploadIcon className="upload-icon" />
                  <span>Upload Images</span>
                </label>
              </div>
              {errors.image && touched.image && (
                <div className="error-text">{errors.image}</div>
              )}
              <div className="uploaded-files">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="uploaded-file">
                    <img src={file.preview} alt={file.name} />
                    <div className="file-name">{file.name}</div>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleFileRemove(index)}
                      className="remove-button"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-buttons">
              <Button type="reset" variant="outlined" color="secondary">
                Reset
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProject;
