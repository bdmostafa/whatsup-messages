import './App.css';
import Chat from './components/Chat/Chat';
import Info from './components/Info/Info';
import LeftSidebarIcon from './components/LeftSidebarIcon/LeftSidebarIcon';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <LeftSidebarIcon />
        <Sidebar />
        <Chat />
        <Info />
      </div>
      
    </div>
  );
}

export default App;
