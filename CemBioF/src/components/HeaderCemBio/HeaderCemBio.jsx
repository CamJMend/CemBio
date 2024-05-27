import React from "react";
import "./HeaderCemBio.css";
import image_logo from "../../assets/images/ImageLogoCembio.png";

const HeaderCemBio = () => {
    return (
        <div className='headerCemBio'>
            <img src={image_logo} alt="Logo de CemBio positivo" />
        </div>
      )
}
    
export default HeaderCemBio