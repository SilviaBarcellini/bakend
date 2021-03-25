import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../form/form.module.css";

type FormProps = {
  itemRequired: string;
  label: string;
};

export default function Form() {
  const { register, handleSubmit, errors } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = (data) => {
    alert(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Today I am out of ..."
        className={styles.input}
        name="itemRequired"
        ref={register({ required: true, minLength: 4 })}
      />
      {errors.itemRequired && <p>This field is required</p>}
      <input className={styles.submit} type="submit" />
    </form>
  );
}
