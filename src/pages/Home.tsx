import axios from "axios";
import { useContext, useEffect } from "react";
import CountryItem from "../components/CountryItem";
import { Context } from "../context/Context";

export interface CountryType {
  countryName: string;
  population: number;
  region: string;
  capital: string;
  flagImg: string;
  location: string;
}

const Home = () => {
  const { countries, setCountries, search } = useContext(Context);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(
        res.data.map((item: any) => {
          const newData = {
            countryName: item.name.common,
            population: item.population,
            region: item.region,
            capital: item.capital?.[0],
            flagImg: item.flags.png,
            location: item.maps.googleMaps,
          };
          return newData;
        })
      );
    });
  }, []);

  console.log(search);

  const filteredCountries = countries.filter(
    (item: CountryType) =>
      item.countryName.toLowerCase().includes(search.toLowerCase()) ||
      (item.capital &&
        item.capital.toLowerCase().includes(search.toLowerCase()))
  );

  console.log(filteredCountries);

  return (
    <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-[40px] py-[10px]">
      {filteredCountries.length > 0 ? (
        filteredCountries
          .slice(0, 20)
          .map((item: CountryType, index: number) => (
            <CountryItem key={index} country={item} />
          ))
      ) : (
        <p className="col-span-full text-center">No countries found</p>
      )}
    </div>
  );
};

export default Home;
