import { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = ({
  title,
  options = [],
  selected,
  onOptionSelect,
  maxWidth,
  direction = "BOTTOM",
  type = "SINGLE", // SINGLE or MULTIPLE
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

  const visibleClass = visible ? "dropdown__options--visible" : "";
  const directionClass =
    direction === "BOTTOM"
      ? "dropdown__options--bottom"
      : "dropdown__options--top";
  return (
    <div
      className="dropdown"
      style={{ maxWidth: maxWidth || "unset" }}
      ref={dropdownRef}
    >
      <div className="dropdown__header" onClick={toggleDropdown}>
        {type === "SINGLE" ? (selected ? selected.title : title) : title}
      </div>

      <ul className={`dropdown__options ${visibleClass} ${directionClass}`}>
        {options.map((option) => {
          const isSelected =
            type === "SINGLE"
              ? selected && selected.id === option.id
              : selected && selected.some((s) => s.id === option.id);
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
