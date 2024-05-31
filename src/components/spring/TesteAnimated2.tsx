import { useSpring, animated } from '@react-spring/web';

export default function TesteAnimated2() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0, scale: [0, 0, 0] },
      to: { opacity: 1, scale: [3, 3, 3] },
    }),
    []
  );
  const styleIni = { background: '#444' };

  return (
    <animated.div style={{ ...props, ...styleIni }}>Hello World</animated.div>
  );
}
