import Image from "next/image";
import * as React from "react";

interface LiraTokenProps {
  width?: number;
  height?: number;
}

function LiraToken({ width = 24, height = 24 }: LiraTokenProps) {
  return (
    <Image src="/lira.png" alt="Lira Token" width={width} height={height} />
  );
}

export default LiraToken;
