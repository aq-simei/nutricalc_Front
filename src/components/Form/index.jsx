import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import TextField from '../TextField';
import Title from '../Titles';

const FormSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 55%;
    margin: 80px 0;
    text-align: center;
    border: 10px solid #f56A79;
    border-radius: 15px;
    padding: 68px;
    
`;
const FormItSelf = styled.form`
    max-width: 1200px;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 36px 64px;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    width: 70vw;
`;

function Form(props) {
  const [name, setName] = useState('');
  const [weigth, setWeigth] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('');

  return (
    <>
      <Title>Fill the form´s to see your caloric expenditure</Title>
      <FormSection>
        <TextField
          obrigatory
          label="Name"
          placeholder="Put here your name"
        />
        <TextField
          obrigatory
          label="Age"
          placeholder="Put here your age"
        />
        <TextField
          obrigatory
          label="Activity Level"
          placeholder="Select your activity Level"
        />
        <TextField
          obrigatory
          label="Heigth"
          placeholder="Put here your heigth"
        />
        <TextField
          obrigatory
          label="Weight"
          placeholder="Put here your Weight"
        />
        <Button>Calculate !!</Button>
      </FormSection>
    </>
  );
}

export default Form;
