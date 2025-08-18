"use client";

import React from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css"; // Editor styles
import "@uiw/react-markdown-preview/markdown.css"; // Preview styles
import { createProject, updateProject } from "@/server-action/project";
import { toast } from "react-toastify";
import { errorHandler } from "@/utils/helper";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Dynamically import MDEditor to avoid SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

// Helpers
const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Yup validation schema
const validationSchema = yup.object().shape({
  title: yup.string().required("Project title is required"),
  description: yup.string(),
  github: yup.string().url("Invalid GitHub URL").nullable().transform((v, o) => (o === "" ? null : v)),
  url: yup.string().url("Invalid site URL").nullable().transform((v, o) => (o === "" ? null : v)),
});

export const ProjectForm = ({ data }) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: data || {
      title: "",
      description: "",
      github: "",
      url: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const handler = slugify(values.title);
      try {
        if (values._id) {
          await updateProject({ ...values, handler });
          toast.success("Project updated successfully!");
        } else {
          await createProject({ ...values, handler });
          toast.success("Project created successfully!");
        }
        resetForm();
        router.push(`/projects/${handler}`);
      } catch (e) {
        toast.error(errorHandler(e));
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    setFieldValue,
    isSubmitting,
  } = formik;

  const slug = slugify(values.title);

  return (
    <div className="container-xl py-6 md:py-10">
      {/* Page heading */}
      <div className="mb-4 md:mb-6">
        <h1 className="text-gradient text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {data ? "Edit Project" : "Create a New Project"}
        </h1>
        <p className="text-white/70 max-w-2xl">
          Add your project details, write a rich description in Markdown, and publish.
        </p>
      </div>

      {/* Form card */}
      <form onSubmit={handleSubmit} className="glass-card rise-in rounded-[var(--radius)] p-4 sm:p-6 md:p-8">
        {/* Title */}
        <div className="">
          <label htmlFor="title" className="block text-sm font-medium text-white/80">
            Project Title<span className="text-rose-300"> *</span>
          </label>
          <input
            id="title"
            name="title"
            required
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Neural Style Transfer Playground"
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40 transition"
          />
          {touched.title && errors.title && (
            <p className="mt-1 text-sm text-rose-300">{errors.title}</p>
          )}
        </div>

        {/* Slug preview */}
        <p className="mt-2 text-xs text-white/60">
          Preview URL: <span className="text-white/90">/projects/{slug || "<title>"}</span>
        </p>

        {/* Description (Markdown) */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-white/85 mb-2">Description</label>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[linear-gradient(145deg,rgba(40,48,60,.65),rgba(30,36,46,.4))]">
            <MDEditor
              value={values.description}
              onChange={(value) => setFieldValue("description", value)}
              highlightEnable={false}
              theme="dark"
              height={380}
            />
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="github" className="block text-sm font-medium text-white/80">
              GitHub URL
            </label>
            <input
              id="github"
              name="github"
              placeholder="https://github.com/username/repo"
              value={values.github}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40 transition"
            />
            {touched.github && errors.github && (
              <p className="mt-1 text-sm text-rose-300">{errors.github}</p>
            )}
          </div>

          <div>
            <label htmlFor="url" className="block text-sm font-medium text-white/80">
              Live Site URL
            </label>
            <input
              id="url"
              name="url"
              placeholder="https://your-site.com"
              value={values.url}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40 transition"
            />
            {touched.url && errors.url && (
              <p className="mt-1 text-sm text-rose-300">{errors.url}</p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:items-center">
          <Link
            href={data?.handler ? `/projects/${data.handler}` : "/projects"}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white/90 hover:text-white hover:bg-white/5 px-4 py-2.5 font-semibold transition"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSubmitting || !values.title}
            className="inline-flex items-center justify-center ml-auto rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold px-5 py-2.5 shadow-[0_8px_30px_rgba(99,102,241,0.35)] transition hover:-translate-y-0.5 disabled:opacity-60"
          >
            {isSubmitting && (
              <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            )}
            {isSubmitting ? (data ? "Saving…" : "Creating…") : (data ? "Save Changes" : "Create Project")}
          </button>
        </div>
      </form>
    </div>
  );
};
