import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
