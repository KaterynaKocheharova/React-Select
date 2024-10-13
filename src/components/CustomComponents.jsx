import Select, { components } from "react-select";

// ============== SELECT PARTS =========
// Control: the input box and selected values
// Menu: The dropdown menu
// Option: each dropdown menu option
// MultiValue: The representation of a selected option when using multi-select
// ClearIndicator: The "X" button to clear the selected values

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// breaking down select into components for better customization
const CustomControl = ({ children, ...props }) => (
  <div style={{ width: "300px", border: "1px solid red" }}>
    <components.Control {...props}>{children}</components.Control>
  </div>
);

const CustomOption = (props) => (
  <div>
    <components.Option {...props}>{props.data.label} 🎨</components.Option>
  </div>
);

export default function CustomComponents() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={{ Control: CustomControl, Option: CustomOption }}
      options={options}
    />
  );
}
