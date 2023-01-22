import { AccountBox } from "./components/organims/AccountBox";
import "./app.css";
import styled from "styled-components";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}
