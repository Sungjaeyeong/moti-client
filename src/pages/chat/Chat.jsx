import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import * as Routes from "../../routes";

const Chat = ({ chatService }) => {
  const history = useHistory();
  const location = useLocation();
  const { user } = useAuth();
  const chatId = location.state.chatId;

  const [chatData, setChatData] = useState();
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchChatData = () => {
    chatService
      .getChatData(chatId)
      .then(res => {
        setChatData(res.data.responseChatDto);
        setText(res.data.responseChatDto.chatName);
        setMessages(res.data.messages);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchChatData();
  }, []);

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    console.log(name);
    switch (name) {
      case "chatName":
        return setText(value);
      case "message":
        return setMessage(value);
      default:
    }
  };

  const changeChatName = () => {
    chatService //
      .changeChatName(chatId, text)
      .then(() => alert("변경되었습니다."))
      .catch(() => alert("다시 시도해 주세요."));
  };

  const onSubmit = event => {
    event.preventDefault();
    chatService
      .sendMessage(message, user.id, chatId)
      .then(() => {
        fetchChatData();
      })
      .catch(err => {
        console.error(err);
        alert("전송에 실패하였습니다.");
      });
  };

  const deleteMessage = messageId => {
    chatService
      .deleteMessage(messageId, user.id)
      .then(() => {
        fetchChatData();
      })
      .catch(err => {
        console.error(err);
        alert("삭제가 실패하였습니다.");
      });
  };

  return (
    <>
      <h2>채팅방</h2>
      <input
        name="chatName"
        type="text"
        placeholder="채팅방 이름 변경"
        value={text}
        onChange={onChange}
      />
      <button onClick={changeChatName}>채팅방 이름 변경</button>
      <div>
        {messages.map(el => {
          return (
            <div key={el.messageId}>
              {el.message}
              {el.userId === user.id && (
                <button onClick={() => deleteMessage(el.messageId)}>
                  삭제
                </button>
              )}
            </div>
          );
        })}
      </div>
      <form onSubmit={onSubmit}>
        <input
          name="message"
          type="text"
          placeholder="메세지 입력"
          value={message}
          onChange={onChange}
          required
        />
        <br />
        <button type="submit">전송</button>
      </form>
    </>
  );
};

export default Chat;
