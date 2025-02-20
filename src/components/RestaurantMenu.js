import { useParams } from "react-router-dom";
import ShimmerComponent from "./ShimmerComponent";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const menuData = useRestaurantMenu(resID);

  if (menuData === null) return <ShimmerComponent />;

  const {
    name,
    avgRatingString,
    cuisines,
    totalRatingsString,
    city,
    costForTwoMessage,
    locality,
    areaName,
    cloudinaryImageId,
  } = menuData?.cards[2]?.card?.card?.info;

  const menu = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="restaurant-menu">
      <div className="restaurant-details">
        <div>
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>

          <p>
            {locality}, {areaName}, {city}
          </p>
          <p>
            {avgRatingString} ({totalRatingsString})
          </p>
          <p>{costForTwoMessage}</p>
        </div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" +
            cloudinaryImageId
          }
          alt="restaurant-image"
          className="restaurant-image"
        />
      </div>
      <h2 className="menu-heading">Menu</h2>
      {menu?.length > 0 &&
        menu.map((data, index) => (
          <div key={index} className="menu-card-parent">
            {data?.card?.card?.itemCards?.length > 0 && (
              <h2 className="menu-title">{data?.card?.card?.title}</h2>
            )}

            {data?.card?.card?.itemCards?.length > 0 &&
              data?.card?.card?.itemCards.map((item) => (
                <div key={item?.card?.info?.id} className="menu-card">
                  <div>
                    <h3>{item?.card?.info?.name}</h3>
                    <p>
                      {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : item?.card?.info?.defaultPrice / 100}
                    </p>

                    {Object.keys(item?.card?.info?.ratings?.aggregatedRating)
                      .length != 0 && (
                      <p>
                        {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                        {"(" +
                          item?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCount +
                          ")"}
                      </p>
                    )}
                    <p>{item?.card?.info?.description}</p>
                  </div>
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      item?.card?.info?.imageId
                    }
                    alt=""
                    className="menu-card-image"
                  />
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};
export default RestaurantMenu;
