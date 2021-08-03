import React, { useEffect, useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { BiReset } from "react-icons/bi";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Dictaphone.css";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setInputText(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span className="h4">Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="main-div col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-10 offset-1">
      <div className={`circle1 ${listening ? "active" : ""}`}></div>
      <div className={`circle2 ${listening ? "active" : ""}`}></div>
      <textarea
        type="text"
        rows="1"
        className="form-control input-field shadow"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="control-btns">
        <button className="btn" onClick={SpeechRecognition.startListening}>
          <BsFillMicFill size={24} />
        </button>
        {listening ? (
          <React.Fragment>
            <button className="btn" onClick={SpeechRecognition.stopListening}>
              <MdClose size={22} />
            </button>
            <button className="btn" onClick={resetTranscript}>
              <BiReset size={22} />
            </button>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Dictaphone;
