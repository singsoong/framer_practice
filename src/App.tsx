import React, { useRef } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

// Variants
const boxVariants = {
  hover: { rotateZ: 90 },
  tap: { borderRadius: "150px", scale: 1 },
};

function App() {
  const bigBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Container>
      <BigBox ref={bigBoxRef}>
        <Box
          drag
          dragConstraints={bigBoxRef}
          dragSnapToOrigin
          variants={boxVariants}
          whileHover="hover"
          whileTap="tap"
          whileDrag={{
            backgroundColor: "rgba(46, 204, 113)",
            transition: { duration: 2 },
          }}
        />
      </BigBox>
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

const BigBox = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
