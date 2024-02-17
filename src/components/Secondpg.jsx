import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import Game_content from "./Game_content";

const Secondpg = () => {
  const[score,setScore]=useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrDice] = useState(1);
  const[error,setError]=useState("")
  const [showRules,setShowRules]=useState(false);

  const generateRandom = (min, max) => {
    // console.log(Math.floor(Math.random() * (max - min)) + min);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const rollDice = () => {
    if(!selectedNum){
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandom(1, 7);
    setCurrDice((prev) => randomNumber);
    
    if(selectedNum === randomNumber){
      setScore((prev)=> prev + randomNumber);
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined)

  };

  const resetScore=()=>{
    setScore(0)
    setSelectedNum(undefined)
  }

  return (
    <Main>
      <div className="top">
        <TotalScore score={score}/>
        <NumberSelector
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
          error={error}
          setError={setError}
        />
      </div>
      <div className="game_content">
        <Game_content currentDice={currentDice} rollDice={rollDice} resetScore={resetScore} showRules={showRules}
        setShowRules={setShowRules}/>
      </div>
      <div className="btn">
      </div>
    </Main>
  );
};

export default Secondpg;

const Main = styled.div`
  .top {
    width: 123rem;
    height: 15.1rem;
    margin-left: 9rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    /* background-color: red; */
  }
  .game_content {
    margin-top: 2rem;
    margin-left: 55rem;
  }
`;
