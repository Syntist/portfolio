"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css"; // Editor styles
import "@uiw/react-markdown-preview/markdown.css"; // Preview styles
import { createProject, updateProject } from "@/server-action/project";
import { toast } from "react-toastify";
import { errorHandler } from "@/utils/helper";
import { useFormik } from "formik";
import * as yup from "yup";
import { Padding } from "@mui/icons-material";
import { useRouter } from "next/navigation";

// Dynamically import MDEditor to avoid SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: true });

// Yup validation schema
const validationSchema = yup.object().shape({
  title: yup.string().required("Project title is required"),
  description: yup.string(),
  github: yup.string().url("Invalid GitHub URL"),
  url: yup.string().url("Invalid site URL"),
});

export const ProjectForm = ({ data }) => {
  const router = useRouter();
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: data || {
      title: "",
      description: "",
      github: "",
      url: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      let handler = values.title.replaceAll(" ", "-");

      if (values._id) {
        updateProject({ ...values, handler })
          .then(() => {
            toast.success("Project updated successfully!");
            router.push(`/projects/${handler}`);
            resetForm();
          })
          .catch((e) => toast.error(errorHandler(e)));
      } else {
        createProject({ ...values, handler })
          .then(() => {
            toast.success("Project created successfully!");
            router.push(`/projects/${handler}`);
            resetForm();
          })
          .catch((e) => toast.error(errorHandler(e)));
      }
    },
  });

  return (
    <Box mt={10}>
      <Box
        sx={{ width: "100%", margin: "0 auto 20px", padding: "0 24px", mt: 10 }}
      >
        <Typography variant="h5" mb={2}>
          {data ? "Edit Project" : "Create a New Project"}
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <TextField
            label="Project Title"
            variant="outlined"
            fullWidth
            margin="normal"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />

          {/* Markdown Editor */}
          <Box mt={2} mb={2}>
            <MDEditor
              value={values.description}
              onChange={(value) => setFieldValue("description", value)}
              theme="dark"
              height={400}
            />
          </Box>

          {/* GitHub Link Field */}
          <TextField
            label="GitHub link"
            variant="outlined"
            fullWidth
            margin="normal"
            name="github"
            value={values.github}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.github && Boolean(errors.github)}
            helperText={touched.github && errors.github}
          />

          {/* Site URL Field */}
          <TextField
            label="Site URL"
            variant="outlined"
            fullWidth
            margin="normal"
            name="url"
            value={values.url}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.url && Boolean(errors.url)}
            helperText={touched.url && errors.url}
          />

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};
