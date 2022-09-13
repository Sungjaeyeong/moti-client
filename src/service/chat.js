import axios from "axios";

const baseURL = process.env.REACT_APP_MOTI_SERVER_BASE_URL;

export default class ChatService {
  // 채팅 생성
  async createChat(userIds) {
    return await axios.post(
      `${baseURL}/chats`,
      {
        userIds,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 채팅 리스트 가져오기
  async getUserChats(userId) {
    return await axios.get(`${baseURL}/chats?userId=${userId}`, {
      withCredentials: true,
    });
  }

  // 채팅 데이터 가져오기
  async getChatData(chatId) {
    return await axios.get(`${baseURL}/chats/${chatId}`, {
      withCredentials: true,
    });
  }

  // 채팅방 이름 변경
  async changeChatName(chatId, name) {
    return await axios.post(
      `${baseURL}/chats/update/name`,
      {
        chatId,
        name,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 채팅방 나가기
  async exitChat(chatId, userId) {
    return await axios.post(
      `${baseURL}/chats/delete/user`,
      {
        chatId,
        userId,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 메세지 보내기
  async sendMessage(message, userId, chatId) {
    return await axios.post(
      `${baseURL}/messages`,
      {
        message,
        chatId,
        userId,
      },
      {
        withCredentials: true,
      }
    );
  }

  // 메세지 삭제
  async deleteMessage(messageId, userId) {
    return await axios.delete(`${baseURL}/messages/${messageId}`, {
      data: {
        userId,
      },
      withCredentials: true,
    });
  }
}
