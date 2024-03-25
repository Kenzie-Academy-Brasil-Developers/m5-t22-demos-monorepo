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
        // onChange={(event) => setValue(event.target.valueAsNumber)}
        /*
          O input é do tipo number ? CASO SIM : CASO NAO
            SIM -> Já faz a converção do value para number (valueAsNumber)
            NÃO -> Utiliza o valor do input em string
        */
        onChange={(event) =>
          setValue(
            type === "number" ? event.target.valueAsNumber : event.target.value
          )
        }
      />
    </div>
  );
};
