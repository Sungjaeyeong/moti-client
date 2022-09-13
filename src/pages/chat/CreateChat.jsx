import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as Routes from "../../routes";

const CreateChat = ({ userService, chatService }) => {
  const history = useHistory();
  const { user } = useAuth();
  const [userList, setUserList] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([user.id]);

  const fetchUserList = () => {
    userService
      .getAllUser()
      .then(res => {
        setUserList(res.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const onChange = event => {
    const userId = +event.target.name;
    if (event.target.checked) {
      setSelectedUsers(prev => [...prev, userId]);
    } else {
      setSelectedUsers(prev => prev.filter(el => el !== userId));
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    chatService
      .createChat(selectedUsers)
      .then(() => {
        alert("생성되었습니다.");
        history.push(Routes.pathConst.CHATS);
      })
      .catch(err => {
        console.log(err);
        alert("다시 시도해주세요");
      });
  };

  return (
    <>
      <h2>채팅 생성 페이지</h2>
      <form onSubmit={onSubmit}>
        <div>
          {userList
            .filter(listUser => listUser.id !== user.id)
            .map(listUser => {
              return (
                <div key={listUser.id}>
                  <input type="checkbox" name={listUser.id} onChange={onChange}></input>
                  이메일: {listUser.email}
                  이름: {listUser.userName}
                  직업: {listUser.job}
                </div>
              );
            })}
        </div>
        <button type="submit">생성하기</button>
      </form>
    </>
  );
};

export default CreateChat;
