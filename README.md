# Framer-motion

## 📌 Installation

```
$ yarn add framer-motion
```

## 📌 Usage

### 📄 Declaration

```js
<motion.div>Box</motion.div>
```

- styled-components

```js
const Box = styled(motion.div)``;
```

or

```js
<Box as={motion.div} />
```

- Basic Animation

```js
<Box
  transition={{ type: "spring", delay: 0.3 }}
  initial={{ scale: 0 }}
  animate={{ scale: 1, rotateZ: 360 }}
/>
```

### 📄 Variants

```js
// Variants
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.3 } },
};

<Box variants={myVars} initial="start" animate="end" />;
```

### 📄 Orchestration

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

### 📄 Drag

- drag 속성을 줘서 컴포넌트를 drag 할 수 있음

```js
<Box drag variants={boxVariants} whileHover="hover" whileTap="tap" />
```

> 컴포넌트 애니메이션에 color를 줄 때 `blue`, `black`과 같이 string 형태로 주면 transition이 동작안함. 값으로 입력해주어야 함. (`rgba(1, 2, 3)`과 같이.)

- drag constraints: dragConstraints 속성을 통해 드래그 영역을 제한할 수 있음
  - 범위를 지정할 때 top, left, bottom, right와 같이 값을 입력할 수 있음
  - element의 ref를 가져와서 dragConstraints의 값으로 주어 제한할 수도 있음

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

### 📄 MotionValues

- `useMotionValue`를 사용해 값을 선언하고, 이 값을 추적할 element와 연결할 수 있음
- 추적할 때에는 `useMotionValueEvent`를 사용
- x의 값이 변할 때 해당 컴포넌트는 리렌더링 되는 방식이 아님, 단순히 x의 값만 바뀜

```js
const x = useMotionValue(0);

useMotionValueEvent(x, "change", (value) => {
  console.log(value);
});

return (
  <Container>
    <Box style={{ x }} drag="x" dragSnapToOrigin />
  </Container>
);
```

### 📄 useTransform

- `useTransform`은 추적할 값에 따라 값을 변경시켜줌
- 예를 들어, x의 좌표에 따라 scale의 값이 변경되었으면 함
  - x값이 -300일 때 2, 0일 때 1, 300일 때 0.1이 리턴되었으면 함
- 첫번째 파라미터로 추적할 값, 두번째 파라미터로 추적할 값의 기준값, 세번째 파라미터로 기준값에 도달했을 때 할당할 값을 입력
  - 따라서 input과 output의 개수가 같아야함

```js
const x = useMotionValue(0);
const scale = useTransform(x, [-300, 0, 300], [2, 1, 0.1]);
```

### useScroll

- scrollX, scrollY: 픽셀 단위로 스크롤 값을 가져올 수 있음
- scrollXProgress, scrollYProgress: 총 스크롤 할 수 있는 값의 비율을 리턴 (최소값 0, 최대값 1)

### 📄 SVG Animation

- motion의 path태그를 사용하여 animation을 부여할 수 있음

```js
  <motion.path initial={...} animate={...} />
```

- 각 animation의 transition을 따로따로 부여할 수 있음

```js
<motion.path
  variants={svgVar}
  initial="start"
  animate="end"
  transition={{
    default: { duration: 3 },
    fill: { duration: 2, delay: 3 },
  }}
  stroke="white"
  strokeWidth="2"
/>
```

### 📄 AnimatePresence

- AnimatePresence를 사용해서 React 트리에서 컴포넌트가 생성되고 제거될 때의 animation을 부여할 수 있음
- exit 속성을 통해 종료될 때 animation을 설정할 수 있음

```js
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

<AnimatePresence>
  {isShow ? (
    <Box variants={boxVar} initial="start" animate="end" exit="leaving" />
  ) : null}
</AnimatePresence>;
```

- custom: 각 animation 컴포넌트에 대해 동적 variants를 적용시킬 수 있는 속성

```js
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
</AnimatePresence>;
```

- isBack이 `true`와 `false`에 따라 다른 애니메이션을 적용

> Element의 key를 바꿔주면 React는 element가 사라졌다고 판단한다.
