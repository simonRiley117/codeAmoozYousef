import React, { useState, useEffect } from "react";
import { languages } from "@Components/Shared/Codeeditor/LAnBox";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import UseCopyToClipboard from "@App/Hooks/UseCopyToClipboard";
import RiseLoader from "react-spinners/RiseLoader";
import { css } from "@emotion/react";
import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import useAxios from "@use-hooks/axios";
import { API_URL } from "../../../constants";
import { useAuth } from "../../../Context/authContext";
import { toast } from "react-toastify";

function ExampleCodeeditorWithRun(props) {
  languages.map(
    (lang) =>
      lang === props.lan &&
      require(`ace-builds/src-noconflict/mode-${lang}`) &&
      require(`ace-builds/src-noconflict/snippets/${lang}`)
  );
  const [value, setValue] = useState(props.value);
  const [test, setTest] = useState("");
  const [number, setNumber] = useState(0);
  const [res, setRes] = useState("");
  const [errs, setErrs] = useState("");
  // const [info, setInfo] = useState();
  // const [info1, setInfo1] = useState("");
  const handle = useFullScreenHandle();
  const [data, setData] = useState("");
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  const [load, setLoad] = useState(false);
  const [btn, setBtn] = useState(1);
  const { token } = useAuth();
  const ExamplePlayGround = useAxios({
    url: `${API_URL}/CompilerService/v2/example/playground/`,
    method: "POST",
    options: {
      data: data,
      headers: {
        Authorization: `JWT ${token}`,
      },
    },
    customHandler: (err, res) => {
      if (res) {
        // setInfo(res.data);
        res.data.compiler_stdout ? setBtn(1) : setBtn(2);
        setRes(res.data.compiler_stdout);
        res.data.compiler_stderr
          ? setErrs(res.data.compiler_stderr.replace("/n", "<br />"))
          : setErrs(res.data.compiler_stderr);
        setLoad(false);
      }
      if (err) {
        setLoad(false);
      }
    },
  });
  // const ExampleSendToServer = useAxios({
  //   url: `${API_URL}/CompilerService/v3/example/send_to_server/`,
  //   method: "POST",
  //   options: {
  //     data: data,
  //     headers: {
  //       Authorization: `JWT ${token}`,
  //     },
  //   },
  //   customHandler: (err, res) => {
  //     if (res) {
  //       // setInfo1(res.data);
  //       setNumber(res.data.compile_result);
  //       res.data.compiler_stderr ? setBtn(1) : setBtn(2);
  //       setRes(res.data.compiler_stdout);

  //       res.data.compiler_stderr
  //         ? setErrs(res.data.compiler_stderr.replace("/n", "<br />"))
  //         : setErrs(res.data.compiler_stderr);
  //       setLoad(false);
  //     }
  //     if (err) {
  //       setLoad(false);
  //     }
  //   },
  // });
  const handleSend = () => {
    if (token) {
      setData({
        submissions: {
          example_id: props.id,
          input: test,
          source: value,
        },
      });
      setLoad(true);
      ExamplePlayGround.reFetch();
    } else {
      toast.error("ابتدا وارد سایت شوید");
    }
  };
  // const handleInputSend = () => {
  //   setData({
  //     submissions: {
  //       example_id: props.id,
  //       source: value,
  //       // input: test,
  //     },
  //   });
  //   setLoad(true);
  //   ExampleSendToServer.reFetch();
  // };

  function onChange(newValue) {
    setValue(newValue);
  }

  function onChange1(newValue) {
    setTest(newValue);
  }

  const override = css`
    display: block;
    z-index: 100;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([value], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${props.name}.${props.lang}`;
    document.body.appendChild(element);
    element.click();
  };
  return (
    <FullScreen handle={handle} enabled={handle}>
      <div
        className={handle.active ? " w-full h-full" : "container"}
        style={{ position: "relative " }}
      >
        <div
          className={
            handle.active
              ? " CodeeditorWithRun w-full h-full"
              : "CodeeditorWithRun w-full"
          }
        >
          {props.lan && (
            <>
              <div
                className={handle.active ? " w-full h-full" : "container"}
                style={{ position: "relative " }}
              >
                <div
                  className={
                    handle.active
                      ? " CodeeditorWithRun__codeeditor  h-full"
                      : "CodeeditorWithRun__codeeditor"
                  }
                >
                  <div>
                    <div
                      className="CodeeditorWithRun__codeeditor-btnBox"
                      style={
                        handle.active ? { padding: "1rem 0" } : { padding: "0" }
                      }
                    >
                      <p>{`${props.name}.${
                        props.lan === "c_cpp" && props.lang === "c"
                          ? "c"
                          : props.lan === "c_cpp" && props.lang === "c_cpp"
                          ? "cpp"
                          : props.lan
                      }`}</p>
                      <div className="d-flex ">
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
                          className="CodeeditorWithRun__codeeditor-btncopy"
                          onClick={handleDownload}
                        >
                          ذخیره کدها
                        </button>
                        <button
                          className="CodeeditorWithRun__codeeditor-btncopy"
                          onClick={() => handleCopy(value)}
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
                        <button
                          className={
                            load
                              ? "CodeeditorWithRun__codeeditor-btndonedis"
                              : "CodeeditorWithRun__codeeditor-btndone"
                          }
                          onClick={handleSend}
                          disabled={load}
                        >
                          <i className="fas fa-play"></i>
                          اجرای کد
                        </button>
                        {/* <button
                        className={
                          load
                            ? "CodeeditorWithRun__codeeditor-btndonedis"
                            : "CodeeditorWithRun__codeeditor-btndone CodeeditorWithRun__codeeditor1-btndone"
                        }
                        onClick={handleInputSend}
                        disabled={load}
                      >
                        <i className="fas fa-play"></i>
                        ارسال پاسخ
                      </button> */}
                      </div>
                    </div>
                    <AceEditor
                      mode={props.lan}
                      theme="monokai"
                      value={value}
                      onChange={onChange}
                      height={handle.active ? "100%" : "64.1vh"}
                      width="100%"
                      name="UNIQUE_ID_OF_DIV"
                      editorProps={{ $blockScrolling: true }}
                      setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        fontSize: "1.5rem",
                      }}
                    />
                  </div>
                  <div
                    style={
                      handle.active ? { height: "100%" } : { height: "64.1vh" }
                    }
                  >
                    <div
                      className="CodeeditorWithRun__codeeditor-btnBox2"
                      style={
                        handle.active
                          ? { padding: "2.2rem 0 0 0" }
                          : { padding: "0.35rem 0 0 0" }
                      }
                    >
                      <div className="d-flex">
                        <button
                          className={
                            btn === 1
                              ? "CodeeditorWithRun__activbtn"
                              : "CodeeditorWithRun__disactivbtn1"
                          }
                          value={1}
                          onClick={() => setBtn(1)}
                        >
                          Result
                        </button>
                        <button
                          className={
                            btn === 2
                              ? "CodeeditorWithRun__activbtn"
                              : "CodeeditorWithRun__disactivbtn1"
                          }
                          value={2}
                          onClick={() => setBtn(2)}
                        >
                          Errors
                        </button>
                      </div>
                    </div>
                    <div
                      className="result-codeeditor"
                      style={{ height: "50%" }}
                    >
                      <AceEditor
                        mode={props.lan}
                        theme="monokai"
                        value={btn === 1 ? res : errs}
                        height={handle.active ? "100%" : "100%"}
                        width="100%"
                        name="UNIQUE_ID_OF_DIV"
                        readOnly
                        editorProps={{ $blockScrolling: true }}
                        highlightActiveLine={false}
                        showGutter={false}
                        setOptions={{
                          enableBasicAutocompletion: true,
                          enableLiveAutocompletion: true,
                          enableSnippets: true,
                          showLineNumbers: false,
                          fontSize: "1.5rem",
                        }}
                      />
                    </div>
                    <div
                      className="CodeeditorWithRun__TestBox"
                      style={{ height: "50%" }}
                    >
                      <div className="CodeeditorWithRun__codeeditor-btnBox1">
                        <p>Test</p>
                      </div>{" "}
                      <AceEditor
                        mode={props.lan}
                        theme="monokai"
                        value={test}
                        onChange={onChange1}
                        readOnly={load}
                        width="100%"
                        height={handle.active ? "100%" : "100%"}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        highlightActiveLine={false}
                        showGutter={false}
                        setOptions={{
                          enableBasicAutocompletion: true,
                          enableLiveAutocompletion: true,
                          enableSnippets: true,
                          showLineNumbers: false,
                          fontSize: "1.5rem",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <RiseLoader
                  color="#0dca78"
                  loading={load}
                  size={30}
                  css={override}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </FullScreen>
  );
}

export default ExampleCodeeditorWithRun;
