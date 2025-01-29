import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => (
  <nav className="navbar">
    <div className="logo">
      <img
        src="https://yt3.googleusercontent.com/jmNovL3g-LfBR9h6ggtRt2Wh3rkac8bQU7cv16tvLfVWFH4Woc-Vd8WkW07N-hE0LKoV3qWrgQ=s900-c-k-c0x00ffffff-no-rj"
        alt="Logo"
        className="logo-img"
      />
    </div>

    <div className="nav-menu">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </nav>
);

const restaurantList = [
  {
    info: {
      id: "413481",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "HAL 2nd Stage",
      areaName: "Indiranagar",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "61955",
      avgRatingString: "4.2",
      totalRatingsString: "5.0K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.4",
          ratingCount: "104",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-48e1c3c1-0b86-46b5-8530-9c5664d88b20",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-hal-2nd-stage-indiranagar-rest413481",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23681",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/11621595-920c-41ed-982e-8ce0c0017cd7_23681.jpg",
      locality: "Cmh Road",
      areaName: "Indiranagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "47K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 06:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-48e1c3c1-0b86-46b5-8530-9c5664d88b20",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-cmh-road-indiranagar-rest23681",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "506321",
      name: "Louis Burger",
      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
      locality: "Sarvagna Nagar",
      areaName: "Kammanahalli/Kalyan Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.2,
      parentId: "22485",
      avgRatingString: "4.2",
      totalRatingsString: "4.3K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹109",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-48e1c3c1-0b86-46b5-8530-9c5664d88b20",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/louis-burger-sarvagna-nagar-kammanahalli-kalyan-nagar-rest506321",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "531381",
      name: "Olio - The Wood Fired Pizzeria",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/4c79c851-80df-4683-ad2a-abd413d0fcdd_531381.jpg",
      locality: "Whitefield",
      areaName: "Indiranagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "11633",
      avgRatingString: "4.3",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "252",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-48e1c3c1-0b86-46b5-8530-9c5664d88b20",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-whitefield-indiranagar-rest531381",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5937",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5937.JPG",
      locality: "CMH Road",
      areaName: "Indiranagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "77K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-48e1c3c1-0b86-46b5-8530-9c5664d88b20",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-cmh-road-indiranagar-rest5937",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "568703",
      name: "Baking Bad - Pizza Delivery",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/23/f78d8119-3360-49c0-b001-9bc9bfb7fb9b_568703.JPG",
      locality: "Indiranagar",
      areaName: "Indiranagar",
      costForTwo: "₹650 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "521053",
      avgRatingString: "4.3",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-01-30 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹157",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "5.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-48e1c3c1-0b86-46b5-8530-9c5664d88b20",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/baking-bad-pizza-delivery-indiranagar-rest568703",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines }) => {
  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="restaurant-image"
        style={{ width: "100%" }}
      />
      <h2>{name}</h2>
      <p>{avgRating} Stars</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <h1>Restaurant List</h1>
      <div className="card-box">
        {restaurantList.map((item) => {
          return <RestaurantCard {...item.info} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};

const FooterComponent = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
