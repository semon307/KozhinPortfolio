import React, {FormEvent, useRef, useState} from "react";
import s from "./Contacts.module.css";
import common from "./../Common/Styles/CommonStyles.module.css"
import {Title} from "../Common/Components/Title/Title";
import buttonStyle from "./../Common/Components/Button/Button.module.css"
import emailjs from 'emailjs-com';
type EmailStatusType = "none" | "succeded" | "failed"
export const Contacts = () => {
    const [emailStatus, setEmailStatus] = useState<EmailStatusType>("none")
    const [disabled, setDisabled] = useState(true)
    const form = useRef();

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log(data)

        // @ts-ignore
        emailjs.sendForm('service_f40drjk', 'template_2u6n4qr', e.target, 'user_WVLxYyOZjV4oINEwJY090')
            .then((result) => {
                console.log(result.text);
                setEmailStatus("succeded")
            }, (error) => {
                console.log(error.text);
                setEmailStatus("failed")
            });
        e.currentTarget.reset();

    };

    return (
        <div id={"Contacts"} className={s.contactsBlock}>

            <div className={`${common.container} ${s.contactsContainer}`}>
                <div className={s.content}>
                        <Title title={"Contacts"}/>
                        <div className={s.attention}>{emailStatus === "succeded" && "I appreciate your attention and I will contact You as soon as it is possible."}</div>
                        <div className={s.attentionError}>{emailStatus === "failed" && "There are some technical troubles with your request. Please, choose another way to contact me."}</div>

                        <form id={"form"} name={"form"} onSubmit={sendEmail} className={s.form}>
                            <input id={"email"} className={s.input} placeholder={"Your name"} name={"email"} required={true}/>
                            <input id={"name"} className={s.input} placeholder={"Your E-mail"} name={"name"} required/>
                            <textarea id={"message"} className={s.textArea} placeholder={"Type text here"} name={"message"} required/>
                            <input id={"submit"} className={buttonStyle.button} type={"submit"} value={"Send"}/>
                        </form>
                </div>
            </div>

        </div>
    )
}