import React, { useState } from "react";
import { styled } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

// Variants

function App() {
  const [clickedId, setClickedId] = useState<null | string>(null);

  return (
    <Container>
      <GridContainer>
        {[1, 2, 3, 4].map((i) => (
          <Box
            onClick={() => setClickedId(String(i))}
            key={i}
            layoutId={String(i)}
          />
        ))}
      </GridContainer>
      <AnimatePresence>
        {clickedId && (
          <Overlay
            onClick={() => setClickedId(null)}
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={{ background: "rgba(0, 0, 0, 0.5)" }}
            exit={{ background: "rgba(0, 0, 0, 0)" }}
          >
            <OverlayBox layoutId={clickedId} />
          </Overlay>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default App;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const GridContainer = styled.div`
  display: grid;
  width: 80vw;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const OverlayBox = styled(Box)`
  width: 400px;
  height: 300px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
