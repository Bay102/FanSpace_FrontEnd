import 'react-native-url-polyfill/auto';
import React from 'react';
import { logger } from "react-native-logs";
import { Pages } from './Components/Pages';
import { RootSiblingParent } from 'react-native-root-siblings';

export const log = logger.createLogger({
  transportOptions: {
    colors: {
      info: "blue",
      warn: "yellowBright",
      error: "redBright",
      debug: "white",
    },
  },
});

export default function App() {
  //* Root Sibling for react toast

  return (
    <>
      <RootSiblingParent>
        <Pages />
      </RootSiblingParent>
    </>
  );
}
