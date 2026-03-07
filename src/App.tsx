import "./App.css";
import MainPage from "./pages/mainPage";
import { ToastProvider } from "./shared/context/ToastContext";

function App() {
  return (
    <div>
      <ToastProvider>
        <MainPage />
      </ToastProvider>
    </div>
  );
}

export default App;
