import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import styled from "styled-components";

const InputField = styled.input`
  font-size: 18px;
  height: 40px;
  margin-top: 10px;
  background-color: #fff;
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

export default function Input({ name, type, label, placeholder, ...rest }) {
  return (
    <>
      <Label>{label}</Label>
      <InputField type={type} name={name} placeholder={placeholder} />
    </>
  );
}
