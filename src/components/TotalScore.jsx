import React from 'react'
import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <div>
        <Container>
        <div className="topleft">
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
        </Container>
    </div>
  )
}

export default TotalScore

const Container =styled.div`

.topleft{
    width:13rem;
    height: 13rem;
    margin-top: -3rem;
}
.topleft h1{
    font-size:7rem ;
    font-weight:500 ;
    line-height: 15rem;
    margin-left: 3rem;
}
.topleft p{
    margin-top:-5rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3.6rem;
}
`;