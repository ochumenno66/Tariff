import Card from "./Card";
import CardList from "./CardList";
import styles from "../../component/main.module.css";
import { useState } from "react";

const Content = () => {
  const [onClick, setOnClick] = useState(null);

  const handelClick = (index) => {
    setOnClick(index);
  };

  return (
    <main className={styles.main}>
      {CardList.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.title}
            price={card.price}
            trafic={card.trafic}
            info={card.info}
            width={card.width}
            colors={card.colors}
            isSelected={onClick === index}
            onClick={() => handelClick(index)}
          />
        );
      })}
    </main>
  );
};

export default Content;

