import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [topFlag, setTopFlag] = useState(false);
  const [originalData, data, setData] = useRestaurant();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const searchedRestaurants = originalData.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        restaurant.info.areaName
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        restaurant.info.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
    return searchedRestaurants;
  };

  useEffect(() => {
    if (topFlag) {
      const filteredData = data.filter((res) => res.info.avgRating > 4.2);
      setData(filteredData);
    } else {
      if (searchText != "") setData(handleSearch());
      else setData(originalData);
    }
  }, [topFlag]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>
        Looks Like You Are Offline!😐 <br />
        Please check your internet connection.
      </h1>
    );

  if (originalData.length == 0) return <ShimmerComponent />;

  return (
    <div className="body">
      <h1>Restaurant List</h1>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search your restaurant"
            className="searchbar"
          />
          <button
            onClick={() => {
              setData(handleSearch());
            }}
            className="searchbar"
          >
            search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            setTopFlag(!topFlag);
          }}
        >
          {topFlag ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="card-box">
        {data.map((item) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              className="link"
              key={item.info.id}
              to={`/restaurant/${item.info.id}`}
            >
              <RestaurantCard {...item.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
