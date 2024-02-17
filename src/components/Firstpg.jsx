import React from 'react'
import styled from 'styled-components';


const Firstpg = ({anna}) => {
  return (
    <Container>
        <div className="left">
           <img src="./images/dices.jpg" alt="dice game" />
        </div>
        <div className="right">
           <h1>DICE GAME</h1>
           <Button onClick={anna}>Play Now</Button>
        </div>
    </Container>
    
  )
}

export default Firstpg

const Container=styled.div`
margin: 0 auto;
width: 118rem;
height: 52.2rem;
display: flex;
align-items: center;
margin-top: 7rem;
margin-left: 10rem;
.left img{
    height:52.2rem ;
    width:64.9rem ;
}
.right{
height:14.4rem ;
width: 52.2rem;
}
.right h1{
    font-weight: 700;
    font-size:9.6rem ;
    line-height: 14.4rem;
    white-space: nowrap;
}
`;
const Button=styled.button`
background-color: black;
color: white;
cursor: pointer;
height: 4.4rem;
width: 22rem;
border-radius: 0.5rem;
padding: 1rem 1.8rem 1rem 1.8rem;
gap: 1rem;
border: none;
margin-left: 30rem;
transition:  0.2s background ease-in ;

&:hover{
    background-color: white;
    color:black; 
    border:1px dashed black;
    transition:  0.3s background ease-in ;
    
}
`;
