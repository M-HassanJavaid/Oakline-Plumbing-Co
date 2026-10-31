/**
 * CoverageMap renders the stylized Charlotte coverage SVG diagram.
 * Server Component with descriptive text and accessible SVG elements.
 */

import React from 'react';

export function CoverageMap() {
  const horizontalGridLines = Array.from({ length: 9 }, (_, i) => i * 36 + 6);
  const verticalGridLines = Array.from({ length: 12 }, (_, i) => i * 36 + 2);

  return (
    <figure className="bg-white rounded-panel border border-[#D6E5E2] p-5 md:p-7 shadow-card">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-auto"
        role="img"
        aria-labelledby="mapTitle mapDesc"
      >
        <title id="mapTitle">Stylized coverage diagram</title>
        <desc id="mapDesc">
          A simplified diagram showing Charlotte at the center as the demonstration focus,
          with an unlabeled dashed ring representing coverage that would be confirmed for a real business.
        </desc>
        <rect width="400" height="300" rx="16" fill="#F6F8F7" />
        <g stroke="#DCEFEB" strokeWidth="1">
          {horizontalGridLines.map((y, i) => (
            <path key={`h-${i}`} d={`M0 ${y}H400`} />
          ))}
          {verticalGridLines.map((x, i) => (
            <path key={`v-${i}`} d={`M${x} 0V300`} />
          ))}
        </g>
        <path
          d="M-10 210 C 80 190, 120 240, 200 205 S 330 150, 410 175"
          fill="none"
          stroke="#C5E4DE"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M150 -10 C 170 70, 140 120, 190 160 S 250 260, 230 310"
          fill="none"
          stroke="#E1ECEA"
          strokeWidth="6"
        />
        <circle
          cx="200"
          cy="150"
          r="118"
          fill="none"
          stroke="#9DBFBB"
          strokeWidth="2"
          strokeDasharray="6 7"
        />
        <circle
          cx="200"
          cy="150"
          r="62"
          fill="#DCEFEB"
          stroke="#153B4A"
          strokeWidth="2"
        />
        <circle
          cx="200"
          cy="150"
          r="9"
          fill="#E8A35D"
          stroke="#153B4A"
          strokeWidth="2.5"
        />
        <text
          x="200"
          y="128"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontWeight="800"
          fontSize="17"
          fill="#153B4A"
        >
          Charlotte
        </text>
        <text
          x="200"
          y="182"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill="#4A5C63"
        >
          Demonstration focus
        </text>
        <text
          x="200"
          y="285"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="11"
          fill="#4A5C63"
        >
          Dashed ring: coverage confirmed per address
        </text>
      </svg>
      <figcaption className="mt-4 text-sm text-charcoal-70">
        Diagram only. A live site would show verified service boundaries with a matching text list.
      </figcaption>
    </figure>
  );
}
