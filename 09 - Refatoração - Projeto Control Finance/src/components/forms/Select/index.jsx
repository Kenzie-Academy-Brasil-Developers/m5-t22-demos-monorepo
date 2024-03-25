export const Select = ({ setValue, label, id, children }) => {
  return (
    <div className="inputBox">
      <label className="text1" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="text2"
        onChange={(event) => setValue(event.target.value)}
      >
        {children}
      </select>
    </div>
  );
};
