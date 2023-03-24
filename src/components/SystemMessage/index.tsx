import dayjs from "dayjs";
import React, { FC } from "react";
import { ISystemMessage } from "./interface";

import "./systemMessage.scss";

const SystemMessage: FC<ISystemMessage> = (props) => {
    const { date } = props;
    return <div className="stystemMessage">{date}</div>;
};

export default SystemMessage;
