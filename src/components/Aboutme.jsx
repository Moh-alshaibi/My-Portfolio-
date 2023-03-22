import React, { useState, useEffect, useRef } from "react";

const Aboutme = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const redDivRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  function handleMouseDown(event) {
    setIsDragging(true);
    const redDivRect = redDivRef.current.getBoundingClientRect();
    const cursorOffsetY = event.clientY - redDivRect.top + window.pageYOffset;
    setDragOffset({
      x: event.clientX - redDivRect.left,
      y: cursorOffsetY,
    });
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseMove(event) {
    if (isDragging) {
      setPosition({
        y: event.clientY - dragOffset.y,
        x: event.clientX - dragOffset.x,
      });
    }
  }

  return (
    <div
      className="border border-black border-dotted relative w-full h-full"
      onMouseDown={handleMouseDown}
    >
      <div
        ref={redDivRef}
        className="border border-neutral-900 mt-14 border-dotted"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          cursor: isDragging ? "grabbing" : "grab",
          zIndex: isDragging ? 1 : 0,
          padding: "20px",
        }}
      >
        <img className="w-16 h-16" src="./src/assets/img/blackfolder.png" alt="" />
      </div>
    </div>
  );
};

export default Aboutme;
