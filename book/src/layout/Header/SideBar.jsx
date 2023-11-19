import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./SideBar.scss";

const SideBar = ({ open, setOpenSideBar }) => {
  return (
    <>
      <div className={`sideBar ${open ? "active" : ""}`}>
        <div className="sideBarHeader">
          <h3>menu</h3>
          <button onClick={() => setOpenSideBar(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="sideBarBody">Link Link Link Link Link Link</div>
      </div>
      <div className={`overlay ${open ? "active" : ""}`} onClick={()=>setOpenSideBar(false)}></div>
    </>
  );
};

export default SideBar;
