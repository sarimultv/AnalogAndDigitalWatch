import AnalogClockTime from "./components/AnalogClockTime";
import DigitalClock from "./components/DigitalClock";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <h1 className="uppercase text-center text-2xl pt-4">Dynamic Watch</h1>
      <div className="pt-10 flex md:justify-evenly gap-10 mx-14">
        <DigitalClock />
        <div>
          <AnalogClockTime />
        </div>
      </div>
    </div>
  );
}

export default App;
