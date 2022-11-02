import { useAsyncValue } from "react-router-dom";
import SmallCakeCard from "../smallCakeCard/SmallCakeCard";

const SmallCakeList = () => {
  const { data } = useAsyncValue();

  //Filter all small cakes and display the categories
  const productsNames = data.map((x) => x.name);
  const uniqueProductsInCategory = data.filter((x, i) => productsNames.indexOf(x.name) === i);

  return (
    <>
      {uniqueProductsInCategory.map(({ _id, name }) => (
        <SmallCakeCard key={_id} id={_id} name={name} />
      ))}
    </>
  );
};

export default SmallCakeList;
