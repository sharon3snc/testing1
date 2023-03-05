
const Props = (props) => (
    <props value={props.value} onChange={(e)=>props.onChange(e.target.value)}>
      {props.items.map(val => (
        <option value={val}>{val}</option>
      ))}
    </props>
  );

  export default Props;
