import { Messages } from "./message";
import { SendMessage } from "./send_message";

export const Chat = ({ chatsData, handlePostChat, history_id }) => {
  return (
    <div>
      <div>
        <Messages chatsData={chatsData}/>
        <SendMessage handlePostChat={handlePostChat} history_id={history_id}/>
      </div>
    </div>
  );
};
