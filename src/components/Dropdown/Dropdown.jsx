import { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({
  title,
  options = [],
  selected,
  onOptionSelect,
  maxWidth,
}) => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) setVisible(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const toggleDropdown = () => {
    setVisible((visible) => !visible);
  };
  return (
    <div
      className="dropdown"
      style={{ maxWidth: maxWidth || "unset" }}
      ref={dropdownRef}
    >
      <div className="dropdown__header" onClick={toggleDropdown}>
        {selected ? selected.title : title}
      </div>

      <ul className={`dropdown__options ${visible && "visible"}`}>
        {options.map((option) => {
          const isSelected = selected && selected.id === option.id;
          return (
            <li
              key={option.id}
              className={`dropdown__option ${isSelected && "selected"}`}
              onClick={() => {
                onOptionSelect(option);
                setVisible(false);
              }}
            >
              {option.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
