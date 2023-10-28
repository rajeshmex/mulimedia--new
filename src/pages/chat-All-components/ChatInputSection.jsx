import React, { useState } from "react";
import { ChevronDown, Mic, Paperclip, SendHorizontal } from "lucide-react";

const SpeechRecognitionWrapper = () => {
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("ENG");

  const initializeSpeechRecognition = async () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognitionAPI =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognitionAPI();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearch(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognition.start();
    } else {
      console.error("Speech recognition not supported in this browser");
    }
  };

  const ChangeLanguage = (data) => {
    if (data === "ENG") {
      setLang("हिंदी");
    } else {
      setLang("ENG");
    }
  };

  const handleMicClick = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        // Microphone access granted; you can start speech recognition.
        initializeSpeechRecognition();
      })
      .catch((error) => {
        // Handle permission denied or other errors.
        console.error("Microphone access error:", error);
        alert("Microphone access error:" + error);
      });
  };

  return (
    <>
      <div className="w-full h-[90px] z-[10] border-[1px] rounded-md px-2 chatInput">
        <div className="flex w-full h-full chatInput relative">
          <textarea
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Enter your message"
            className="w-full outline-none resize-none scroll chatInput"
          />

          <div className="absolute right-3 bottom-3 flex items-center space-x-2">
            <span
              onClick={() => ChangeLanguage(lang)}
              className="cursor-pointer bg-yellow-100 w-[50px] h-[50px] rounded-full flex items-center justify-center flex-col"
            >
              <ChevronDown />
              <span className="!mt-[-7px]">{lang}</span>
            </span>
            <div onClick={handleMicClick} className="flex cursor-pointer">
              <Mic strokeWidth={0.75} />
              <Paperclip strokeWidth={0.75} />
            </div>

            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-green-200 pt-[2px]">
              <SendHorizontal strokeWidth={0.75} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeechRecognitionWrapper;
