import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  sla,
}) => {
  return (
    <div className="card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
        style={{ width: "100%", height: "200px" }}
      />
      <h2>{name}</h2>
      <p>{avgRating} Stars</p>
      <p>{cuisines.join(", ")}</p>
      <p>{sla.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
