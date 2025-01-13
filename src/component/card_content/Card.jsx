import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./card.module.css";

const Card = (props) => {
  const { isSelected, onClick } = props;

  return (
    <div
      className={classNames(styles.wrapper, { [styles.selected]: isSelected })}
      {...props}
      onClick={onClick}
    >
      <h1 style={{ background: props.colors[0] }} className={styles.title}>
        {props.title}
      </h1>
      <span style={{ background: props.colors[1] }} className={styles.price}>
        {props.price}
      </span>
      <p style={{ background: props.colors[2] }} className={styles.trafic}>
        {props.trafic}
      </p>
      <p style={{ background: props.colors[3] }} className={styles.info}>
        {props.info}
      </p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  trafic: PropTypes.string,
  info: PropTypes.string,
  colors: PropTypes.array,
  width: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Card;
