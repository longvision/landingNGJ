import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styled from "styled-components";

const InputField = styled.input`
  font-size: 18px;
  height: 40px;
  background-color: #fff;
  border-width: 1px;
  width: 250px;
`;

export default function Input({ name, placeholder, ...rest }) {
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
    <InputField
      ref={inputRef}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}
