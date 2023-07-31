import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

// Variants
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.3 } },
};

function App() {
  return (
    <Container>
      <Box variants={myVars} initial="start" animate="end" />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 50px;
`;
