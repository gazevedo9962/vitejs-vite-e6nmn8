import { useSpring, animated } from '@react-spring/web';
import FlexTeste from '../antd/FlexTeste.tsx';

export default function TesteAnimated() {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const AnimatedFlexTeste = animated(() => (
    <animated.div 
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
      }}
    />
  ));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  /*
  const styles = useSpring({
    from: {
      opacity: 1,
      y: '-100vh',
      width: 80,
      height: 80,
      background: '#ff6d6d',
      borderRadius: 8,
    },
    to: {
      opacity: 0,
      y: 0,
      width: 110,
      height: 110,
      background: '#fff',
      borderRadius: 10,
    },
  });
*/
  return (
    <>
      {/*
      <AnimatedFlexTeste style={styles} />
       */}
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs,
        }}
      />
    </>
  );
}
