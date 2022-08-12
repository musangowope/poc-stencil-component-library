// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { MyComponent } from "@poc-stencil-component-library/core-components-react";

export function App() {
  return (
    <>
      <MyComponent first="React" last="app" />
    </>
  );
}

export default App;
