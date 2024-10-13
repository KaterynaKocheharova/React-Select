import Select from "react-select";
import { colourOptions } from "../data";

// !!! styles selects from the mockup using this method
// !!! ream about othe rstyling options
// https://react-select.com/styles#inner-components

const StyledWithStylesProp = () => {
  // clearIndicator
  // container
  // control
  // dropdownIndicator
  // group
  // groupHeading
  // indicatorsContainer
  // indicatorSeparator
  // input
  // loadingIndicator
  // loadingMessage
  // menu
  // menuList
  // menuPortal
  // multiValue
  // multiValueLabel
  // multiValueRemove
  // noOptionsMessage
  // option
  // placeholder
  // singleValue
  // valueContainer
  return (
    <Select
      styles={{
        control: (baseStyles, state) => {
          console.log(state);
          console.log(baseStyles);

          return {
            ...baseStyles,
            borderColor: state.isFocused ? "blue" : "yellow",
            backgroundColor: "red",
            display: "flex",
          };
        },
        input: (baseStyles, state) => {
          return {
            ...baseStyles,
            padding: "0"
          };
        },
      }}
      options={colourOptions}
    />
  );
};

export default StyledWithStylesProp;
