import React, { useState } from "react";
import { styled } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

// Variants
const boxVar = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 100,
  },
};

function App() {
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => setIsShow((prev) => !prev);

  return (
    <Container>
      <AnimatePresence>
        {isShow ? (
          <Box variants={boxVar} initial="start" animate="end" exit="leaving" />
        ) : null}
      </AnimatePresence>
      <button onClick={toggleShow}>Click</button>
    </Container>
  );
}

export default App;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
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
