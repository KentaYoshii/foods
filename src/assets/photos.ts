export interface ImageType {
  key: String;
  title: String;
}

export interface Restaurant {
  name: string;
  date: string;
  thumbnail: string;
  numImages: number;
  location: string;
  tags: string[];
  website: string;
}

export const perPage = 6;

export const restaurants: Restaurant[] = [
  {
    name: "Taiwan Ten Cafe",
    date: "20230708",
    thumbnail: "taiwan_ten_cafe_1.jpeg",
    numImages: 2,
    location: "Shinjuku-Ku, Tokyo",
    tags: ["#Taiwanese dinner before Indiana Jones!"],
    website: "https://taiwan-ten.com/",
  },
  {
    name: "crisscross",
    date: "20230708",
    thumbnail: "crisscross_1.jpeg",
    numImages: 1,
    location: "Minato-Ku, Tokyo",
    tags: ["#Melon Pancake ❤️️"],
    website: "https://www.strings-hotel.jp/omotesando/restaurant/tavern/",
  },
  {
    name: "Tavern by the Green",
    date: "20230701",
    thumbnail: "tavern_by_the_green_1.jpeg",
    numImages: 5,
    location: "Minato-Ku, Tokyo",
    tags: ["#Our First Afternoon Tea 😋"],
    website: "https://www.strings-hotel.jp/omotesando/restaurant/tavern/",
  },
  {
    name: "Amam Dacotan",
    date: "20230701",
    thumbnail: "amam_dacotan_1.jpeg",
    numImages: 4,
    location: "Minato-Ku, Tokyo",
    tags: ["#BEST Bread Ever 🥖"],
    website: "https://amamdacotan.com/",
  },
  {
    name: "Tobiccho",
    date: "20230624",
    thumbnail: "tobiccho_1.jpeg",
    numImages: 2,
    location: "Enoshima, Kanagawa",
    tags: ["#Kaisendon"],
    website: "http://tobiccho.com/",
  },
  {
    name: "Komachi Street",
    date: "20230624",
    thumbnail: "komachi_street_1.jpeg",
    numImages: 7,
    location: "Kamakura, Kanagawa",
    tags: ["#Tabearuki"],
    website: "https://www.japan.travel/en/spot/1586/",
  },
  {
    name: "Benitsuru",
    date: "20230610",
    thumbnail: "benitsuru_1.jpeg",
    numImages: 2,
    location: "Taito-Ku, Tokyo",
    tags: ["#BEST Pancakes Ever 🥞"],
    website: "https://www.facebook.com/profile.php?id=100036174444589&ref=br_rs",
  },
  {
    name: "Vietnam Festival",
    date: "20230603",
    thumbnail: "vietnam_festival_1.jpeg",
    numImages: 4,
    location: "Shibuya-Ku, Tokyo",
    tags: ["#Food Festival!"],
    website: "http://www.vietnamfes.net/",
  },
  {
    name: "Loncafe",
    date: "20230527",
    thumbnail: "loncafe_1.jpeg",
    numImages: 2,
    location: "Meguro-Ku, Tokyo",
    tags: ["#sweet & savory french toast"],
    website: "https://loncafe.jp/",
  },
  {
    name: "Tototo",
    date: "20230519",
    thumbnail: "tototo_1.jpeg",
    numImages: 3,
    location: "Nakano-Ku, Tokyo",
    tags: ["#Japanese Style Pizza 🍕"],
    website: "https://www.instagram.com/tototo_official/?hl=en",
  },
  {
    name: "Chez Tomo Ginza",
    date: "20230122",
    thumbnail: "chez_tomo_ginza_1.jpeg",
    numImages: 9,
    location: "Chuo-Ku, Tokyo",
    tags: ["#Your Birthday Dinner 😙"],
    website: "http://www.chez-tomo.com/",
  },
  {
    name: "Momobukuro",
    date: "20230122",
    thumbnail: "momobukuro_1.jpeg",
    numImages: 2,
    location: "Toshima-Ku, Tokyo",
    tags: ["#10/10 Parfait experience"],
    website: "https://risotteria-gaku.net",
  },
  {
    name: "Path",
    date: "20230122",
    thumbnail: "path_1.jpeg",
    numImages: 2,
    location: "Shibuya-Ku, Tokyo",
    tags: ["#definitely-worth-the-wait Dutch pancake"],
    website: "https://tabelog.com/en/tokyo/A1318/A131810/13190786/",
  },
  {
    name: "Woodberry Coffee",
    date: "20230112",
    thumbnail: "woodberry_coffee_1.jpeg",
    numImages: 3,
    location: "Suginami-Ku, Tokyo",
    tags: ["#hidden gem in Ogikubo"],
    website: "https://woodberrycoffee.com/",
  },
  {
    name: "Tofu Shokudo",
    date: "20230110",
    thumbnail: "tofu_shokudo_1.jpeg",
    numImages: 3,
    location: "Shibuya-Ku, Tokyo",
    tags: ["#tofu paradise"],
    website: "https://tofushokudo.com/en/",
  },
  {
    name: "Smokehouse",
    date: "20220821",
    thumbnail: "smokehouse_1.jpeg",
    numImages: 3,
    location: "Shibuya-Ku, Tokyo",
    tags: ["#beer and meat"],
    website: "https://www.tysons.jp/smokehouse/",
  },
  {
    name: "Yakiniku Koyo",
    date: "20220720",
    thumbnail: "yakiniku_koyo_1.jpeg",
    numImages: 2,
    location: "Shinagawa-Ku, Tokyo",
    tags: ["#must-go yakiniku in Osaki Pt.2"],
    website: "https://tabelog.com/tokyo/A1316/A131604/13020181/",
  },
  {
    name: "CICADA",
    date: "20220719",
    thumbnail: "cicada_1.jpeg",
    numImages: 6,
    location: "Minato-Ku, Tokyo",
    tags: ["#good food and good vibes 😙"],
    website: "https://www.tysons.jp/cicada/en/",
  },
  {
    name: "Kooriya Peace",
    date: "20220718",
    thumbnail: "kooriya_peace_1.jpeg",
    numImages: 3,
    location: "Musashino-Ku, Tokyo",
    tags: ["#shaved ice on steroids"],
    website: "https://twitter.com/kooriya_peace",
  },
  {
    name: "Yakun",
    date: "20220711",
    thumbnail: "yakun_1.jpeg",
    numImages: 2,
    location: "Shinjuku-Ku, Tokyo",
    tags: ["#we tried EVERY toast 🤩"],
    website: "https://yakun.jp/",
  },
  {
    name: "Tim Ho Wan",
    date: "20220705",
    thumbnail: "tim_ho_wan_1.jpeg",
    numImages: 3,
    location: "Shinjuku-Ku, Tokyo",
    tags: ["#our first Michelin experience ⭐"],
    website: "https://timhowan.jp/en/",
  },
  {
    name: "Pancake House",
    date: "20220702",
    thumbnail: "pancake_house_1.jpeg",
    numImages: 2,
    location: "Musashino-Ku, Tokyo",
    tags: ["#cheese inside a Pancake!"],
    website: "http://pancake-house.jp/kichijyoji-food/",
  },
  {
    name: "Tsukumi",
    date: "20220623",
    thumbnail: "tsukumi_1.jpeg",
    numImages: 2,
    location: "Suginami-Ku, Tokyo",
    tags: ["#Mochi Dessert 🥰"],
    website: "https://byo.co.jp/tsukumi/",
  },
  {
    name: "Tokyo Tojan Seikatsu",
    date: "20220618",
    thumbnail: "tokyo_tojan_seikatsu_1.jpeg",
    numImages: 4,
    location: "Shinagawa-Ku, Tokyo",
    tags: ["#Taiwan Style Breakfast"],
    website: "https://twitter.com/Tokyodoujan",
  },
  {
    name: "T.Y. Harbor",
    date: "20220618",
    thumbnail: "t.y._harbor_1.jpeg",
    numImages: 5,
    location: "Shinagawa-Ku, Tokyo",
    tags: ["#Awesome Food and Ambience"],
    website: "https://www.tysons.jp/tyharbor/",
  },
  {
    name: "Janai Coffee",
    date: "20220617",
    thumbnail: "janai_coffee_1.jpeg",
    numImages: 3,
    location: "Shibuya-Ku, Tokyo",
    tags: ["#A hidden bar 🤫"],
    website: "https://janaicoffee.tokyo/",
  },
  {
    name: "Yakiniku Masan",
    date: "20220616",
    thumbnail: "yakiniku_masan_1.jpeg",
    numImages: 3,
    location: "Shinagawa-Ku, Tokyo",
    tags: ["#must-go Yakiniku in Osaki Pt.1"],
    website: "",
  },
  {
    name: "Ivy Place",
    date: "20220611",
    thumbnail: "ivy_place_1.jpeg",
    numImages: 2,
    location: "Shibuya-Ku, Tokyo",
    tags: ["#fire brunch pancakes 🔥"],
    website: "https://www.tysons.jp/ivyplace/en/",
  },
  {
    name: "Good Cheese Good Pizza",
    date: "20220608",
    thumbnail: "good_cheese_good_pizza_1.jpeg",
    numImages: 2,
    location: "Chiyoda-Ku, Tokyo",
    tags: ["#cheese 🧀"],
    website: "https://goodcheesegoodpizza.com/",
  },
  {
    name: "Moana Kitchen Cafe",
    date: "20220530",
    thumbnail: "moana_kitchen_cafe_1.jpeg",
    numImages: 2,
    location: "Shibuya-Ku, Tokyo",
    tags: ["#hawaiian food"],
    website: "http://www.rincrew.co.jp/moana/",
  },
  {
    name: "Bills",
    date: "20220528",
    thumbnail: "bills_1.jpeg",
    numImages: 3,
    location: "Shibuya-Ku, Tokyo",
    tags: ["#our first brunch date in Japan!"],
    website: "https://billsjapan.com/en/omotesando",
  },
  {
    name: "Los Angeles Balcony",
    date: "20220527",
    thumbnail: "los_angeles_balcony_1.jpeg",
    numImages: 3,
    location: "Shinagawa-Ku, Tokyo",
    tags: ["#delicious, free, and flavored water (and food)"],
    website: "https://www.los-angeles-balcony.com/restaurant.html",
  },
  {
    name: "El Caliente",
    date: "20220528",
    thumbnail: "el_caliente_1.jpeg",
    numImages: 3,
    location: "Minato-Ku, Tokyo",
    tags: ["#good Mexican food and cocktails"],
    website: "https://www.huge.co.jp/restaurant/modern-mexicano/elcaliente",
  },
];

