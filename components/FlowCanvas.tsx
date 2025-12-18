import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SelectedMenu } from '../types';

interface FlowCanvasProps {
  selectedMenu: SelectedMenu;
}

const FlowCanvas: React.FC<FlowCanvasProps> = ({ selectedMenu }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const svg = d3.select(svgRef.current);

    // Initial placeholder visualization
    // We will draw a simple "Flow Starting" diagram to demonstrate readiness for actual data
    const centerX = width / 2;
    const centerY = height / 2;

    // Background decoration
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#ffffff")
      .attr("rx", 12);

    // Placeholder Node
    const container = svg.append("g")
      .attr("transform", `translate(${centerX - 150}, ${centerY - 100})`);

    container.append("rect")
      .attr("width", 300)
      .attr("height", 200)
      .attr("fill", "#f1f5f9")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-dasharray", "4,4")
      .attr("rx", 16);

    container.append("text")
      .attr("x", 150)
      .attr("y", 90)
      .attr("text-anchor", "middle")
      .attr("fill", "#64748b")
      .attr("class", "text-sm font-medium")
      .text(`${selectedMenu.siteName} - ${selectedMenu.subMenu}`);

    container.append("text")
      .attr("x", 150)
      .attr("y", 120)
      .attr("text-anchor", "middle")
      .attr("fill", "#94a3b8")
      .attr("class", "text-xs")
      .text("데이터 흐름도 내용을 준비 중입니다.");

    // Simple flow animation circle
    const orbit = svg.append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", 140)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 1)
      .attr("opacity", 0.1);

  }, [selectedMenu]);

  return (
    <div className="flex-1 bg-white rounded-xl shadow-inner border border-slate-200 overflow-hidden relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="p-2 bg-slate-50 border border-slate-200 rounded-md text-slate-400 hover:text-blue-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="p-2 bg-slate-50 border border-slate-200 rounded-md text-slate-400 hover:text-blue-500 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default FlowCanvas;
