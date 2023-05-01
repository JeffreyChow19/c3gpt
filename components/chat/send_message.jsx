import { useState } from 'react';

export const SendMessage = ({ handlePostChat, history_id }) => {
  const [currMessage, setCurrMessage] = useState('');

  const sendMessage = () => {
    if (currMessage !== '') {
      handlePostChat(history_id, currMessage, "user");
      setCurrMessage('');
    }
  };

  return (
    <div>
      <input
        placeholder='Send a message...'
        onChange={(e) => setCurrMessage(e.target.value)}
        value={currMessage}
      />
      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};
