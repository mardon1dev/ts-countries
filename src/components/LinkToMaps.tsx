import { Link } from "react-router-dom";

import { MapsType } from "./CountryItem";

const LinkToMaps = ({ link, title }: MapsType) => {

  return (
    <Link to={link} target="_blank">
      <span>{title}</span>
    </Link>
  );
};

export default LinkToMaps;
