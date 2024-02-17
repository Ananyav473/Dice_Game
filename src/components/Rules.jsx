import React, { useState } from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RuleContainer>
        <h1>How to play dice game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RuleContainer>
  )
}

export default Rules;

const RuleContainer = styled.div`
background-color: #FBF1F1;
width:79rem ;
height:20rem ;
margin-left: -25rem;
margin-top: 6.4rem;
margin-bottom: 14.6rem;
padding: 2rem;
h1{
    font-weight:700 ;
    font-size:2.4rem ;
    line-height: 3.6rem;
    margin-bottom: 2.4rem;
}
p{
    font-weight:500 ;
    font-size:1.6rem ;
    line-height: 2.4rem; 
}
`;