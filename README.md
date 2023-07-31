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

- drag 속성을 줘서 컴포넌트를 drag 할 수 있음

```js
<Box drag variants={boxVariants} whileHover="hover" whileTap="tap" />
```

> 컴포넌트 애니메이션에 color를 줄 때 `blue`, `black`과 같이 string 형태로 주면 transition이 동작안함. 값으로 입력해주어야 함. (`rgba(1, 2, 3)`과 같이.)

- drag constraints: dragConstraints 속성을 통해 드래그 영역을 제한할 수 있음
  - 범위를 지정할 때 top, left, bottom, right와 같이 값을 입력할 수 있음
  - element의 ref를 가져와서 dragConstraints의 값으로 주어 제한할 수도 있음음

```js
// value
<Box
  drag
  dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
  dragSnapToOrigin
  variants={boxVariants}
  whileHover="hover"
  whileTap="tap"
  whileDrag={{
    backgroundColor: "rgba(46, 204, 113)",
    transition: { duration: 2 },
  }}
/>;

// ref
function App() {
  const bigBoxRef = useRef < HTMLDivElement > null;
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
```

- dragSnapToOrigin 속성을 주면 드래그 후 제자리로 돌아감

```js
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
```

- dragElastic: 드래그할 때, 당기는 힘을 조절할 수 있음 (default: 0.5)

```js
<Box
  drag
  dragConstraints={bigBoxRef}
  dragSnapToOrigin
  dragElastic={1}
  variants={boxVariants}
  whileHover="hover"
  whileTap="tap"
  whileDrag={{
    backgroundColor: "rgba(46, 204, 113)",
    transition: { duration: 2 },
  }}
/>
```
