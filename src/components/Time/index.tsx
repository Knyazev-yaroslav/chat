import dayjs from "dayjs";
import React, { FC } from "react";
import { ITime } from "./interface";

import "./time.scss";

import { ReactComponent as MyMessage } from "../../assets/svg/myMessage.svg";

const Time: FC<ITime> = (props) => {
    const { my = false, time } = props;

    return (
        <div className="time_wrapper">
            <p className="date">{dayjs(time).format("HH:mm")}</p>
            {my && <MyMessage />}
        </div>
    );
};

export default Time;
