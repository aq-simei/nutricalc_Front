import React from 'react';
import styled from 'styled-components';

const TextFieldDiv = styled.div`
    margin: 24px 0;
`

const LabelForm = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    width: 50vw;
`

const FormInput = styled.input`
    background-color: #1aa6b7;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`


const TextField = (props) =>{

    const onType = (event) => {
        props.onType(event.target.value);
    }

    return(
        <TextFieldDiv>
            <LabelForm>{props.label}</LabelForm>
            <FormInput value={props.value} required={props.obrigatory} placeholder={props.placeholder}/>
        </TextFieldDiv>
    )

}



export default TextField;