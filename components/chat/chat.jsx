import { Messages } from "./message";
import { SendMessage } from "./send_message";

export const Chat = ({ chatsData, handlePostChat, history_id }) => {
  return (
    <div class="container h-screen w-11/12 ">
        <Messages chatsData={chatsData}/>
        {/* <SendMessage handlePostChat={handlePostChat} history_id={history_id}/> */}
    </div>
    // <div className="flex flex-col h-screen w-1/5 bg-gray-700">
    //   <div>

    //   </div>
    // </div>
  );
};
