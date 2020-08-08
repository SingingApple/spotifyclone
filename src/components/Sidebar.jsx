import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "../StateProvider";
const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
      ></img>
      <SidebarOption Icon={HomeIcon} title="Home"></SidebarOption>
      <SidebarOption Icon={SearchIcon} title="Search"></SidebarOption>
      <SidebarOption Icon={LibraryMusicIcon} title="Library"></SidebarOption>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {console.log(playlists)}
      {playlists &&
        playlists.map((playlist) => (
          <SidebarOption title={playlist.name}></SidebarOption>
        ))}

      <SidebarOption title={"R&B"}></SidebarOption>
      <SidebarOption title={"Rock"}></SidebarOption>
    </div>
  );
};

export default Sidebar;
