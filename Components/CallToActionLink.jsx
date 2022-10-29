import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const boxVariant = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listVariant = {
  hidden: {
    y: 40,
  },
  visible: {
    y: 0,
  },
};

const lineVariant = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
  },
};

const CallToActionLink = ({ href, text }) => {
  return (
    <div className="inline-block mt-5 md:mt-10">
      <a
        className="cursor-pointer font-bold sm:text-2xl xl:text-5xl text-2xl"
        href={href}
      >
        <motion.div
          className="inline-block"
          variants={boxVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {text.split(" ").map((word, index) => {
            return (
              <motion.div
                key={word}
                className="inline-block mr-3"
                style={{
                  marginRight: text.split(" ").length - 1 === index ? 0 : 12,
                }}
                transition={{ duration: 0.3 }}
                variants={listVariant}
              >
                {word}
              </motion.div>
            );
          })}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={lineVariant}
            transition={{ delay: 0.6, duration: 4.2, type: "tween" }}
            className="h-0.5 bg-white"
          />
        </motion.div>
      </a>
    </div>
  );
};

export default CallToActionLink;
