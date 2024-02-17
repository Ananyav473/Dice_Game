import React, { useState } from "react";
import styled from "styled-components";
import { Button,OutLineBtn } from "../styled/Button";
import Rules from "./Rules";

const Game_content = ({ currentDice, rollDice,resetScore,showRules,setShowRules}) => {
    

  return (
    <Main>
      <div className="dice_image">
        <img
          src={`./images/dice_${currentDice}.png`}
          alt={`dice_${currentDice}`}
          onClick={rollDice}
        />
        <p>Click on Dice to roll</p>
      </div>
      <div className="btn">
        <OutLineBtn onClick={resetScore}>Reset Score</OutLineBtn>
        <Button  onClick={()=>setShowRules(!showRules)}
        >{showRules?"Hide": "Show"} Rules</Button>
      </div>
      {showRules && <Rules/> }
    </Main>
  );
};

export default Game_content;
const Main = styled.div`
  .dice_image img {
    width: 25rem;
    height: 25rem;
    cursor: pointer;
  }
  .dice_image p {
    font-weight: 500;
    font-size: 2.4rem;
    margin-left: 1.05rem;
    margin-bottom: 1.5rem;
  }
  .btn{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 1.5rem;
  }
`;
