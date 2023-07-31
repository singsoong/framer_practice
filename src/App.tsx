import React from "react";
import { styled } from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

// Variants

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-300, 0, 300], [2, 1, 0.1]);

  useMotionValueEvent(scale, "change", (value) => {
    console.log(value);
  });

  return (
    <Container>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
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
