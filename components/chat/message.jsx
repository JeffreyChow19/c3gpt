import { useEffect, useRef } from 'react';

export const Messages = ({ chatsData }) => {
  const colRef = useRef(null);

  useEffect(() => {
    colRef.current.scrollTop =
      colRef.current.scrollHeight;
  }, [chatsData]);

  return (
    <div ref={colRef}>
      {chatsData && chatsData.map((chat, i) => (
        <div key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{chat.sender}</span>
          </div>
          <p>{chat.message}</p>
          <br />
        </div>
      ))}
    </div>
  );
};
