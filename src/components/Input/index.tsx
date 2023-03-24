import React, { useRef, useState } from "react";

import "./input.scss";

import { ReactComponent as MessageArrow } from "../../assets/svg/message_arrow.svg";
import { ReactComponent as Clip } from "../../assets/svg/clip.svg";

const Input = () => {
    // const [inputText, setInputText] = useState<string>("");
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    return (
        <div className="input_wrapper">
            <div className="input">
                <p
                    className="input_text"
                    onInput={(e) =>
                        setShowPlaceholder(!(e.target as HTMLElement).innerHTML)
                    }
                    contentEditable
                    suppressContentEditableWarning={true}
                ></p>
                {showPlaceholder && (
                    <p className="input_placeholder">Type messsage</p>
                )}
            </div>
            <div className="input_footer">
                <button className="button_flip">
                    <Clip />
                </button>
                <button className="button_arrow">
                    <MessageArrow />
                </button>
            </div>
        </div>
    );
};

export default Input;
