// Import necessary libraries
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichEditor = ({
  onChange,
  onBlur,
  value,
  error,
  touched,
  placeholder,
}) => {
  const handleEditorChange = (content) => {
    if (onChange) {
      onChange(content); // Pass content to parent if onChange is provided
    }
  };

  return (
    <div>
      <Editor
        apiKey="7c7r4atr8kqake5hx51r072ubm4ggi9smbp4x6oputgb7y9e"
        value={value}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | fontselect fontsizeselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
          font_formats:
            "Arial=arial,helvetica,sans-serif; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Tahoma=tahoma,arial,helvetica,sans-serif; Times New Roman=times new roman,times; Verdana=verdana,geneva;",
          placeholder,
          branding: false, // Remove "Build with TinyMCE"
        }}
        onEditorChange={handleEditorChange}
        onBlur={onBlur} // Trigger onBlur for validation
      />
      {touched && error && (
        <p style={{ color: "red", marginTop: "8px", fontSize: "14px" }}>
          {error}
        </p>
      )}{" "}
      {/* Display error if validation fails */}
    </div>
  );
};

export default RichEditor;
