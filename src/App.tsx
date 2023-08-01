import React, { useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

// Variants

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Container onClick={toggleClicked}>
      <Box>{clicked && <Circle layoutId="circle" />} </Box>
      <Box>{!clicked && <Circle layoutId="circle" />}</Box>
    </Container>
  );
}

export default App;

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  display: flex;
  font-size: 25px;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
