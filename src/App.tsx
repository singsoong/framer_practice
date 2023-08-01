import React, { useState } from "react";
import { styled } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

// Variants
const boxVar = {
  invisible: (isBack: boolean) => {
    return {
      x: isBack ? -300 : 300,
      opacity: 0,
      scale: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => {
    return {
      x: isBack ? 300 : -300,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
      },
    };
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextOnClick = async () => {
    await setBack(false);
    setVisible((prev) => (prev === 8 ? 8 : prev + 1));
  };

  const prevOnClick = async () => {
    await setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Container>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVar}
          initial="invisible"
          animate="visible"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevOnClick}>prev</button>
      <button onClick={nextOnClick}>next</button>
    </Container>
  );
}

export default App;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: absolute;
  top: 300px;
`;
