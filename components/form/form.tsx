import React from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../form/form.module.css";

type FormProps = {
  itemRequired: string;
};

export default function Form() {
  const { register, handleSubmit, errors } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = (data) => {
    alert(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="itemRequired"
        ref={register({ required: true, minLength: 4 })}
      />
      {errors.itemRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}
