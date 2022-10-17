import { useAsyncValue } from "react-router-dom";
import CakeCard from "../cakeCard/CakeCard";

const CakeList = () => {
  const { data } = useAsyncValue();

  return (
    <>
      {data.map(({ _id, name, price, weight }) => (
        <CakeCard key={_id} name={name} price={price} weight={weight} />
      ))}
    </>
  );
};

export default CakeList;
