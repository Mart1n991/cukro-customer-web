import { useAsyncValue } from "react-router-dom";
import SpecialtyCard from "../specialtyCard/SpecialtyCard";

const SpecialtyList = () => {
  const { data } = useAsyncValue();

  return (
    <>
      {data.map(({ _id, name, weight }) => (
        <SpecialtyCard key={_id} id={_id} name={name} weight={weight} />
      ))}
    </>
  );
};

export default SpecialtyList;
