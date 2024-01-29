import classNames from "classnames";
import { Button } from "flowbite-react";
import { useState } from "react";
import Webcam from "react-webcam";
export default function Show() {
  console.log(localStorage);
  const [start, setStart] = useState(false);

  return !start ? (
    <div className="absolute inset-0 flex justify-center items-center">
      <Button onClick={() => setStart(true)}>Start</Button>
    </div>
  ) : (
    <div className="flex w-screen h-screen bg-black overflow-x-hidden max-sm:flex-col">
      <audio src="/caf-2023-t9wass/music.mp3" autoPlay loop></audio>
      {(localStorage.khssiym === "jerry" || localStorage.khssiym === "3zi") && (
        <video
          className="w-[50%] max-sm:w-full h-screen object-cover  max-sm:h-[50vh]"
          autoPlay
          src={classNames({
            "/caf-2023-t9wass/t9wissat/jerry.mp4":
              localStorage.khssiym === "jerry",
            "/caf-2023-t9wass/t9wissat/l3zi.mp4":
              localStorage.khssiym === "3zi",
          })}
          loop
          muted
        ></video>
      )}
      {localStorage.khssiym === "self" && (
        <div className="relative w-[50%] max-sm:w-full">
          <img
            src="/caf-2023-t9wass/t9wissat/self.png"
            className="w-full max-sm:w-full h-screen object-cover  max-sm:h-[50vh]"
          />
          <div className="absolute top-0 inset-0 flex items-center justify-end">
            <Webcam className="w-44 animate-t9wissa" />
          </div>
        </div>
      )}
      <div className="relative w-[50%] max-sm:h-[50vh] max-sm:w-full ">
        <img
          src="/caf-2023-t9wass/l3fya.png"
          className=" w-full h-screen object-cover max-sm:h-96"
          alt=""
        />
        <img
          src={`/caf-2023-t9wass/countries/${localStorage.country}.png`}
          className="absolute top-8 left-[50%] max-sm:top-10 max-sm:left-[44%]"
          alt="country"
        />
      </div>
    </div>
  );
}
