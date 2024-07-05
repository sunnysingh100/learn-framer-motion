"use client";
import {motion} from "framer-motion";
function ProgressBar(): JSX.Element {
  return (
    <div className="mt-14">
      <h1>Progress bar</h1>
      <div className="w-full h-3 rounded-lg bg-white">
        <motion.div
          animate={{
            width: "100%",
            transition: {
              duration: 5,
              ease: "easeInOut",
            },
          }}
          className="w-1/12 h-full bg-cyan-300"
        ></motion.div>
      </div>
    </div>
  );
}

export default ProgressBar;
