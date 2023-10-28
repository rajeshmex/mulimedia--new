import React from "react";
import ChatUserDetails from "./ChatUSerDetails";
import Allchats from "./AllChat";
import SpeechRecognitionWrapper from "./ChatInputSection";

const ChatMain = () => {
  return (
    <>
          <ChatUserDetails />
          <Allchats />
          <SpeechRecognitionWrapper />
    </>
  );
};

export default ChatMain;
