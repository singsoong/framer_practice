import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

// Variants
const boxVariants = {
  start: {
    opacity: 1,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Container>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Circle = styled(motion.div)`
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  place-self: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
