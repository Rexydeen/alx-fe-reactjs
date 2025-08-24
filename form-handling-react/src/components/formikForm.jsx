import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('Formik submitted:', values);
        resetForm();
      }}
    >
      <Form className="max-w-md mx-auto space-y-4">
        <div>
          <label>Username</label>
          <Field name="username" className="w-full border p-2" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label>Email</label>
          <Field name="email" type="email" className="w-full border p-2" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label>Password</label>
          <Field name="password" type="password" className="w-full border p-2" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </Form>
    </Formik>
  );
}