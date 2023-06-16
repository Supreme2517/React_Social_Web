import React from "react";
import s from './FormsControls.module.css'

export const FormControl = ({ input, meta, ...props }) => {
  let hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <props.child {...props} {...input} {...meta} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};