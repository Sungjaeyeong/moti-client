import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as Routes from "../../routes";

const Chats = ({ userService, chatService }) => {
  const history = useHistory();
  const { user } = useAuth();
  const [chatList, setChatList] = useState([]);

  const goCreateChat = () => {
    history.push(Routes.pathConst.CREATE_CHAT);
  };

  const goChatRoom = chatId => {
    history.push({
      pathname: Routes.pathConst.CHAT,
      state: { chatId },
    });
  };

  const fetchChats = () => {
    chatService
      .getUserChats(user.id)
      .then(res => {
        setChatList(res.data.chats);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const exitChat = chatId => {
    chatService
      .exitChat(chatId, user.id)
      .then(() => {
        fetchChats();
      })
      .catch(err => {
        console.error(err);
        alert("다시 시도해주세요.");
      });
  };

  return (
    <>
      <h2>내 채팅 리스트 페이지</h2>
      <div>
        <button onClick={goCreateChat}>채팅 생성하기</button>
      </div>
      <div>
        {chatList.map(chat => {
          return (
            <div key={chat.chatId}>
              <span>{chat.chatName}</span> / <span>{chat.updatedAt}</span>
              <button onClick={() => goChatRoom(chat.chatId)}>입장</button>
              <button onClick={() => exitChat(chat.chatId)}>채팅방 나가기</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Chats;
