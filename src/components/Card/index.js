import styles from "./Card.module.scss";

console.log(styles);

function Card(props) {
  const onClickButton = () => {
    alert(props.title);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-liked.svg" alt="liked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="none" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button">+</button>
      </div>
    </div>
  );
}

export default Card;
