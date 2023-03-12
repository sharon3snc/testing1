
const Props = (props) => (
    <select value={props.value} onChange={props.onChange}>
      {Array.isArray(props.items) && props.items.map((val, index) => (
        <option key={index} value={val}>{val}</option>
      ))}
    </select>
  );

  export default Props;
