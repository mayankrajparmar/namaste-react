import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  console.log(setSearchText);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9953514&lng=77.65883749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        {
          mode: "cors",
          headers: { "User-Agent": "Mozilla/5.0" },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const resData = await res.json();
      const restaurantList =
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setOriginalData(restaurantList);
      setData(restaurantList);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

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
              const searchedRestaurants = originalData.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  restaurant.info.areaName
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  restaurant.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setData(searchedRestaurants);
            }}
            className="searchbar"
          >
            search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredData = data.filter((res) => res.info.avgRating > 4.2);
            setData(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>

        <button className="filter-button" onClick={() => setData(originalData)}>
          Show All Restaurants
        </button>
      </div>
      <div className="card-box">
        {data.map((item) => {
          return <RestaurantCard {...item.info} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
