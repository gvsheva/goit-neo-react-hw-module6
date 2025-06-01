import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useAppDispatch } from "../../hooks";
import { addContact } from "../../redux/contactsSlice";

const schema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be between 3 and 50 characters")
    .max(50, "Name must be between 3 and 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Phone number must be between 3 and 50 characters")
    .max(50, "Phone number must be between 3 and 50 characters")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useAppDispatch();
  return (
    <div className={css.contactForm}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact({ id: nanoid(), ...values }));
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={css.error} />

          <label htmlFor="number">Number</label>
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={css.error} />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
