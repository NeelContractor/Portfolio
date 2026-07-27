import type { SVGProps } from "react";

const FastAPI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" rx="20" fill="#009688" />

    <path
      fill="#FFF"
      d="M142.4 32L78.4 128H121.6L113.6 224L177.6 112H134.4L142.4 32Z"
    />
  </svg>
);

export { FastAPI };