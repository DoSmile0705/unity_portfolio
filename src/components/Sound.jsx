"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
      <div
        className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8
            "
      >
        <p className="font-light">Do you like to play the background music?</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggle}
            className="px-4 py-2 mr-2 border border-solid rounded border-accent/30 hover:shadow-glass-sm"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-solid rounded border-accent/30 hover:shadow-glass-sm"
          >
            No
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("my-modal")
  );
};

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    const consent = localStorage.getItem("musicConsent");
    const consentTime = localStorage.getItem("consentTime");

    const handleInteraction = () => {
      // Your existing logic inside handleFirstUserInteraction
      const musicConsent = localStorage.getItem("musicConsent");
      if (musicConsent === "true" && !isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }

      ["click", "keydown", "touchstart"].forEach((event) =>
        document.removeEventListener(event, handleInteraction)
      );
    };

    if (
      consent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setIsPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleInteraction)
        );
      }
    } else {
      setShowModal(true);
    }

    return () => {
      // Cleanup to remove event listeners when the component unmounts or dependencies change
      ["click", "keydown", "touchstart"].forEach((event) =>
        document.removeEventListener(event, handleInteraction)
      );
    };
  }, []);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
    setShowModal(false);
  };
  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && (
        <Modal onClose={() => setShowModal(false)} toggle={toggle} />
      )}

      <audio ref={audioRef} loop>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg"
        aria-label={"Sound control button"}
        name={"Sound control button"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
