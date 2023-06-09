import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const   Lightfolder = () => {
  const [position, setPosition] = useState({ x: 210, y: 455 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 1500, y: 1500 });
  const redDivRef = useRef(null);
  const navigate = useNavigate();

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

  function handleMouseDown(event) {
    setIsDragging(true);
    const redDivRect = redDivRef.current.getBoundingClientRect();
    const cursorOffsetX = event.clientX - redDivRect.left;
    const cursorOffsetY = event.clientY - redDivRect.top;
    setDragOffset({ x: cursorOffsetX, y: cursorOffsetY });
  }

  function handleImageClick() {
    navigate("/projects");
  }

  return (
    <div onMouseDown={handleMouseDown}>
      <div
        ref={redDivRef}
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
          src="./src/assets/img/Lightfolder.png"
          alt=""
          onClick={handleImageClick}
        />
          <div className="text-center mt-2 text-xs">
          <p className="inline-block mx-auto">
            <span className="block">Projects</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightfolder;
