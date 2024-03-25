export const Input = ({ setValue, label, id, type, placeholder, value }) => {
  return (
    <div className="inputBox">
      <label className="text1" htmlFor={id}>
        {label}
      </label>
      <input
        className="text2"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.valueAsNumber)}
      />
    </div>
  );
};
