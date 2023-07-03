import React from 'react';
import { Pages } from './Components/Pages';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <>
      <RootSiblingParent>
        <Pages />
      </RootSiblingParent>
    </>
  );
}
