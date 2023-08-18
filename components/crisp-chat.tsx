"use client";

import { useEffect } from "react";

import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a1f3b5d6-b2c1-4dc7-904b-f1081cda3f82");
  }, []);
  return null;
};
