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

function QuizResponsiveCodeeditor(props) {
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
  const [data, setData] = useState("");
  const [isCopied, handleCopy] = UseCopyToClipboard(3000);
  const [load, setLoad] = useState(false);
  const [btn, setBtn] = useState(1);
  const { token } = useAuth();
  const QuizPlayGround = useAxios({
    url: `${API_URL}/CompilerService/v2/quiz/playground/`,
    method: "POST",
    options: {
      data: data,
      headers: {
        Authorization: `JWT ${token}`,
      },
    },
    customHandler: (err, res) => {
      if (res) {
        console.log("QuizPlayGround", res.data);
        // setInfo(res.data);
        res.data.compiler_stdout ? setBtn(1) : setBtn(2);
        setRes(res.data.compiler_stdout);
        res.data.compiler_stderr
          ? setErrs(res.data.compiler_stderr.replace("/n", "<br />"))
          : setErrs(res.data.compiler_stderr);
        setLoad(false);
      }
      if (err) {
        console.log(err.response);
        setLoad(false);
      }
    },
  });
  const QuizSendToServer = useAxios({
    url: `${API_URL}/CompilerService/v3/quiz/send_to_server/`,
    method: "POST",
    options: {
      data: data,
      headers: {
        Authorization: `JWT ${token}`,
      },
    },
    customHandler: (err, res) => {
      if (res) {
        console.log("QuizSendToServer", res.data);
        // setInfo1(res.data);
        setNumber(res.data.compile_result);
        res.data.compiler_stderr ? setBtn(1) : setBtn(2);
        setRes(res.data.compiler_stdout);

        res.data.compiler_stderr
          ? setErrs(res.data.compiler_stderr.replace("/n", "<br />"))
          : setErrs(res.data.compiler_stderr);
        setLoad(false);
      }
      if (err) {
        console.log(err.response);
        setLoad(false);
      }
    },
  });
  const handleSend = () => {
    setData({
      submissions: {
        question_id: props.id,
        input: test,
        source: value,
      },
    });
    setLoad(true);
    QuizPlayGround.reFetch();
  };
  const handleInputSend = () => {
    setData({
      submissions: {
        question_id: props.id,
        source: value,
        // input: test,
      },
    });
    setLoad(true);
    QuizSendToServer.reFetch();
  };

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
  return (
    <div>
      <div className="CodeeditorWithRun">
        {props.lan && (
          <>
            <div className="container" style={{ position: "relative " }}>
              <div className=" flex flex-col" style={{ direction: "ltr" }}>
                <div>
                  <div className="CodeeditorWithRun__codeeditor-btnBox">
                    <p>{`مثال 2.${props.lan}`}</p>
                    <div className="d-flex ">
                      <button className="CodeeditorWithRun__codeeditor-btncopy">
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
                      <button
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
                      </button>
                    </div>
                  </div>
                  <AceEditor
                    mode={props.lan}
                    theme="monokai"
                    value={value}
                    onChange={onChange}
                    width="100%"
                    height="64.1vh"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableLiveAutocompletion: true,
                      enableSnippets: true,
                    }}
                  />
                </div>
                <div>
                  <div className="CodeeditorWithRun__codeeditor-btnBox2">
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
                    {!props.code && (
                      <div className="d-flex quizNumber__part">
                        <p>:نمره از 100 </p>
                        <p
                          className={
                            number < 100.0
                              ? "faildquiz"
                              : number === 100.0
                              ? "goodquiz"
                              : "passquiz"
                          }
                        >
                          {number}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="result-codeeditor">
                    <AceEditor
                      mode={props.lan}
                      theme="monokai"
                      value={btn === 1 ? res : errs}
                      width="100%"
                      height="30vh"
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
                      }}
                    />
                  </div>
                  <div className="CodeeditorWithRun__TestBox">
                    <div className="CodeeditorWithRun__codeeditor-btnBox1">
                      <p>Test</p>
                    </div>{" "}
                    <AceEditor
                      mode={props.lan}
                      theme="monokai"
                      value={test}
                      onChange={onChange1}
                      width="100%"
                      height="30.5vh"
                      name="UNIQUE_ID_OF_DIV"
                      editorProps={{ $blockScrolling: true }}
                      highlightActiveLine={false}
                      showGutter={false}
                      setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: false,
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
  );
}

export default QuizResponsiveCodeeditor;
