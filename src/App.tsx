import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

// Variants
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { borderRadius: "150px", scale: 1 },
};

function App() {
  return (
    <Container>
      <Box variants={boxVariants} whileHover="hover" whileTap="tap"></Box>
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
  background-color: white;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
