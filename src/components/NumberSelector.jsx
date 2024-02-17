import React, { useState } from "react";
import styled from "styled-components";

// selectedNum and setSelectedNum taken as props...
const NumberSelector = ({selectedNum,setSelectedNum,error,setError}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  
  const NumberSelectorHandler=(value)=>{
    setSelectedNum(value)
    setError("")
  }

  return (
    <div>
      <Container>
        <div className="topright">
          <div className="warning">
            <p>{error}</p>
          </div>
          <div className="num">
            {arr.map((items, i) => (
              <Box
                // whenever in onclick() we want to pass a function with value we need to give a callback
                // function or anynomous function. Otherwise if we pass a function name only no need to give
                // any callback function
                onClick={() => NumberSelectorHandler(items) }
                isSelected={items == selectedNum}
                key={i}
              >
                {items}
              </Box>
            ))}
          </div>
          <p>Select Number</p>
        </div>
      </Container>
    </div>
  );
};

export default NumberSelector;
const Box = styled.div`
  /* background-color:black;
    color:white; */
  width: 7rem;
  height: 7rem;
  border: 0.1rem solid black;
  font-weight: 700;
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.4rem;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
const Container = styled.div`
  .topright {
    margin-left: 54rem;

    /* display: flex;
    flex-direction: column;
    align-items: end; */
  }
  .warning {
    margin-left: -20.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: #ff0c0c;
    white-space: nowrap;
  }
  .topright .num {
    display: flex;
  }
  .topright p {
    font-size: 2rem;
    font-weight: 700;
    margin-left: 40rem;
  }
`;
