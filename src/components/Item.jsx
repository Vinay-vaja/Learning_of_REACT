import styles from "./Item.module.css";
const Item = ({ programmingLang, bought, handleBuyButton }) => {
  const handleBuyClick = ({ programmingLang }) => {
    console.log(`${programmingLang} is being bought`);
  };
  return (
    <>
      <li className={`${styles["vk-item"]} list-group-item ${bought && "active"}`}>
     
        <span className={styles["vk-span"]}>{programmingLang}</span>
        <button className={styles.btn} onClick={handleBuyButton}>
          BUY
        </button>
      </li>
    </>
  );
};
export default Item;
