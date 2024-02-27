import { useContext } from "react";

import { AppContext } from "./AppProvider";
import { ThemeContext } from "./ThemeProvider";
import { AppUIContext } from "./AppUIProvider";

const useAppContext = () => useContext(AppContext);
const useAppUIContext = () => useContext(AppUIContext);
const useThemeContext = () => useContext(ThemeContext);

export { useThemeContext, useAppContext, useAppUIContext };
