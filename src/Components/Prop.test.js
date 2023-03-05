import { render, screen } from "@testing-library/react";
import Props from "./Prop";

test("props component should call onChange function when select value is changed", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const handleChange = jest.fn();
  
    render(<Props value={options[0]} onChange={handleChange} items={options} />);
  
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
  
    select.value = options[1];
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  