import React, { useRef, useState, useEffect } from "react";
import "../style/knowledgeChart.css";

function KnowledgeChart({ name, progress }) {
  const barRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "start" }}>{name}</h3>
      <div className="knowledgeBar" ref={barRef}>
        <div
          className="knowledgeProgress"
          style={{ width: visible ? progress + "%" : "0%" }}
        ></div>
      </div>
    </>
  );
}

export default KnowledgeChart;
