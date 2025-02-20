import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  sla,
}) => {
  return (
    <div className="card ">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-image"
        style={{ width: "100%", height: "200px", borderRadius: "16px" }}
      />
      <h3>{name.length > 26 ? name.substring(0, 22) + "..." : name}</h3>
      <p>{avgRating} Stars</p>
      <p>
        {cuisines.join(", ").length > 30
          ? cuisines.join(", ").substring(0, 32) + "..."
          : cuisines.join(", ")}
      </p>
      <p>{sla.slaString}</p>
    </div>
  );
};

export default RestaurantCard;
