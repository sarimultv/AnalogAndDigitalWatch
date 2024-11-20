import { useEffect, useState } from "react";

const AnalogClockTime = () => {
  // seconds calc
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [secHandRotation, setSecHandRotation] = useState(6 * seconds);

  //   minutes calc

  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [minHandRotation, setMinHandRotation] = useState(6 * minutes);

  // hour calc

  const [hour, setHour] = useState(new Date().getHours());
  const [hrHandRotation, setHrHandRotation] = useState(30 * hour + minutes / 2);

  //   console.log(seconds + " seconds");

  //   const secondsHandRotation = 6 * seconds;
  //   console.log("seconds hand rotates " + secondsHandRotation + " degree");

  //   console.log(minutes + " minutes");

  //   const minutesHandRotation = 6 * minutes;
  //   console.log("minutes hand rotates " + minutesHandRotation + " degree");

  //   console.log(hour + " hour");

  //   const hourHandRotation = 30 * hour + minutes / 2;
  //   console.log("hour hand rotates " + hourHandRotation + " degree");

  useEffect(() => {
    setTimeout(() => {
      setSeconds(new Date().getSeconds());
      setSecHandRotation(6 * seconds);

      setMinutes(new Date().getMinutes());
      setMinHandRotation(6 * minutes);

      setHour(new Date().getHours());
      setHrHandRotation(30 * hour + minutes / 2);
    }, 1000);
  }, [seconds, minutes, hour]);

  return (
    <div className="absolute -mt-[5.5rem]">
      <img
        className="absolute mt-[5.5rem] rounded-full border border-gray-500 object-cover"
        src="clock.jpeg"
        alt="clock thumbnail"
      />
      <div className="w-[12rem] h-[12rem] flex items-end justify-center p-2">
        <div
          className="border-l border-l-black bg-black w-1 h-[3rem] absolute"
          style={{
            transform: `rotate(${hrHandRotation}deg)`,
            transformOrigin: "bottom",
            borderRadius: "10px",
          }}
        ></div>
        <div
          className="border-l border-l-black bg-black w-1 h-[4rem] absolute"
          style={{
            transform: `rotate(${minHandRotation}deg)`,
            transformOrigin: "bottom",
            borderRadius: "10px",
          }}
        ></div>
        <div
          className="border-l border-l-black bg-black w-1 h-[5rem] absolute"
          style={{
            transform: `rotate(${secHandRotation}deg)`,
            transformOrigin: "bottom",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <div className="border border-yellow-900 bg-yellow-700 w-3 h-3 rounded-full absolute ml-[5.6rem] -mt-[.8rem]"></div>
    </div>
  );
};

export default AnalogClockTime;
