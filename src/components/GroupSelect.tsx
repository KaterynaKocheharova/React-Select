import { CSSProperties, useState } from "react";

import Select from "react-select";
import {
  ColourOption,
  colourOptions,
  FlavourOption,
  GroupedOption,
  groupedOptions,
} from "../data.ts";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const groupBadgeStyles: CSSProperties = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

// defines a group name such as "Colors" or "Flavors"
const formatGroupLabel = (data: GroupedOption) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    {/* this is a badge near the group name showing the number of options in a group */}
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const GroupSelect = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <Select<ColourOption | FlavourOption, true, GroupedOption>
      // (ColourOption | FlavourOption) means the select values can either be a color or a flavor.
      // false indicates that multiple selections are not allowed (single select).
      // (GroupedOption) is the type for grouped options.
      // default color will be blue
      defaultValue={colourOptions[1]}
      // an array of two objects each having a group name and a list of options
      options={groupedOptions}
      // passing custom heading of each group
      formatGroupLabel={formatGroupLabel}
      closeMenuOnSelect={false}
      menuIsOpen={menuIsOpen}
      isMulti={true}
    />
  );
};

export default GroupSelect;
