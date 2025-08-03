import { Accordion } from "./Accordion";

function App() {
  return (
    <div className="min-h-screen bg-stone-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-stone-800">
        Accordion
      </h1>
      <Accordion />
    </div>
  );
}

export default App;