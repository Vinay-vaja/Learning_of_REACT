import styles from "./langinput.module.css";
const LanguageInput = ({handleKeyDown})=>{
    const handleOnEvent = (event)=>{
        console.log(event.target.value);
        handleOnChange(event);
    }
    return (
 <input 
   className={styles.langInput}
   type="text"
    // onChange={handleOnEvent}
    onKeyDown={handleKeyDown}
    placeholder="Enter one coding language here:" />
   
    );
}
export default LanguageInput;