export const globalRestaurants: Restaurant[] = [
  {
    name: "Waterman Grille",
    date: "20230418",
    thumbnail: "waterman_grille_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 4,
    tags: ["#the cheese plate 😍"],
    website: "https://www.watermangrille.com/",
  },
  {
    name: "Coffee Connection",
    date: "20230416",
    thumbnail: "coffee_connection_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 1,
    tags: ["#our go-to for acai bowl (AND almond toast)"],
    website: "https://coffeeconnectionri.com/",
  },
  {
    name: "Heng Thai",
    date: "20230416",
    thumbnail: "heng_thai_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 3,
    tags: ["#duck duck soup soup"],
    website: "https://www.hengpvd.com/home",
  },
  {
    name: "Pickerel",
    date: "20230403",
    thumbnail: "pickerel_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 2,
    tags: ["#solid ramen restaurant"],
    website: "http://pckrl.com/",
  },
  {
    name: "The Capital Grille",
    date: "20230319",
    thumbnail: "the_capital_grille_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 6,
    tags: ["#ONE YEAR 😍"],
    website: "https://www.thecapitalgrille.com/home",
  },
  {
    name: "Madrid",
    date: "20230319",
    thumbnail: "madrid_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 1,
    tags: ["#FANCY pastries"],
    website: "https://www.madrideuropeanbakery.com/",
  },
  {
    name: "Shabu Zen",
    date: "20230315",
    thumbnail: "shabu_zen_1.jpeg",
    location: "Boston, USA",
    numImages: 1,
    tags: ["#shabu shabu dinner before keshi!"],
    website: "https://www.shabuzen.com/",
  },
  {
    name: "Sydney Providence",
    date: "20230315",
    thumbnail: "sydney_providence_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 5,
    tags: ["#our favorite brunch spot"],
    website: "https://www.sydneypvd.com/",
  },
  {
    name: "India Restaurant",
    date: "20230214",
    thumbnail: "india_restaurant_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 3,
    tags: ["#naan basket 💀"],
    website: "https://indiarestaurant.com/",
  },
  {
    name: "Pastiche",
    date: "20221130",
    thumbnail: "pastiche_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 2,
    tags: ["#we need to try their fruit tart 😔"],
    website: "https://pastichefinedesserts.com/",
  },
  {
    name: "The River Social",
    date: "20221126",
    thumbnail: "the_river_social_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 3,
    tags: ["#10/10 flavor and presentation"],
    website: "https://www.theriversocial.com/",
  },
  {
    name: "Snowport Holiday Market",
    date: "20221125",
    thumbnail: "snowport_holiday_market_1.jpeg",
    location: "Boston, USA",
    numImages: 3,
    tags: ["#christmas festival!"],
    website: "https://www.bostonseaport.xyz/holidaymarket/",
  },
  {
    name: "Ganko Ittetsu Ramen",
    date: "20221120",
    thumbnail: "ganko_ittetsu_ramen_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 3,
    tags: ["#you will be missed"],
    website: "https://gankoramen.com/",
  },
  {
    name: "Dolores",
    date: "20221119",
    thumbnail: "dolores_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 4,
    tags: ["#that cheese appetizer OMG"],
    website: "https://www.dolorespvd.com/",
  },
  {
    name: "Gyukaku",
    date: "20221106",
    thumbnail: "gyukaku_1.jpeg",
    location: "Boston, USA",
    numImages: 2,
    tags: ["#gyukaku never misses"],
    website: "https://www.gyu-kaku.com/southbay/",
  },
  {
    name: "Tatte",
    date: "20221106",
    thumbnail: "tatte_1.jpeg",
    location: "Boston, USA",
    numImages: 1,
    tags: ["#after boston career forum 🕴"],
    website: "https://tattebakery.com/",
  },
  {
    name: "Den Den Asiana",
    date: "20221030",
    thumbnail: "den_den_asiana_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 4,
    tags: ["#authentic Japanese food"],
    website: "https://www.dendenhospitality.com/dendencafe",
  },
  {
    name: "Providence Donut",
    date: "20220925",
    thumbnail: "providence_donut_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 3,
    tags: ["#the day we devoured 6 HUGE donuts"],
    website: "https://www.pvdonuts.com/",
  },
  {
    name: "Persimmon",
    date: "20220921",
    thumbnail: "persimmon_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 7,
    tags: ["#Foie gras"],
    website: "http://www.persimmonri.com/",
  },
  {
    name: "Louis Family Restaurant",
    date: "20220904",
    thumbnail: "louis_family_restaurant_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 2,
    tags: ["#I wish I could eat their pancakes every day"],
    website: "https://www.louisrestaurant.org/",
  },
  {
    name: "IL MASSIMO",
    date: "20220516",
    thumbnail: "il_massimo_1.jpeg",
    numImages: 5,
    location: "Providence, RI, USA",
    tags: ["#The place I learned how to pronounce gnocchi"],
    website: "https://massimori.com/",
  },
  {
    name: "Ceremony",
    date: "20230516",
    thumbnail: "ceremony_1.jpeg",
    location: "Providence, RI, USA",
    numImages: 2,
    tags: ["#Our favorite study spot"],
    website: "https://www.ceremonypvd.com/",
  },
  {
    name: "Nami",
    date: "20220501",
    thumbnail: "nami_1.jpeg",
    numImages: 3,
    location: "Providence, RI, USA",
    tags: ["#the beef roll was SOOO GOOOD"],
    website: "https://namiprov.com/",
  },
  {
    name: "Soban",
    date: "20220430",
    thumbnail: "soban_1.jpeg",
    numImages: 1,
    location: "Providence, RI, USA",
    tags: ["#kimchi fried rice"],
    website: "https://www.sobanbbqchicken.com/",
  },
  {
    name: "Mokban Korean Bistro",
    date: "20220319",
    thumbnail: "mokban_korean_bistro_1.jpeg",
    numImages: 4,
    location: "Providence, RI, USA",
    tags: ["#our first official date 😉"],
    website: "https://www.mokban.com/",
  },
  {
    name: "Den Den Korean Fried Chicken",
    date: "20220310",
    thumbnail: "den_den_korean_fried_chicken_1.jpeg",
    numImages: 7,
    location: "Providence, RI, USA",
    tags: ["#our first unofficial date 😉"],
    website: "https://www.dendenhospitality.com/dendenfriedchicken",
  },
];

export const numRs = restaurants.length;
export const numGRs = globalRestaurants.length;
