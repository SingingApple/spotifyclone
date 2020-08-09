import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../StateProvider";
const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon></SearchIcon>
        <input
          type="text"
          placeholder="Search of Artists, Songs, Albums"
          id=""
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="AS"></Avatar>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
