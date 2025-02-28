"use client";

import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const RenderMounted = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : null;
};
