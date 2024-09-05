import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Modal = ({ children, onClickOutside, className, isOpen }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("not-scrollable");
    } else {
      body.classList.remove("not-scrollable");
    }

    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      body.classList.remove("overflow-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside, isOpen]);

  return (
    isOpen && (
      <section
        style={{ zIndex: 10000 }}
        className={`tracking-wider overflow-auto fixed top-0 left-0 w-full h-full bg-modal`}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          ref={wrapperRef}
          className={className}
        >
          <motion.div variants={item}>{children}</motion.div>
        </motion.div>
      </section>
    )
  );
};

export default Modal;
