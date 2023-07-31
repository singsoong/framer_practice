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
