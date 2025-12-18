import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const FlowCanvas = ({ selectedMenu }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Draw grid background
    const gridSize = 40;
    const gridGroup = svg.append("g").attr("class", "grid");
    
    for (let x = 0; x <= width; x += gridSize) {
      gridGroup.append("line")
        .attr("x1", x).attr("y1", 0)
        .attr("x2", x).attr("y2", height)
        .attr("stroke", "#f1f5f9").attr("stroke-width", 1);
    }
    for (let y = 0; y <= height; y += gridSize) {
      gridGroup.append("line")
        .attr("x1", 0).attr("y1", y)
        .attr("x2", width).attr("y2", y)
        .attr("stroke", "#f1f5f9").attr("stroke-width", 1);
    }

    // Placeholder visualization
    const content = svg.append("g")
      .attr("transform", `translate(${width / 2 - 150}, ${height / 2 - 100})`);

    content.append("rect")
      .attr("width", 300).attr("height", 200)
      .attr("rx", 20).attr("fill", "white")
      .attr("stroke", "#e2e8f0").attr("stroke-width", 2)
      .attr("class", "shadow-sm");

    content.append("text")
      .attr("x", 150).attr("y", 90)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px").attr("font-weight", "bold")
      .attr("fill", "#1e293b")
      .text(`${selectedMenu.siteName} ${selectedMenu.subMenu}`);

    content.append("text")
      .attr("x", 150).attr("y", 120)
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .attr("fill", "#94a3b8")
      .text("흐름도 레이아웃 구성 대기 중...");

    // Floating particles effect
    const particles = svg.append("g");
    for(let i=0; i<5; i++) {
        particles.append("circle")
            .attr("r", 3)
            .attr("fill", "#3b82f6")
            .attr("opacity", 0.3)
            .attr("cx", Math.random() * width)
            .attr("cy", Math.random() * height);
    }

  }, [selectedMenu]);

  return React.createElement(
    'div',
    { className: 'flex-1 bg-white rounded-2xl border border-slate-200 shadow-inner overflow-hidden' },
    React.createElement('svg', { ref: svgRef, className: 'w-full h-full cursor-grab' })
  );
};

export default FlowCanvas;
