import './App.css';
import Header from './components/Header/Header'
import Container from './components/Container/Container'
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <div className="flex flex-row wrapper h-full">
        <Container></Container>
      </div>
    </div>
  );
}

export default App;
