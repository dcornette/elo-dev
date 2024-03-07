import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Container, Divider } from 'styled-system/jsx';
import { css } from 'styled-system/css';

function App() {
  return (
    <Container maxWidth="full" className={css({ bg: '#f1f5f9' })}>
      <Header />
      <Divider />
      <Dashboard />
    </Container>
  )
}

export default App
