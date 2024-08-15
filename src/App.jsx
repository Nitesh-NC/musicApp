import "./App.css";
import Sidebar from "./component/Sidebar";
import Player from "./component/Player";
import Display from "./component/Display";

function App() {
  return (
    <>
      <div className="bg-[#353839] h-screen">
        <div className="flex h-[90%]">
          <Sidebar />
          <Display/>
        </div>
        <div className="h-[10%] ">
          <Player />
        </div>
      </div>
    </>
  );
}

export default App;
