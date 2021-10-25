import React, { useState } from "react";
import { languages } from "./LAnBox";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import UseCopyToClipboard from "@App/Hooks/UseCopyToClipboard";
import RiseLoader from "react-spinners/RiseLoader";
import { css } from "@emotion/react";
import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function Codeeditor(props) {
  languages.map(
    (lang) =>
      lang === props.lan &&
      require(`ace-builds/src-noconflict/mode-${lang}`) &&
      require(`ace-builds/src-noconflict/snippets/${lang}`)
  );
  const [value, setValue] = useState(props.value);
  const [btn, setBtn] = useState(0);
  const [data, setData] = useState("");
  const [info, setInfo] = useState("");
  const [errs, setErrs] = useState("");
  const [load, setLoad] = useState(false);
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  const handle = useFullScreenHandle();
  const handleSend = () => {
    setData({
      submissions: {
        code_id: props.id,
        source: value,
        input: "",
      },
    });
    setLoad(true);
  };
  const copyHandle = () => {
    btn === 0
      ? handleCopy(value)
      : btn === 1
      ? handleCopy(info)
      : handleCopy(errs);
  };
  function onChange(newValue) {
    setValue(newValue);
  }
  const override = css`
    display: block;
    z-index: 100;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
  const override1 = css`
    display: block;
    z-index: 100;
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
  return (
    <FullScreen handle={handle} enabled={handle}>
      <div key={props.id}>
        <div
          className={
            handle.active
              ? "codeeditorBox__BtnBox flex-row-reverse"
              : "codeeditorBox__BtnBox1 flex-row-reverse"
          }
        >
          <div className="flex flex-row-reverse">
            <button
              className={
                btn === 0
                  ? "codeeditorBox__activbtn"
                  : "codeeditorBox__disactivbtn"
              }
              value={0}
              onClick={() => setBtn(0)}
            >{`code.${props.lan}`}</button>
            <button
              className={
                btn === 1
                  ? "codeeditorBox__activbtn"
                  : "codeeditorBox__disactivbtn"
              }
              value={1}
              onClick={() => setBtn(1)}
            >
              Result
            </button>
            <button
              className={
                btn === 2
                  ? "codeeditorBox__activbtn"
                  : "codeeditorBox__disactivbtn"
              }
              value={2}
              onClick={() => setBtn(2)}
            >
              Errors
            </button>
          </div>
          <div className="d-flex flex-row-reverse">
            <button
              className="codeeditorBox__btnDon codeeditorBox__codeeditor-btncopy1"
              onClick={copyHandle}
            >
              {isCopied ? (
                <div className="d-flex">
                  <i className="fas fa-check"></i>
                  کپی شد
                </div>
              ) : (
                <div className="d-flex">
                  {" "}
                  <i className="far fa-copy"></i>
                  کپی
                </div>
              )}
            </button>
            {handle.active ? (
              <button
                className="codeeditorBox__fulScreen"
                onClick={handle.exit}
              ></button>
            ) : (
              <button
                className="codeeditorBox__fulScreen"
                onClick={handle.enter}
              ></button>
            )}
            <button
              className={
                load
                  ? "codeeditorBox__btnDon codeeditorBox__codeeditor-btndonedis"
                  : "codeeditorBox__btnDon codeeditorBox__codeeditor-btndone"
              }
              onClick={handleSend}
              disabled={load}
            >
              <i className="fas fa-play"></i>
              اجرای کد
            </button>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <AceEditor
            mode={props.lan}
            theme="monokai"
            value={btn === 0 ? value : btn === 1 ? info : errs}
            onChange={onChange}
            width={handle.active ? "100%" : "100%"}
            height={handle.active ? "100vh" : "40vh"}
            highlightActiveLine={false}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
          />

          <RiseLoader color="#0dca78" loading={load} size={20} css={override} />
        </div>
      </div>
    </FullScreen>
  );
}

export default Codeeditor;
