import React from "react";
import "./_infowidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
const InfoWidget = () => {
    return (
        <section className="messages">
            <div className="messages__item messages__item--info"><span className= "messages__icon"><FontAwesomeIcon icon={faInfoCircle} /></span> <p>Masz już 99 przepisów, nieźle! </p><span> <FontAwesomeIcon icon={faWindowClose} /></span></div>
            <div className="messages__item messages__item--warning" ><span className= "messages__icon"><FontAwesomeIcon icon={faExclamationCircle} /></span> Pamiętaj, aby dodać plan!<span><FontAwesomeIcon icon={faWindowClose} /></span></div>
            <div className="messages__item messages__item--success"><span className= "messages__icon"><FontAwesomeIcon icon={faCheckCircle} /></span> Świetnie, że jesteś! Udanego planowania i smacznego! :)<span><FontAwesomeIcon icon={faWindowClose} /></span></div>
        </section>
    );
};

export default InfoWidget;

