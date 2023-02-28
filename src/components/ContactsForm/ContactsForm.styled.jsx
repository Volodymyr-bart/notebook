import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  padding: 20px;
  width: 30%;
  gap: 30px;
  /* margin-top: 20px;
  margin-bottom: 20px; */
  margin: 20px auto;
  background-color: #7fb8f2;
  color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  width: 90%;
  background-color: antiquewhite;
`;
export const Error = styled(ErrorMessage)``;

export const AddButton = styled.button`
  margin: 0 auto;
  width: 150px;
  background-color: #fff;
  color: #7fb8f2;
  cursor: pointer;
`;
