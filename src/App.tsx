import "./App.css";
import Header from "./components/Header/header";
import Companies from "./components/Sections/Companies/Companies";
import Hero from "./components/Sections/Hero/Hero";
import PopularTools from "./components/Sections/PopularTools/PopularTools";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <PopularTools />
      <Companies />
    </div>
  );
}

export default App;
