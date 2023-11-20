import { Formik, Form, Field } from "formik";
import css from './Form.module.css'

export const MoviesSearchForm = ({ handleFormSubmit }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={handleFormSubmit}
    >
      <Form className={css.searchbar}>
        <Field className={css.searchbarInput} type="text" name="query" placeholder="Search movies" autoComplete="off" autoFocus />
        <button className={css.searchbarBtn} type="submit">Search</button>
      </Form>
    </Formik>
  );
};

