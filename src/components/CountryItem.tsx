import React from "react";
import { RootState } from "../store/store";
import { SaveOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

import { CountryType } from "../pages/Home";
import LinkToMaps from "./LinkToMaps";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../store/savedList";

export interface MapsType {
  link: string;
  title: string;
}

const CountryItem: React.FC<{ country: CountryType }> = ({ country }) => {
  const savedList = useSelector((state: RootState) => state.savedList);
  const dispatch = useDispatch();
  const isSaved = savedList.some(
    (savedCountry: CountryType) =>
      savedCountry.countryName === country.countryName
  );

  const handleSave = () => {
    if (!isSaved) {
      dispatch(addToList(country));
    } else {
      dispatch(removeFromList(country.countryName));
    }
  };
  return (
    <Card
      style={{ width: "100%" }}
      cover={
        <img
          alt={country.countryName}
          src={country.flagImg}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      }
      actions={[
        <SaveOutlined
          key="save"
          onClick={handleSave}
          className={isSaved ? "bg-green-500" : "text-red-500"}
        />,
        <LinkToMaps link={country.location} title={"Location"} />,
        <LinkToMaps
          link={`https://en.wikipedia.org/wiki/${country.countryName}`}
          title={"More"}
        />,
      ]}
    >
      <Meta
        avatar={<Avatar src={country.flagImg} />}
        title={country.countryName}
        description={country.capital}
      />
      <div className="mt-[30px]">
        <p>Population: {country.population}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </Card>
  );
};

export default CountryItem;
