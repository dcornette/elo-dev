import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { HStack, VStack } from '../styled-system/jsx';
import { css, cva } from '../styled-system/css';

const logo = cva({
  base: {
    h: '10rem',
    p: '1.5rem',
    willChange: 'filter',
    transition: 'filter 300ms',
  },
  variants: {
    visual: {
      vite: {
        _hover: {
          filter: 'drop-shadow(0   0   2em #646cffaa)',
        }
      },
      react: {
        _hover: {
          filter: 'drop-shadow(0   0   2em #61dafbaa)',
        },
        _motionSafe: { animation: 'spin infinite 20s linear' },
      }
    }
  }
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <VStack gap={6}>
      <HStack gap={6}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={logo({ visual: 'vite' })} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={logo({ visual: 'react' })} alt="React logo" />
        </a>
      </HStack>
      <h1>Vite + React</h1>
      <div className={css({ p: '10' })}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={css({ color: '#888' })}>
        Click on the Vite and React logos to learn more
      </p>
    </VStack>
  )
}

export default App
