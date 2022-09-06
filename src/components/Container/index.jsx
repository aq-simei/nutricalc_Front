/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Title from '../Titles';
import Paragraph from '../Paragraph';
import imageFit from '../../assets/images/bodybuilder.png';

const Box = styled.div`
    display: flex;
    height: 1000px;
    width: 100vw;
    background-color:#D9ECF2;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;

    img{
      width : 45vw
    }
`;

const StyledParagraph = styled(Paragraph)`
  width: 50vw;
  text-align: justify;
  font-size: 60px;
`;

function Container() {
  return (
    <>
      <Title>You know how much is important to know your caloric expenditure ?</Title>
      <Box>
        <StyledParagraph>
          Its based on your caloric expenditure that your nutricionist  or your fitness consultant you calculate your diet,
          based on  your goal ,if you need to win some muscles , you probably you have an Caloric Superavit, but ,if your
          goal is to lose some weigth , problably you will have some caloric deficit.
        </StyledParagraph>
        <img src={imageFit} alt="" />
      </Box>
      <Title> About the Project</Title>
      <Paragraph>
        This project was made to help people have an fast an easy whay to calculate their caloric expenditure, even if you had
        some desease , that needs some specific formula, and also to help nutrition students in their activities, as a former nutrition student,
        i know how hard it is to find the right formula to your patient or case , i hope i can help you with that.
      </Paragraph>
      <Paragraph>
        About the tech stuff, to the front-end i use React and styled-components ,and in the back-end NodeJS ,Sequelize and
        as database , i use MongoDB Atlas , you can see the repo of the project in this link if you have some curiosity

        <br />
        Git Hub :
        <a href="https://github.com/marcossnikel/imcCalc">https://github.com/marcossnikel/imcCalc</a>
      </Paragraph>

    </>

  );
}

export default Container;
