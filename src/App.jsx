import Todos from "./components/Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111]">
      <Todos />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
