import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Yellowfolder = () => {
  const [position, setPosition] = useState({ x: 220, y: 560 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const redDivRef = useRef(null);
  const navigate = useNavigate();

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
    const cursorOffsetY =
      event.clientY - yellowDivRect.top + window.pageYOffset;
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

  function handleImageClick() {
    navigate("/contact");
  }

  return (
    <div onMouseDown={handleMouseDown}>
      <div
        ref={yellowDivRef} 
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          cursor: isDragging ? "Pointer" : "point",
          zIndex: isDragging ? 1 : 0,
          padding: "15px",
        }}
      >
        <img
          className="w-14 h-14 cursor-pointer testings"
          src="./src/assets/img/yellowfolder.png"
          alt=""
          onClick={handleImageClick}
        />
          <div className="text-center mt-2 text-xs">
          <p className="inline-block mx-auto">
            <span className="block">Contact</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yellowfolder;
