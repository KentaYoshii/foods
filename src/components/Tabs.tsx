import * as React from "react";
import Tabs from "@mui/material/Tabs";
import { Avatar } from "@mui/material";
import Tab from "@mui/material/Tab";
import { GiJapan, GiWorld } from "react-icons/gi"
import FavoriteIcon from "@mui/icons-material/Favorite";
import jpn from "../assets/fuji.svg";

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
      sx={{
        maxWidth: "100%",
      }}
    >
      <Tab icon={<GiJapan size="2rem" color="black"/>} label="Japan" />
      <Tab icon={<GiWorld size="2rem" color="black" />} label="World" />
    </Tabs>
  );
}
