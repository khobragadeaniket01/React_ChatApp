import React, { useState, useContext } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MyContext } from "../context/context-application";
import PropTypes from "prop-types";

export const ChatRoom = (props) => {
  const context = useContext(MyContext);
  const { data, person, color } = props;
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const color_list = ["red", "green", "blue", "yellow", "gray"];
  const [formValue, setFormValue] = useState("");
  const date = new Date();

  ChatRoom.propTypes = {
    data: PropTypes.string.isRequired,
    person: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };
  const addMessage = () => {
    const randomname = user_list[Math.floor(Math.random() * user_list.length)];
    const color_profile =
      color_list[Math.floor(Math.random() * color_list.length)];
    context.setColor(color);
    context.setChatHistory(data);
    context.setUser(person);
    person.push(randomname);
    color.push(color_profile);
    data.push(formValue);
    setFormValue("");
  };

  return (
    <>
      <main>
        {context.chatHistory.length === 0 ? (
          <div>No Message Yet</div>
        ) : (
          <>
            {context.user.map((u, i) => {
              return (
                <>
                  <li>
                    <p
                      key={i}
                      className="name-in-short"
                      style={{ backgroundColor: context.color[i] }}
                    >
                      <span>
                        {u.charAt(0).toUpperCase() + u.charAt(1).toUpperCase()}
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {u}&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="time-style">
                        {date.getHours() +
                          ":" +
                          date.getMinutes() +
                          ":" +
                          date.getSeconds()}
                      </span>
                    </p>
                  </li>
                  <li>
                    <p className="text-decor" key={i}>
                      {context.chatHistory[i]}
                    </p>
                  </li>
                </>
              );
            })}
          </>
        )}
      </main>

      <div className="form-input">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type Message"
        />

        <button type="submit" onClick={() => addMessage()}>
          <BsEmojiSmile />
        </button>
      </div>
    </>
  );
};
