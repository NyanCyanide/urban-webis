import Particle from "./components/Particle";
import Header from "./components/Header";
import Connect from "./components/Connect";
import About from "./components/About";
import Library from "./components/Library";
import Entry from "./components/Entry";
import Scrolldown from "./components/Scrolldown";
import Ending from "./components/Ending";

function App() {
  return (
    <>
      {/* <Particle /> */}
      <Header />
      <Entry />
      <Scrolldown />
      <About />
      <Library />
      <Connect />
      <Ending/>
    </>
  );
}

export default App;
