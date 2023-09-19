import React from "react";
import ReactDOM from "react-dom";
import CodeMirrorWrapper from "./CodeMirrorWrapper";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import exportAsImage from "./exportAsImage.js";

import MeassureWrap from "./components/MeassureWrap.js";
import "./components/MeassureWrap.css";

import { CharacterMap } from "react-character-map";
import customChars from "./chars.json";

import encodeInvisible from "./convert";
import levels from "./levels.js";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/css/css";

import "./fonts.css";
import "./styles.css";
import SpacesList from "./spaces";

// const API_BASE = "https://us-central1-cssbattle-b567c.cloudfunctions.net/preview"; // chrome 106
const API_BASE =
  "https://europe-west3-cssbattle-331218.cloudfunctions.net/chrome116preview"; // chrome 116

const CSSBATTLE_BASE = "https://cssbattle.dev";
const TARGET_WIDTH = 400;
const TARGET_HEIGHT = 300;
const BLEND_MODES = ["normal", "difference"];

const blendModeOptions = BLEND_MODES.map((mode) => {
  return (
    <option key={mode} value={mode}>
      {mode}
    </option>
  );
});

const debounce = (fn, t = 750) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, t);
  };
};

function decodeEntity(inputStr) {
  var textarea = document.createElement("textarea");
  textarea.innerHTML = inputStr;
  return textarea.value;
}

class App extends React.PureComponent {
  previewRef = React.createRef();

  constructor() {
    super();
    this.state = {
      code: "",
      charcount: 0,
      debouncedCode: "",
      loading: false,
      blendMode: "normal",
      activeTarget: 0, // targetIndex
      activeTargetNr: 1, // activeTarget+1
      previewTarget: undefined,
      previewOffset: TARGET_WIDTH + 1,
      targets: []
    };
  }

  componentDidMount() {
    var targetMap = [];
    levels.forEach((x, i) => {
      targetMap[i] = `${CSSBATTLE_BASE}/targets/${x.id}.png`;
    });
    this.setState({ targets: targetMap });
  }

  componentDidUpdate(prevProps, prevState) {
    const { code: prevCode, debouncedCode: prevDebounced } = prevState;
    const { code, debouncedCode } = this.state;

    if (debouncedCode !== prevDebounced) {
      this.setState({ loading: true });
    }

    if (code !== prevCode) {
      this.updateCode();
    }
  }

  updateCode = debounce(() => {
    const { code } = this.state;
    var decodedCode = decodeEntity(code);
    this.setState({ debouncedCode: code, charcount: decodedCode.length });
  });

  takePreviewScreenshot = async () => {
    const element = this.previewRef.current;
    exportAsImage(element, "preview");
  };

  handleCodeMirrorChange = (value, x) => {
    this.setState({ code: value });
  };

