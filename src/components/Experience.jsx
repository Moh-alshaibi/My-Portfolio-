import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [position, setPosition] = useState({ x: 250, y: 650 });
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
      onMouseDown={handleMouseDown}
    >
      <div
        ref={redDivRef}
        className="border border-neutral-900 mt-14"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          cursor: isDragging ? "Pointer" : "point",
          zIndex: isDragging,
          padding: "15px",
          }}
        >
          <img className="w-14 h-14" src="./src/assets/img/brownfolder.png" alt="" />
        </div>
      </div>
    );
  };

export default Experience;