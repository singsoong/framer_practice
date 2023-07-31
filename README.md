# Framer-motion

## Installation

```
$ yarn add framer-motion
```

## Usage

- Declaration

```js
<motion.div>Box</motion.div>
```

- styled-components

```js
const Box = styled(motion.div)``;
```

- Basic Animation

```js
<Box
  transition={{ type: "spring", delay: 0.3 }}
  initial={{ scale: 0 }}
  animate={{ scale: 1, rotateZ: 360 }}
/>
```

- Variants

```js
// Variants
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.3 } },
};

<Box variants={myVars} initial="start" animate="end" />;
```

- Orchestration
  - delayChildren: 모든 자식들에게 delay 거는 속성
  - staggerChildren: 각 자식마다 순차적으로 실행할 때 사용하는 속성

```js
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
```

- whileHover, whileTap과 같은 props를 사용하여 특정 조건에서의 애니메이션을 처리할 수 있음.

```js
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
```
