import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function ChatHistoryBar() {
    // const {histories} = props;
    const [panelCount, setPanelCount] = useState(0);

    const handleNewChatClick = () => {
        setPanelCount(panelCount + 1);
    }

    const renderPanels = () => {
        const panels = [];
        for (let i = 0; i < panelCount; i++) {
            panels.push(
                <div key={i} className="relative">
                <button
                    className="w-full bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mb-2"
                    onClick={() => console.log(`Clicked panel ${i + 1}`)}
                >
                    <div className="p-2 flex-grow">{`Chat Panel ${i + 1}`}</div>
                </button>
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="absolute top-5 right-2 cursor-pointer text-gray-500 hover:text-red-500"
                    onClick={() => setPanelCount(panelCount - 1)}
                />
                </div>
            );
        }
        return panels;
    };

    return (
        <div className="flex flex-col h-screen w-1/5 bg-gray-500">
            <div className="p-2 flex-grow-0">
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNewChatClick}>
                    + New Chat
                </button>
            </div>

            <div className="p-2 flex-grow max-h-screen overflow-y-auto">
                {/* {histories && histories.map((history, i) => {
                    return (
                    <button key={i} className="w-full bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-2" onClick={() => console.log(`Clicked panel ${i + 1}`)}>
                    <div className="p-2 flex-grow">{history.created_time}</div>
                    </button>)
                })} */}
                {renderPanels()}
            </div>

            <div className="p-4 flex-grow-0 flex flex-col ">
                <p style={{ fontFamily: 'Georgia' }}>Choose Algorithm: </p>
                <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-30 w-5 text-blue-600" name="algorithm" value="KMP" />
                    <span className="ml-2 text-black" style={{ fontFamily: 'Georgia' }}>KMP</span>
                </label>
                <label className="inline-flex items-center mt-2">
                    <input type="radio" className="form-radio h-30 w-5 text-blue-600" name="algorithm" value="BM" />
                    <span className="ml-2 text-black" style={{ fontFamily: 'Georgia'}}>BM</span>
                </label>
            </div>
        </div>
    );
}