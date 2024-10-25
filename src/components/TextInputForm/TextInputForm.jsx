import Button from "../Buttons/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  inputType,
  handleShowHideClick,
  handleFormSubmit,
  handleTextInputChange,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          type={inputType}
          label={"Enter a phrase or a word"}
          placeholder="Enter a word or phrase here..."
          onChangeHandler={handleTextInputChange}
        />
      </div>
      <div>
        <Button
          styleType="warning"
          text={inputType == "password" ? "Show" : "Hide"}
          onClickHandler={handleShowHideClick}
        />
      </div>
      <div>
        <Button type="submit" styleType="primary" text={"submit"} />
      </div>
    </form>
  );
}
export default TextInputForm;
