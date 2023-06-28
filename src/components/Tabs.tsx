import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { GiJapan, GiWorld } from "react-icons/gi"

export default function IconLabelTabs(props: {setRegion: (r: number) => void, region: number}) {

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    props.setRegion(newValue);
  };

  return (
    <Tabs
      value={props.region}
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
