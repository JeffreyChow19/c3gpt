import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function ChatHistoryBar() {
    // const {histories} = props;

    const [panels, setPanels] = useState([]);

    const handleNewChatClick = () => {
        setPanels([...panels, `Chat Panel ${panels.length + 1}`]);
    };

    const handleRemovePanel = (index) => {
        setPanels(panels.filter((_, i) => i !== index));
    };

    const renderPanels = () => {
        return panels.map((panel, i) => (
            <div key={i} className="relative">
                <button
                    className="w-full bg-gray-500 hover:bg-gray-400 hover:text-gray-600 text-gray-100 font-bold py-2 px-4 rounded mb-2"
                    onClick={() => console.log(`Clicked panel ${i + 1}`)}
                >
                    <div className="p-2 flex-grow">{panel}</div>
                </button>
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="absolute top-5 right-3 cursor-pointer text-gray-500 hover:text-red-500"
                    onClick={() => handleRemovePanel(i)}
                />
            </div>
        ));
    };

    return (
        <div className="flex flex-col h-screen w-1/5 bg-gray-800 p-3">
            <div className="p-2 flex-grow-0">
                <button className="w-full bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded border border-white" onClick={handleNewChatClick}>
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

            <div className="p-4 flex-grow-0 flex flex-col text-white">
                <p style={{ fontFamily: 'Arial', fontWeight: 'bold'}}>Choose Algorithm: </p>
                <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-30 w-5 text-blue-600" name="algorithm" value="KMP" />
                    <span className="ml-2 text-white" style={{ fontFamily: 'Arial' }}>KMP</span>
                </label>
                <label className="inline-flex items-center mt-2">
                    <input type="radio" className="form-radio h-30 w-5 text-blue-600" name="algorithm" value="BM" />
                    <span className="ml-2 text-white" style={{ fontFamily: 'Arial'}}>BM</span>
                </label>
            </div>
        </div>
    );
}
