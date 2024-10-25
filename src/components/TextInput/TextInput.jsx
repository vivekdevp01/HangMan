function TextInput({
  type = "text",
  label,
  placeholder = "Enter your input",
  onChangeHandler,
}) {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </label>
  );
}
export default TextInput;
