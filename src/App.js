import "./styles/styles.css";
import "./styles/bootstrap.min.css"
import Navbar from "./components/navigation/navbar";
import Cover from "./components/cover";
import Skills from "./components/skills/skills";
import Samples from "./components/samples/samples";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover/>
      <Skills/>
      <Samples/>
    </div>
  );
}

export default App;
