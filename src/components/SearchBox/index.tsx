import { useAppDispatch } from "../../hooks";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { Field, Form, Formik } from "formik";

export default function SearchBox() {
  const dispatch = useAppDispatch();
  return (
    <div className={css.searchBox}>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={({ name }) => {
          dispatch(changeFilter(name));
        }}
      >
        <Form className={css.form}>
          <label>Find contacts by name</label>
          <Field
            type="text"
            name="name"
            placeholder="Enter the filter value and press Enter key"
            className={css.input}
          />
        </Form>
      </Formik>
    </div>
  );
}
