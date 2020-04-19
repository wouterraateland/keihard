import React from "react";

const Waves = ({ part = 1, ...props }) => (
  <svg {...props} viewBox={`0 0 ${1152 * part} 196`} preserveAspectRatio="none">
    <g>
      <path d="M 0 16 C 0 16 36 0 92 0 C 148 0 293.5 102 502 106 C 710.5 110 763.5 29.25 926 16 C 1088.5 2.75 1152 53 1152 53 L 1152 196 L 0 196 Z" />
      <path d="M 0 64 C 46 64 88 16 216 16 C 344 16 618 122.5 852 142 C 1086 161.5 1152 94 1152 94 L 1152 196 L 0 196 C 0 196 0 116 0 64 Z" />
      <path d="M 0 106 C 0 106 24 94 126 94 C 228 94 339.5 203.5 576 184 C 812.5 164.5 974 16 1072 16 C 1170 16 1152 32 1152 32 L 1152 196 L 0 196 Z" />
    </g>
  </svg>
);

export default Waves;
