import React from 'react';
import "./Eintrag.css";

const Eintrag = ({member, eintragClickHandler}) =>
 (<li onClick={() => eintragClickHandler(member.name)} className={member.available ? "Eintrag" : "Eintrag Erledigt" }>
     {member.name}, 
     department: {member.department}, <button className={member.available ? "ButtonAvailable" : "ButtonAvailable not" }>
         {member.available ? "Available" : "Not available" }</button></li>);

export default Eintrag;


