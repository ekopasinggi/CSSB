import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import styled from "styled-components";

const PureEditor = ({ value, options, onChange }) => (
  <CodeMirror value={value} options={options} onBeforeChange={onChange} />
);

const Wrapper = styled.div`
  width: min(calc(100vw - 805px), 805px);
  min-width: 400px;
  .CodeMirror {
    height: calc(100vh - 93px);
    font-size: var(--codeFontSize);
  }
`;

const CodeMirrorWrapper = (props) => (
  <Wrapper>
    <PureEditor {...props} />
  </Wrapper>
);

export default CodeMirrorWrapper;
