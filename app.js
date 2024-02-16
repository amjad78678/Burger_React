import React from "react";
import ReactDOM from "react-dom/client";


    const Title = () => (
      <a href="/">
        <img
          className="logo"
          alt="logo"
          src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        />
      </a>
    );

    const HeaderComponent=()=>{
        return (
          <div className="header">

         <Title />

              <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
              </ul>

              </div>
          </div>
        );
    }

    const Body=()=>{
      
      return (
        <div className="body">
          <RestaurantCard restaurant={restaurantList[0]} />
          <RestaurantCard restaurant={restaurantList[1]} />
          <RestaurantCard restaurant={restaurantList[2]}/>
          <RestaurantCard restaurant={restaurantList[3]} />
          <RestaurantCard restaurant={restaurantList[4]} />
          <RestaurantCard restaurant={restaurantList[5]} />
     
        </div>
      );
    }

  



    const Footer=()=>{

      return (
       
          <h4>Footer</h4>
        
      );
    }


    const restaurantList= [
                    {
                      "info": {
                        "id": "549081",
                        "name": "Bombay Hotel",
                        "cloudinaryImageId": "utwvwtb4wt4ny71ijid0",
                        "locality": "Silk Street",
                        "areaName": "Palayam",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                          "Chinese",
                          "South Indian",
                          "Biryani"
                        ],
                        "avgRating": 4.3,
                        "parentId": "48744",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 43,
                          "lastMileTravel": 6.2,
                          "serviceability": "SERVICEABLE",
                          "slaString": "43 mins",
                          "lastMileTravelString": "6.2 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-16 12:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹50 OFF",
                          "subHeader": "ABOVE ₹199",
                          "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/bombay-hotel-silk-street-palayam-549081",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    },
                    {
                      "info": {
                        "id": "705031",
                        "name": "Starbucks Coffee",
                        "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
                        "locality": "Beach Rd",
                        "areaName": "Mananchira",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Beverages",
                          "Cafe",
                          "Snacks",
                          "Desserts",
                          "Bakery",
                          "Ice Cream"
                        ],
                        "avgRating": 4.3,
                        "parentId": "195515",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "100+",
                        "sla": {
                          "deliveryTime": 43,
                          "lastMileTravel": 6,
                          "serviceability": "SERVICEABLE",
                          "slaString": "43 mins",
                          "lastMileTravelString": "6.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-16 23:59:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "20% OFF",
                          "subHeader": "UPTO ₹50"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/starbucks-coffee-beach-rd-mananchira-705031",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    },
                    {
                      "info": {
                        "id": "242117",
                        "name": "Adaminte Chayakkada",
                        "cloudinaryImageId": "392f97c751c3dad45ce4f6bb36709d60",
                        "locality": "Silk Street",
                        "areaName": "Kuttichira",
                        "costForTwo": "₹500 for two",
                        "cuisines": [
                          "South Indian",
                          "Kerala",
                          "Biryani",
                          "Beverages"
                        ],
                        "avgRating": 4.1,
                        "parentId": "8326",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 43,
                          "lastMileTravel": 6.3,
                          "serviceability": "SERVICEABLE",
                          "slaString": "43 mins",
                          "lastMileTravelString": "6.3 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-17 00:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "40% OFF",
                          "subHeader": "UPTO ₹80"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/adaminte-chayakkada-silk-street-kuttichira-242117",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    },
                    {
                      "info": {
                        "id": "377529",
                        "name": "Suprabatham Veg",
                        "cloudinaryImageId": "ukkna38gkgfjdrgm8lxt",
                        "locality": "Beach Road",
                        "areaName": "Beach Road",
                        "costForTwo": "₹300 for two",
                        "cuisines": [
                          "Chinese",
                          "North Indian",
                          "South Indian",
                          "Biryani"
                        ],
                        "avgRating": 4.5,
                        "veg": true,
                        "parentId": "197567",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 43,
                          "lastMileTravel": 6.2,
                          "serviceability": "SERVICEABLE",
                          "slaString": "43 mins",
                          "lastMileTravelString": "6.2 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-16 21:30:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "₹50 OFF",
                          "subHeader": "ABOVE ₹199",
                          "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/suprabatham-veg-beach-road-377529",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    },
                    {
                      "info": {
                        "id": "400383",
                        "name": "Dosa Kada",
                        "cloudinaryImageId": "mq97jnvhojdlelpt3t2p",
                        "locality": "Beach Road",
                        "areaName": "Vellayil",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "South Indian"
                        ],
                        "avgRating": 4.5,
                        "parentId": "244975",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "500+",
                        "sla": {
                          "deliveryTime": 43,
                          "lastMileTravel": 6.5,
                          "serviceability": "SERVICEABLE",
                          "slaString": "43 mins",
                          "lastMileTravelString": "6.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-16 12:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "10% OFF",
                          "subHeader": "UPTO ₹40"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/dosa-kada-beach-road-vellayil-400383",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    },
                    {
                      "info": {
                        "id": "397518",
                        "name": "Kofta",
                        "cloudinaryImageId": "ohezyptnh00xtcpfujqw",
                        "locality": "Convent Road",
                        "areaName": "Vellayil",
                        "costForTwo": "₹200 for two",
                        "cuisines": [
                          "Continental"
                        ],
                        "avgRating": 3.8,
                        "parentId": "248945",
                        "avgRatingString": "3.8",
                        "totalRatingsString": "10+",
                        "sla": {
                          "deliveryTime": 43,
                          "lastMileTravel": 6.4,
                          "serviceability": "SERVICEABLE",
                          "slaString": "43 mins",
                          "lastMileTravelString": "6.4 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-16 20:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {
                          
                        },
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/kofta-convent-road-vellayil-397518",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    },
                    {
                      "info": {
                        "id": "631151",
                        "name": "Hotel Deevar",
                        "cloudinaryImageId": "loumztjl0sdzenqnvncd",
                        "locality": "Railway Station Road",
                        "areaName": "Palayam",
                        "costForTwo": "₹250 for two",
                        "cuisines": [
                          "North Indian",
                          "Chinese",
                          "Snacks"
                        ],
                        "avgRating": 3.9,
                        "parentId": "377562",
                        "avgRatingString": "3.9",
                        "totalRatingsString": "100+",
                        "sla": {
                          "deliveryTime": 43,
                          "lastMileTravel": 6.7,
                          "serviceability": "SERVICEABLE",
                          "slaString": "43 mins",
                          "lastMileTravelString": "6.7 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-16 23:30:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "15% OFF",
                          "subHeader": "UPTO ₹45"
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/hotel-deevar-railway-station-road-palayam-631151",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    },
                    {
                      "info": {
                        "id": "722339",
                        "name": "Top Form_SM Street",
                        "cloudinaryImageId": "b5303a94c367062c158ce278bf6307a3",
                        "locality": "Calicut Top Form",
                        "areaName": "S M Street",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                          "Kerala",
                          "South Indian",
                          "Chinese",
                          "Biryani"
                        ],
                        "avgRating": 4.3,
                        "parentId": "454776",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "50+",
                        "sla": {
                          "deliveryTime": 43,
                          "lastMileTravel": 6.8,
                          "serviceability": "SERVICEABLE",
                          "slaString": "43 mins",
                          "lastMileTravelString": "6.8 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-16 23:00:00",
                          "opened": true
                        },
                        "badges": {
                          
                        },
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {
                          
                        },
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/top-form-sm-street-calicut-top-form-s-m-street-722339",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    },
                    {
                      "info": {
                        "id": "76386",
                        "name": "Pillais Snacks",
                        "cloudinaryImageId": "ulakzdc3hynvutvkjrbg",
                        "locality": "Markazudaawa",
                        "areaName": "Palayam",
                        "costForTwo": "₹150 for two",
                        "cuisines": [
                          "South Indian"
                        ],
                        "avgRating": 4.2,
                        "veg": true,
                        "parentId": "20818",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "1K+",
                        "sla": {
                          "deliveryTime": 47,
                          "lastMileTravel": 7,
                          "serviceability": "SERVICEABLE",
                          "slaString": "47 mins",
                          "lastMileTravelString": "7.0 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "nextCloseTime": "2024-02-16 19:57:00",
                          "opened": true
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                              "description": "pureveg"
                            }
                          ]
                        },
                        "isOpen": true,
                        "aggregatedDiscountInfoV2": {
                          
                        },
                        "type": "F",
                        "badgesV2": {
                          "entityBadges": {
                            "imageBased": {
                              "badgeObject": [
                                {
                                  "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                  }
                                }
                              ]
                            },
                            "textBased": {
                              
                            },
                            "textExtendedBadges": {
                              
                            }
                          }
                        },
                        "orderabilityCommunication": {
                          "title": {
                            
                          },
                          "subTitle": {
                            
                          },
                          "message": {
                            
                          },
                          "customIcon": {
                            
                          }
                        },
                        "differentiatedUi": {
                          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                          "differentiatedUiMediaDetails": {
                            "maxDuration": "3000",
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {
                              
                            },
                            "video": {
                              
                            }
                          }
                        },
                        "reviewsSummary": {
                          
                        },
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {
                          
                        }
                      },
                      "analytics": {
                        "context": "seo-data-d7f33851-0f62-43ce-aed1-5f0d8a01dfff"
                      },
                      "cta": {
                        "link": "https://www.swiggy.com/restaurants/pillais-snacks-markazudaawa-palayam-76386",
                        "text": "RESTAURANT_MENU",
                        "type": "WEBLINK"
                      },
                      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
                    }
                  ]

    const burgerKing={
      title:"Burger King",
      ratings:4.2,
      image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mbldqkrpztivwwgymlsn",
      description:["Burgers","American"]
    }

 const RestaurantCard = (props) => {
   return (


     <div className="card">
       <img
         src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.restaurant.info?.cloudinaryImageId}`}
       />
       <h2>{props.restaurant.info?.name}</h2>
       <h3>{props.restaurant.info?.cuisines.join(',')}</h3>
       <h4>{props.restaurant.info?.avgRating} stars</h4>
     </div>
   );
 };

    const AppLayout =()=>{
    
      return (
       <>
          <HeaderComponent />
          <Body />
          <Footer />

        </>
      );

    }


    const root=ReactDOM.createRoot(document.getElementById('root'))
    
    root.render(<AppLayout/>);
