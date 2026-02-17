import { createContext } from "react";

// this is the structure of using the useState hook, a value and a setter function
export const CartContext = createContext([[], function () {}]);
