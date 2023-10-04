import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter(0, true); // Pass the addition prop as 'true'
  return <Card>{counter}</Card>; // Remove the 'value' prop as it seems unnecessary
};

export default ForwardCounter;
