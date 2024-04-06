"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("Superman");

  return <h1>ClientComponentTwo</h1>;
};
