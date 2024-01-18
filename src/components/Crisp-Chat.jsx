"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3a8a3d5f-c0a1-4d3e-a1cc-c38dc9d7cb2a");
  }, []);

  return null;
};
