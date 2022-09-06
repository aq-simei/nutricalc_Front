import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    background-color: #f56A79;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 32px;
    border: none;
    cursor: pointer;
    color : #FFFFFF;
    margin: 32px 0;
    
    &:hover{
        background-color: #FF414D;
        transition: 1s;
        font-size: 33px;
       
    }
`;

function Button({ children }) {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

Button.propTypes = { children: PropTypes.node.isRequired };

export default Button;
