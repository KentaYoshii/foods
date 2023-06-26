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

export const perPage = 5;

export const restaurants: Restaurant[] = [
  {
    name: "Tokyo Tojan Seikatsu",
    date: "20220618",
    thumbnail: "tokyo_tojan_seikatsu_1.jpeg",
    numImages: 4,
    location: "Shinagawa-Ku, Tokyo",
    tags: ["Taiwanese"],
    website: "https://twitter.com/Tokyodoujan",
  },
  {
    name: "T.Y. Harbor",
    date: "20220618",
    thumbnail: "t.y._harbor_1.jpeg",
    numImages: 5,
    location: "Shinagawa-Ku, Tokyo",
    tags: ["American"],
    website: "https://www.tysons.jp/tyharbor/",
  },
  {
    name: "Yakiniku Masan",
    date: "20220616",
    thumbnail: "yakiniku_masan_1.jpeg",
    numImages: 3,
    location: "Shinagawa-Ku, Tokyo",
    tags: ["Korean"],
    website: "",
  },
  {
    name: "Moana Kitchen Cafe",
    date: "20220530",
    thumbnail: "moana_kitchen_cafe_1.jpeg",
    numImages: 2,
    location: "Shibuya-Ku, Tokyo",
    tags: ["Hawaiian"],
    website: "http://www.rincrew.co.jp/moana/",
  },
  {
    name: "Bills",
    date: "20220528",
    thumbnail: "bills_1.jpeg",
    numImages: 3,
    location: "Shibuya-Ku, Tokyo",
    tags: ["Western"],
    website: "https://billsjapan.com/en/omotesando",
  },
  {
    name: "El Caliente",
    date: "20220528",
    thumbnail: "el_caliente_1.jpeg",
    numImages: 3,
    location: "Minato-Ku, Tokyo",
    tags: ["Mexican"],
    website: "https://www.huge.co.jp/restaurant/modern-mexicano/elcaliente",
  },
]

export const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      title: "foo"
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      title: "foo"
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      title: "foo"
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      title: "foo"
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      title: "foo"
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      title: "foo"
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      title: "foo"
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      title: "foo"
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      title: "foo"
    },
    {
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "foo"
    },
    {
      src: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
      title: "foo"
    }
  ];
  
  export const numRs = restaurants.length
