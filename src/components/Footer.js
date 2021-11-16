import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div>
         <footer>
        <span>Created By Bindu Vaghela | <FontAwesomeIcon icon={faCopyright} style={{ color: "#fff"}} /> 2021 All Right Reserved</span>
    </footer>   
        </div>
    )
}

export default Footer
