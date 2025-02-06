import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [topFlag, setTopFlag] = useState(false);

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
    fetchData();
  }, []);

  useEffect(() => {
    if (topFlag) {
      const filteredData = data.filter((res) => res.info.avgRating > 4.2);
      setData(filteredData);
    } else {
      if (searchText != "") setData(handleSearch());
      else setData(originalData);
    }
  }, [topFlag]);

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

  return originalData.length == 0 ? (
    <ShimmerComponent />
  ) : (
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
          return <RestaurantCard {...item.info} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
