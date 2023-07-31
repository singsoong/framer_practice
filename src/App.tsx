import React from "react";
import { styled } from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

// Variants

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-300, 300], [-360, 360]);
  const gradient = useTransform(
    x,
    [-300, 0, 300],
    [
      "linear-gradient(135deg, rgb(118, 243, 233), rgb(45, 58, 231))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(84, 194, 126), rgb(175, 214, 66))",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  return (
    <Container style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Container>
  );
}

export default App;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 200vh;
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
