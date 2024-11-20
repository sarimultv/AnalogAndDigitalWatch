import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const inter = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(inter);
    };
  }, [time]);

  return (
    <div className="text-2xl">
      <p className="">{time}</p>
    </div>
  );
};

export default DigitalClock;
