import "./App.css";
import Header from "./components/Header/header";
import Companies from "./components/Sections/Companies/Companies";
import Hero from "./components/Sections/Hero/Hero";
import Newcomers from "./components/Sections/Newcomers/Newcomers";
import PopularTools from "./components/Sections/PopularTools/PopularTools";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <PopularTools />
      <Companies />
      <Newcomers />
    </div>
  );
}

export default App;
