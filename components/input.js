import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styled from "styled-components";

const InputField = styled.input`
  font-size: 18px;
  height: 40px;
  margin-top: 10px;
  background-color: #fff;
  color: #fff;
  border-width: 1px;
  border-radius: 7px;
  width: 80%;
  max-width: 80%;
`;
const Label = styled.label`
  font-size: 14px;
  margin: 10px;

  color: #fff;
  width: 80%;
  font-weight: 700;
`;

export default function Input({ name, label, placeholder, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <Label htmlFor={fieldName}>{label}</Label>}
      <InputField
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
}
