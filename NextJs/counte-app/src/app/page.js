"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDeccrement = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div class="p-11">
      <h1 class="text-2xl font-bold text-blue-600 mb-6">
        Simple Tap Counter
      </h1>
      <div class="text-6xl font-bold text-black mb-6">{counter}</div>
      <Button title={"+"} onClick={handleIncrement}/>
      <Button title={"-"} onClick={handleDeccrement}/>
      <Button title={"Reset"} onClick={handleReset}/>
    </div>
  );
}
