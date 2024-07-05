"use client";

import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";

function ExitAndEnterAnimation() {
  const [removeInnerCircle, setRemoveInnerCircle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRemoveInnerCircle(true);
    }, 3000);
  }, [removeInnerCircle]);

  return (
    <div className="mt-24">
      <h1> Exit and Enter Animation</h1>
      <div className="w-80 h-80 rounded-full bg-sky-50 mt-32 mx-auto flex justify-center items-center">
        <AnimatePresence>
          {removeInnerCircle === false && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1, transition: {duration: 2, delay: 0.5}}}
              exit={{opacity: 0.2, transition: {duration: 2, delay: 10}}}
              className="w-40 h-40 rounded-full bg-sky-400"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExitAndEnterAnimation;
