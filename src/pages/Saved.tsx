import CountryItem from "../components/CountryItem";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { CountryType } from "./Home";

const Saved = () => {
  const savedList = useSelector((state: RootState) => state.savedList);
  console.log(savedList);

  return (
    <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-[40px] py-[10px]">
      {savedList.length > 0 ? (
        savedList.map((item: CountryType, index: number) => (
          <CountryItem key={index} country={item} />
        ))
      ) : (
        <p className="col-span-full text-center">No saved found</p>
      )}
    </div>
  );
};

export default Saved;
