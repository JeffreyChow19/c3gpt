import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function ChatHistoryBar({
  currentHistory,
  historyData,
  handleNewHistory,
  handleSwitchHistory,
  handleRemoveHistory,
  handleAlgorithmChange,
}) {
  const parseDate = (rawDate) => {
    const date = new Date(rawDate);
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(
      date.getSeconds()
    ).padStart(2, "0")}`;
    return formattedDate;
  };

  return (
    <div className="flex flex-col h-screen w-1/5 bg-gray-800 p-3">
      <div className="p-2 flex-grow-0">
        <button
          className="w-full bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded border border-white"
          onClick={handleNewHistory}
        >
          + New Chat
        </button>
      </div>
      <div className="p-2 flex-grow max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrolling-touch">
        {historyData &&
          Array.isArray(historyData) &&
          historyData.map((history, i) => {
            return (
              <div key={i} className="relative">
                <button
                  className={`w-full bg-gray-500 hover:bg-gray-400 hover:text-gray-600 text-gray-100 font-bold py-2 px-4 rounded mb-2 ${
                    currentHistory === history._id
                      ? "border-white border-2"
                      : ""
                  }`}
                  onClick={() => handleSwitchHistory(history._id)}
                >
                  <div className="p-2 flex-grow">
                    {parseDate(history.created_time)}
                  </div>
                </button>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="absolute top-5 right-3 cursor-pointer text-gray-500 hover:text-red-500"
                  onClick={() => handleRemoveHistory(history._id)}
                />
              </div>
            );
          })}
      </div>

      <div className="p-4 flex-grow-0 flex flex-col text-white">
        <p style={{ fontFamily: "Arial", fontWeight: "bold" }}>
          Choose Algorithm:{" "}
        </p>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio h-30 w-5 text-blue-600"
            name="algorithm"
            value="KMP"
            onChange={handleAlgorithmChange}
            defaultChecked
          />
          <span className="ml-2 text-white" style={{ fontFamily: "Arial" }}>
            KMP
          </span>
        </label>
        <label className="inline-flex items-center mt-2">
          <input
            type="radio"
            className="form-radio h-30 w-5 text-blue-600"
            name="algorithm"
            value="BM"
            onChange={handleAlgorithmChange}
          />
          <span className="ml-2 text-white" style={{ fontFamily: "Arial" }}>
            BM
          </span>
        </label>
      </div>
    </div>
  );
}
