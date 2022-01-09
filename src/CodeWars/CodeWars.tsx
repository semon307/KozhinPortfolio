import s from "../Remote/Remote.module.css";
import container from "../Common/Styles/CommonStyles.module.css";
import {Title} from "../Common/Components/Title/Title";
import buttonStyle from "../Common/Components/Button/Button.module.css";
import React from "react";

export const CodeWars = () => {
    return (
        <div className={s.codeWarsBlock}>
            <div className={`${container.container} ${s.remoteContainer}`}>
                <div className={s.content}>
                    <Title title={"Code Wars"}/>
                    <div><a href={'https://www.codewars.com/users/semon307'} target={"_blank"}><img src={'https://www.codewars.com/users/semon307/badges/large'}/></a></div>
                </div>
            </div>

        </div>
    )
}