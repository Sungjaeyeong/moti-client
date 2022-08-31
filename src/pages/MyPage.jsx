import React from "react";
import { useAuth } from "../context/AuthContext";
import EditUserForm from "../components/EditUserForm";

const MyPage = () => {
  const { user, editUser } = useAuth();

  return (
    <>
      <h2>마이 페이지</h2>
      <div>
        <EditUserForm user={user} onUpdate={editUser} />
      </div>
    </>
  );
};

export default MyPage;
