import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Dreams In Mocha And Latte",
    author: "SoulCurryArt",
    price: "5000",
    categoryName: "Artwork",
    categoryId: "artwork",
    productImage:
      "https://static.live.templately.com/woocommerce/2021/07/image7.jpg",
    rating: "3",
  },
  {
    _id: uuid(),
    title: "Clasic ModAbstract Hues",
    author: "Alpine shade",
    price: "3000",
    categoryName: "Photography",
    categoryId: "photography",
    productImage:
      "https://static.live.templately.com/woocommerce/2021/06/image-2-1.png",
    rating: "4",
  },
  {
    _id: uuid(),
    title: "Self-Portrait: Inner Conflict",
    author: "OVR Land",
    price: "1000",
    categoryName: "Mixed Media Art",
    categoryId: "mixedMediaArt",
    productImage:
      "https://static.live.templately.com/woocommerce/2021/07/image6-1.jpg",
    rating: "2",
  },
  {
    _id: uuid(),
    title: "Abstract Field Of Sunflowers",
    author: "Lost Tribe",
    price: "4000",
    categoryName: "Auditory Art",
    categoryId: "auditoryArt",
    productImage:
      "https://static.live.templately.com/woocommerce/2021/07/image12.jpg",
    rating: "5",
  },
  {
    _id: uuid(),
    title: "Bored Ape Yacht Club",
    author: "Misan Harriman",
    price: "2000",
    categoryName: "Photography",
    categoryId: "photography",
    productImage:
      "https://lh3.googleusercontent.com/jY3UkYH6v9OvQmTs7Fgv06DXB7IxEE1OO898p9XbB5cUlTAIML2QeUCFMOZajf-kWbtyXMM4rFKYAJoKHfShPSJPl9T7qenORAq9=w600",
    rating: "3",
  },
  {
    _id: uuid(),
    title: "Window",
    author: "Jan Robert Leegte",
    price: "5050",
    categoryName: "Mixed Media Art",
    categoryId: "mixedMediaArt",
    productImage:
      "https://lh3.googleusercontent.com/MXWLoXL_wsV7M0wW3yH1cJWcijArWJYtQZyfxYEFePFP3zVW4in_VP7x9InpQ6HhJDb1iZas0Bh1NlG3P3GYMfkj_AUHzFH6xqD-0A=w361",
    rating: "1",
  },
  {
    _id: uuid(),
    title: "Fighter",
    author: "GoodTomorrow",
    price: "3050",
    categoryName: "Auditory Art",
    categoryId: "auditoryArt",
    productImage:
      "https://lh3.googleusercontent.com/qP2KkFKGWe-mZ-qR4vM7cP5-xZgNkO0X11g_8KDo1R15lHQepoi6imyTc1QsRTwU8Oh9SYbuFQZ8I24FMth6WODHFUcyoAr4Tsp86A=w600",
    rating: "2",
  },
  {
    _id: uuid(),
    title: "THEOS Aviator Droid",
    author: "Savage Droids",
    price: "1050",
    categoryName: "Artwork",
    categoryId: "artwork",
    productImage:
      "https://lh3.googleusercontent.com/5HHILpb4dpJYOjOfvfFIjQmx8Nk1X0gegXlQD1futHwXc4EviUCYkgD529pnY4vF0hGfTv3GBGYpiBODm28Hq3f3bHVoS-1zW-6AKFY=w600",
    rating: "5",
  },
  {
    _id: uuid(),
    title: "AlgoRhythms",
    author: "Nicolas Daniel",
    price: "4050",
    categoryName: "Photography",
    categoryId: "photography",
    productImage:
      "https://lh3.googleusercontent.com/-mOvQYdYdGrapvSfl12itGmm5xbAT1ASIKzAQaKFG6QMatmzL0T2126Drp6ZzzWL6odjnQGS4HO9b9lXgrmEzB0vs_avdHd_-fc_lA=w361",
    rating: "3",
  },
  {
    _id: uuid(),
    title: "Cool Cat",
    author: "comfywallet",
    price: "2050",
    categoryName: "Mixed Media Art",
    categoryId: "mixedMediaArt",
    productImage:
      "https://lh3.googleusercontent.com/b9RG8nEqe6Prdq9UwBNOM5XbYWxy63J_KqIcxVZEZ_iqncc1p0Bz_azCiD_xZRhESUh3t5qtVEJmXxR9stRZ30g4gWFi1TB1p-8q=w600",
    rating: "4",
  },
  {
    _id: uuid(),
    title: "Syn City",
    author: "0xmusic",
    price: "6000",
    categoryName: "Auditory Art",
    categoryId: "auditoryArt",
    productImage:
      "https://lh3.googleusercontent.com/1gSND6oQuFqZHAonZ0ZURCIDs6KJC4h9M7trQss8fGD7Dy0M3xI_AUgbZvIwpmxMhyoh5xkVevQQAzX7hY57ONAh6XHN20v6lGU-=w361",
    rating: "1",
  },
  {
    _id: uuid(),
    title: "Reptile Armoury",
    author: "Flight of the Pegasus",
    price: "8000",
    categoryName: "Artwork",
    categoryId: "artwork",
    productImage:
      "https://lh3.googleusercontent.com/3IDFL_NpT4Wis0XW7pLS0iJSgNsWUEgk8Y3RhflzMHDhJ4Vy2I9LHCeOpwLIHniYcyZDBn4ghYA6LHon8wlX_CslT-2BWpyhK-mTvg=w600",
    rating: "3",
  },
  {
    _id: uuid(),
    title: "Metascapes",
    author: "Ryan Newburn",
    price: "7000",
    categoryName: "Photography",
    categoryId: "photography",
    productImage:
      "https://lh3.googleusercontent.com/ZBedurVCMujs5e7q-dDWpJhG2Rcped3o12R5lmOPZBWpV9VL4az6Is1oXmNMlcxUP5KdincvsT-M8-M_ZfvCsEUXvmc9h_tdArxbedU=w600",
    rating: "4",
  },
  {
    _id: uuid(),
    title: "Moonlight",
    author: "Hashmasks",
    price: "6050",
    categoryName: "Mixed Media Art",
    categoryId: "mixedMediaArt",
    productImage:
      "https://lh3.googleusercontent.com/P3DECFguLNtsQUWt9MngfZCdTmI0fz9VcR56o83hX3a3S84adgGWg80CmL6nFmgdctl_DM55YGtuhdzrlGxsScbIbxQiMpeJIN_9tA=w361",
    rating: "2",
  },
  {
    _id: uuid(),
    title: "Bunny Buddies",
    author: "Ryan Robinson",
    price: "8050",
    categoryName: "Auditory Art",
    categoryId: "auditoryArt",
    productImage:
      "https://lh3.googleusercontent.com/STM3RykJ4iw_ofSBXPDze5k5Gs0vgXoZQKbCEeMaVnY80m7cpMumewE2QSwAfCsy0vw_kOqGDn81TgDD_s7O0q6qECXianQF23kUKg=w600",
    rating: "5",
  },
  {
    _id: uuid(),
    title: "The Initial Visit",
    author: "Jake Rockland",
    price: "7050",
    categoryName: "Artwork",
    categoryId: "artwork",
    productImage:
      "https://lh3.googleusercontent.com/s_HZfWpCXFuKqBYXOb-3lxtXZuhiD7MwfmRa366t5KP6NncnWqKcwGBTSOKCO9-SILRtuqDFFuuo2DH8ZHAVOKD8Vl05xCBEQJtGeQ=w600",
    rating: "1",
  },
];
