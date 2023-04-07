import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [position, setPosition] = useState({ x: 1500, y: 150 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const yellowDivRef = useRef(null);

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
    const yellowDivRect = yellowDivRef.current.getBoundingClientRect();
    const cursorOffsetY = event.clientY - yellowDivRect.top + window.pageYOffset;
    setDragOffset({
      x: event.clientX - yellowDivRect.left,
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
        ref={yellowDivRef}
        className="border border-neutral-900 mt-14"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          cursor: isDragging ? "Pointer" : "point",
          zIndex: isDragging ? 1 : 0,
          padding: "15px",
        }}
      >
        <img className="w-14 h-14" src="./src/assets/img/yellowfolder.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;
