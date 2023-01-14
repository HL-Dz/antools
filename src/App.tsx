import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/Sections/Hero/Hero";
import PopularTools from "./components/Sections/PopularTools/PopularTools";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <PopularTools />
    </div>
  );
}

export default App;
