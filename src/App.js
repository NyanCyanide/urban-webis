import Particle from "./components/Particle";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
    <section className="w-fit h-fit">
        <Particle />
    </section>
    <section className="">
        <Header />
        <Home/>
    </section>
    <section className="text-white">
      Hello there
    </section>
        
    </>
  );
}

export default App;