  handleTargetChange = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
    var index = event.target.selectedOptions[0].getAttribute("idx");
    this.setState({
      activeTarget: index,
      activeTargetNr: parseInt(index, 10) + 1
    });
  };

  handleBlendModeChange = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  copyColor = (event) => {
    const { value, id } = event.target;
    navigator.clipboard
      .writeText(value.toUpperCase())
      .then(() => {
        // worked
      })
      .catch((msg) => {
        console.log(msg);
      });
  };

  convertUnicode = (event) => {
    const { code } = this.state;
    this.setState({ code: decodeEntity(code) });
  };

  encodeInvisible = (event) => {
    const { code } = this.state;
    this.setState({ code: encodeInvisible(code) });
  };

  imageLoaded = () => {
    this.setState({ loading: false });
  };

  setPreviewOffset = (event) => {
    const { pageX, target } = event;
    const { left } = target.getBoundingClientRect();
    this.setState({ previewOffset: pageX - left });
  };

  clearPreviewOffset = () => {
    const { blendMode } = this.state;
    if (blendMode === "normal")
      this.setState({ previewOffset: TARGET_WIDTH + 1 });
    else this.setState({ previewOffset: 0 });
  };

  render() {
    const {
      code,
      charcount,
      debouncedCode,
      loading,
      targets,
      activeTarget,
      activeTargetNr,
      previewTarget = targets[0],
      previewOffset,
      blendMode
    } = this.state;

    return (
      <div className="page-wrap">
        <header>
          <a href="https://tc70f3.csb.app/">
            <span className="CSSBATTLE">CSSBATTLE</span> PREVIEWER
          </a>
        </header>
        <main className="main">
          <div className="Editor">
            <div className="column-header">
              <span className="charcount" id="charcount">
                {charcount}
              </span>
              <label htmlFor="charcount"> characters</label>
            </div>
            <CodeMirrorWrapper
              className="code"
              value={code}
              options={{
                theme: "dracula",
                mode: "css",
                lineWrapping: true,
                lineNumbers: true,
                autoCloseBrackets: false
              }}
              onChange={(editor, data, value) => {
                this.setState({ code: value });
              }}
            />
          </div>

          <div className="Preview">
            <div className="column-header">
              <div className="preview-input">
                <label htmlFor="blendMode">Output</label>
                <select
                  value={blendMode}
                  id="blendMode"
                  onChange={this.handleBlendModeChange}
                >
                  {blendModeOptions}
                </select>
              </div>
            </div>
            <div
              className="preview"
              onMouseMove={this.setPreviewOffset}
              onMouseLeave={this.clearPreviewOffset}
              ref={this.previewRef}
            >
              {loading && <div className="preview__loader" />}
              <img
                className="preview__generated-image"
                width={TARGET_WIDTH}
                height={TARGET_HEIGHT}
                src={`${API_BASE}?t=${activeTargetNr}&q=${encodeURIComponent(
                  debouncedCode
                )}`}
                onLoad={this.imageLoaded}
                alt="Preview of your code"
              />
              <div
                className="preview__target-image-wrap"
                style={{
                  transform: `translateX(${previewOffset}px)`,
                  mixBlendMode: blendMode
                }}
              >
                <img
                  className="preview__target-image"
                  height={TARGET_HEIGHT}
                  width={TARGET_WIDTH}
                  style={{
                    transform: `translateX(${-previewOffset}px)`
                  }}
                  src={previewTarget}
                  alt="CSSBattle target"
                />
              </div>
            </div>
            {/* Currently wrong leaderboard is shown on cssbattle.dev */}
            <a
              className="green-btn"
              target="_blank"
              rel="noreferrer"
              href={`${CSSBATTLE_BASE}/leaderboard/target/${activeTargetNr}`}
            >
              Leaderboard
            </a>
            {/*
            <button
              className="green-btn"
              onClick={() => this.takePreviewScreenshot()}
            >
              Copy image to clipboard
            </button>
            */}
          </div>

          <div className="Target">
            <div className="column-header">
              <div className="preview-input">
                <label htmlFor="previewTarget">Target</label>
                <select
                  value={previewTarget}
                  id="previewTarget"
                  onChange={this.handleTargetChange}
                >
                  {levels.map((target, index) => {
                    return (
                      <option
                        key={"target_" + target.id}
                        value={targets[index]}
                        idx={index}
                      >
                        #{target.id} {target.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div id="targetImg" className="target-imageWrap">
              <MeassureWrap
                onMouseDown={(x, y, ctrl) => {
                  console.log(x + " / " + y + " (" + ctrl + ")");
                }}
              >
                <img
                  height={TARGET_HEIGHT}
                  width={TARGET_WIDTH}
                  className="target-image"
                  src={previewTarget}
                  alt="Target"
                />
              </MeassureWrap>
            </div>
            <a
              className="green-btn"
              target="_blank"
              rel="noreferrer"
              href={`${CSSBATTLE_BASE}/play/${activeTargetNr}`}
            >
              Play
            </a>
          </div>

          <div className="Filler"></div>

          <div className="Colors">
            <label htmlFor="colors-list">Colors</label>
            <ul className="colors-list">
              {levels[activeTarget].colors.map((value, index) => {
                return (
                  <li key={"col_" + index}>
                    <button
                      style={{ "--color": value }}
                      onClick={this.copyColor}
                      className="colors-list__color"
                      type="button"
                      value={value}
                    >
                      {value}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="Buttons">
            <button className="green-btn" onClick={this.convertUnicode}>
              Decode Entity
            </button>
            <button className="green-btn" onClick={this.encodeInvisible}>
              Encode Invisible
            </button>
          </div>

          <div className="Unicode">
            <div className="column-header">Unicode</div>
            <CharacterMap
              autofocus={false}
              className="charmap"
              characterData={customChars}
              onSelect={(char, el) => {
                navigator.clipboard.writeText(char.char);
              }}
            />
          </div>

          <div className="Spaces">
            <div className="column-header">Spaces</div>
            <SpacesList />
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
