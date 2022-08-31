import React, { useState } from "react";

const EditUserForm = ({ user, onUpdate }) => {
  const [name, setName] = useState(user?.name);
  const [introduce, setIntroduce] = useState(user?.introduce);

  const onSubmit = async event => {
    event.preventDefault();
    onUpdate(name, introduce, user);
  };

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "name":
        return setName(value);
      case "introduce":
        return setIntroduce(value);
      default:
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="name" type="text" placeholder="변경할 이름" value={name} onChange={onChange} required />
      <input name="introduce" type="text" placeholder="변경할 소개" value={introduce} onChange={onChange} required />
      <div className="edit-tweet-form-action">
        <button type="submit">변경하기</button>
      </div>
    </form>
  );
};

export default EditUserForm;
