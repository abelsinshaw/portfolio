import * as React from 'react';
import { getCommonStyles } from '../Common/common.styles';
import instaImg from '../Assets/insta.svg';
import linkedInImg from '../Assets/linkedIn.svg';
import * as strings from '../Common/app.strings.json'

export const ContactCard = ()=>{
    return (
        <div className="container contactMeContainer">
            <span className={"contactTitle"} >{strings.Common.haveCoffee}</span>
            <span className={"email"}>{strings.Common.email}</span>
            <img className="icon" src={linkedInImg} alt="Linked In icon"/>
            <img className="secondIcon icon" src={instaImg} alt="instagram icon"/>
        </div>
    )
}