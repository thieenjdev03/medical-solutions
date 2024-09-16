import './App.css';
import SideBar from './components/Sidebar'
import Header from './components/Header'
import Container from './components/Container'
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <div className="flex flex-row wrapper h-full">
        <SideBar></SideBar>
        <Container></Container>
      </div>
    </div>
  );
}

export default App;
