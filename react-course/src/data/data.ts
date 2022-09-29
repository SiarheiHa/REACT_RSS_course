export interface Product {
  _id: string;
  set: string;
  item_id: number;
  reviews: number | null;
  rating: string;
  availability: string;
  price: number;
  images: string[];
  ages: string;
  pieces: number;
  __v: number;
}

export const data: Product[] = [
  {
    _id: '61df944eb226bd9df3bb4648',
    set: 'The Razor Crest',
    item_id: 752927529275292,
    reviews: 134,
    rating: '4.605769230769231',
    availability: 'Available now',
    price: 129,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt7a4292faec34e557/75292.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt077af3aa46f9b42b/102620-TOTY-SEAL-Winner.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '10+',
    pieces: 1023,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4647',
    set: 'The Razor Crest™ Microfighter',
    item_id: 753217532175321,
    reviews: 7,
    rating: '3.3333333333333335',
    availability: 'Available now',
    price: 9,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt171f4c54ba9ed347/75321.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 98,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb464a',
    set: 'Darth Vader™ Helmet',
    item_id: 753047530475304,
    reviews: 49,
    rating: '4.630434782608695',
    availability: 'Available now',
    price: 69,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt1e06a5f4283a952d/75304.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 834,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb464b',
    set: 'Darth Vader™ Meditation Chamber',
    item_id: 752967529675296,
    reviews: 16,
    rating: '4.068965517241379',
    availability: 'Available now',
    price: 69,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt234378cdb80fb126/75296.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 663,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4649',
    set: 'The Bad Batch™ Attack Shuttle',
    item_id: 753147531475314,
    reviews: 68,
    rating: '4.323529411764706',
    availability: 'Available now',
    price: 99,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltfaad030bea9058dd/75314.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '9+',
    pieces: 969,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb464d',
    set: 'Scout Trooper™ Helmet',
    item_id: 753057530575305,
    reviews: 18,
    rating: '4.62962962962963',
    availability: 'Available now',
    price: 49,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt38c3796dc167ea30/75305.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 471,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb464e',
    set: 'Imperial Armored Marauder',
    item_id: 753117531175311,
    reviews: 45,
    rating: '4.696078431372549',
    availability: 'Available now',
    price: 39,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blta1b9dee1d70375a5/75311.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '8+',
    pieces: 478,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb464c',
    set: 'Imperial Probe Droid™',
    item_id: 753067530675306,
    reviews: 68,
    rating: '3.925531914893617',
    availability: 'Available now',
    price: 59,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt3290b68ac1be98c4/75306.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 683,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb464f',
    set: 'AT-AT™ vs. Tauntaun™ Microfighters',
    item_id: 752987529875298,
    reviews: 11,
    rating: '4.352941176470588',
    availability: 'Available now',
    price: 19,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt258ef75def4d72a4/75298.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 205,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4652',
    set: 'Clone Trooper™ Command Station',
    item_id: 405584055840558,
    reviews: null,
    rating: '',
    availability: 'Available now',
    price: 14,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt35a770b4feabf626/40558.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 66,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4654',
    set: 'Ahsoka Tano™',
    item_id: 405394053940539,
    reviews: null,
    rating: '',
    availability: 'Available now',
    price: 9,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltad9845009a4ea9af/40539.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '10+',
    pieces: 164,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4651',
    set: 'Yoda™ Plush',
    item_id: 500662350066235000000,
    reviews: 4,
    rating: '3',
    availability: 'Available now',
    price: 19,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltc4d0b3b589de84e1/5006623.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4653',
    set: 'Defense of Hoth™',
    item_id: 405574055740557,
    reviews: null,
    rating: '',
    availability: 'Coming Soon',
    price: 14,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt3d4c03884f2f4a83/40557_Prod.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 64,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4650',
    set: 'Duel on Mandalore™',
    item_id: 753107531075310,
    reviews: 24,
    rating: '4.379310344827586',
    availability: 'Available now',
    price: 19,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltcf5d21ef51472416/75310.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '7+',
    pieces: 147,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4659',
    set: 'LEGO® Star Wars™ Chewbacca™ Key Chain',
    item_id: 853451853451853400,
    reviews: 8,
    rating: '4.384615384615385',
    availability: 'Available now',
    price: 5,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltcc7536ced48ec516/853451.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb465a',
    set: 'LEGO® Star Wars™ Darth Vader Key Chain',
    item_id: 850996850996851000,
    reviews: 5,
    rating: '4.909090909090909',
    availability: 'Available now',
    price: 5,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltc8f15ffb5bfece8e/850996.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4658',
    set: "LEGO® Star Wars™ Yoda's Galaxy Atlas",
    item_id: 500685350068535030000,
    reviews: null,
    rating: '',
    availability: 'Available now',
    price: 16,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt0560d710ff674ab3/5006853.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '7+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4656',
    set: 'Grogu Bag Tag',
    item_id: 500685550068555000000,
    reviews: null,
    rating: '',
    availability: 'Available now',
    price: 6,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt6e2bba40c9fc1812/5006855.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4657',
    set: 'LEGO® Star Wars™ Choose Your Path',
    item_id: 500565450056545000000,
    reviews: null,
    rating: '',
    availability: 'Available now',
    price: 19,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltddccbffebc4b46b4/5005654.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '7+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4655',
    set: 'Grogu™ Key Light',
    item_id: 500686050068605000000,
    reviews: 2,
    rating: '3',
    availability: 'Available now',
    price: 13,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltb1e15655fcae515c/5006860.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4660',
    set: 'Grogu™ Key Chain',
    item_id: 854187854187854200,
    reviews: null,
    rating: '',
    availability: 'Available now',
    price: 5,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt079573aad06242aa/854187.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt28cadfe2738e55e9/854187_Box3.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb465c',
    set: 'Stormtrooper™ Key Chain',
    item_id: 853946853946853900,
    reviews: 5,
    rating: '4.428571428571429',
    availability: 'Available now',
    price: 5,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt555d6ae390298356/853946.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb465f',
    set: 'Darth Maul™ Key Chain',
    item_id: 854188854188854100,
    reviews: null,
    rating: '',
    availability: 'Available now',
    price: 5,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt7ea2d01ce577dde1/854188.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltcdca87db9c06261e/854188_Box3.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb465e',
    set: 'Ahsoka Tano™ Key Chain',
    item_id: 854186854186854100,
    reviews: null,
    rating: '',
    availability: 'Coming Soon',
    price: 5,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt31c946c0eeb12475/854186.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt7a940c9f5617873d/854186_Box3.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb465d',
    set: 'The Mandalorian™ Key Chain',
    item_id: 854124854124854100,
    reviews: 5,
    rating: '4.6',
    availability: 'Available now',
    price: 5,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blteaaac655a9e2e850/854124.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4661',
    set: 'AT-AT™',
    item_id: 753137531375313,
    reviews: 112,
    rating: '4.36875',
    availability: 'Coming Soon',
    price: 799,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blta7b7b825b6d4fc0a/75313_Prod.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt2c75f7c81f1e3871/75313_Box1_v29.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt780cb78aa3a31878/75313_Front_01.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt14df2deb05d3b7c4/75313_Left_Side_01.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt712986086aba8e25/75313_Right_Side_01.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltf94c099722afe272/75313_Top_01.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltf7675aa339e8c718/75313_Back_06.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blteda2f2c6c1f83ab0/75313_Back_01.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt4ce84f8081d6233a/75313_Back_05.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt705c9c053273f516/75313_Box5_v29.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltd3aba4bdd93c9bbb/75313_Lifestyle_01.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltbf209f7e59854272/75313_Lifestyle_03.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt2afcceac61efe59e/75313_Lifestyle_04.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt17894da0d3d0550b/75313_Lifestyle_05.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt902deaee1caea431/75313_Lifestyle_08.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt103353fedc8afd6f/75313_Lifestyle_09.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt48c30c03744846bc/75313_Lifestyle_10.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltfbfb898b87b57e13/75313_Lifestyle_11.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltf0a7c6e0d8d4ec63/75313_Lifestyle_12.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt630924bcd15ec591/75313_Lifestyle_13.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt87d77b2985346ba3/75313_Lifestyle_14.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltac9ca691d02124b3/75313_Lifestyle_15.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt1492e70cab38cce9/75313_Lifestyle_16.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt628434fdbbf64271/75313_Lifestyle_17.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blta9c819f76b8d42c1/75313_Lifestyle_18.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blta1cf5fbea2b9a201/75313_Lifestyle_19.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blte47dff9d9d4e48a3/75313_Lifestyle_21.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt720a5ec67e285fb0/75313_Lifestyle_23.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt634db2837a6381fe/75313_Lifestyle_25.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltf88fe49e8e805370/75313_Lifestyle_27.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt8547c15d13656555/75313_Lifestyle_28.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt73ae508fea4d45ab/75313_Lifestyle_30.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt357ec5a03f2c8e23/75313_Lifestyle_Build.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt8221e3a5cab91f4a/75313_Lifestyle_build_crop.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltd4b57f6c6da38df0/75313_Lifestyle_cons_crop.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt5abb615512a10659/75313_Minifigure_AT-AT_Driver_01.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blta994451a785dd639/75313_Minifigure_General_Veers.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blta0eabc3b12d3a97e/75313_Minifigure_Luke_Skywalker.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blta1deb66d3522460b/75313_Minifigure_Snowtrooper_01.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt417cb9297f6d3e3e/75313_Minifigure_Snowtrooper_Commander.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 6785,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb465b',
    set: 'LEGO® Star Wars™ R2-D2™ Key Chain',
    item_id: 853470853470853500,
    reviews: 2,
    rating: '4.2',
    availability: 'Coming Soon',
    price: 5,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt526a9c42cdafd376/853470.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 1,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4664',
    set: 'Imperial Star Destroyer™',
    item_id: 752527525275252,
    reviews: 187,
    rating: '3.9323843416370106',
    availability: 'Coming Soon',
    price: 699,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt934044fa508776e2/75252.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '16+',
    pieces: 4784,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4665',
    set: 'Mos Eisley Cantina™',
    item_id: 752907529075290,
    reviews: 86,
    rating: '4.664335664335664',
    availability: 'Coming Soon',
    price: 349,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltb4d7806b805a25ef/75290.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 3187,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4663',
    set: 'Snowtrooper™ Battle Pack',
    item_id: 753207532075320,
    reviews: 13,
    rating: '4',
    availability: 'Coming Soon',
    price: 19,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blta68f547767fb6b51/75320_Prod.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt13ab8281b1cfaf86/75320_Box1_v39.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltacafbbc35cededdf/75320_WEB_SEC01_NOBG.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt78b05a239caa0a1d/75320_WEB_Lineup_NOBG.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt9cda2640359521f5/75320_WEB_SEC02_NOBG.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt6f09ab42782a02ff/75320_Box5_v39.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltac9c684ead4e40af/75320_Lifestyle_build_crop.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltf08631a08da6475b/75320_Lifestyle_cons_2.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt813cc3324f2b9c8e/75320_Lifestyle_cons_crop.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltaff8d45e0bb8ffa0/75320_Lifestyle_envr_crop.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '6+',
    pieces: 105,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4667',
    set: 'R2-D2™',
    item_id: 753087530875308,
    reviews: 77,
    rating: '4.508196721311475',
    availability: 'Coming Soon',
    price: 199,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt38e8915698af2d5f/75308.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 2314,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4669',
    set: 'AT-AT™',
    item_id: 752887528875288,
    reviews: 125,
    rating: '4.350515463917525',
    availability: 'Coming Soon',
    price: 159,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt7dc15f12b7f8c85f/75288.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '10+',
    pieces: 1267,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4668',
    set: 'Millennium Falcon™',
    item_id: 751927519275192,
    reviews: 477,
    rating: '4.613636363636363',
    availability: 'Available now',
    price: 799,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt95c35d4ed5665a49/75192.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '16+',
    pieces: 7541,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4666',
    set: 'Republic Gunship™',
    item_id: 753097530975309,
    reviews: 164,
    rating: '4.019607843137255',
    availability: 'Available now',
    price: 349,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt91c46d94ca062573/75309.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 3292,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb4662',
    set: 'LEGO® Star Wars™ Hoth™ AT-ST™',
    item_id: 753227532275322,
    reviews: 12,
    rating: '4.833333333333333',
    availability: 'Available now',
    price: 49,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltdc4e5203d8c945eb/75322_Prod.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt91ca9cf89e9ab9a0/75322_Box1_v39.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltb702904c1562df6f/75322_WEB_SEC02_NOBG.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blta2835fc7e13a7e3f/75322_WEB_SEC04_NOBG.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltf403fe1a2a9d8a82/75322_WEB_SEC03_NOBG.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt73dd8e3d182798c9/75322_WEB_SEC05_NOBG.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt87a57e14e49ee8d8/75322_Box5_v39.png?fit=bounds&format=png&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt32f53db61a6cd331/75322_Lifestyle_envr_crop.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt10512728d3b885c1/75322_Lifestyle_cons_2.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/blt1c2ddde49af2b952/75322_Lifestyle_cons_crop.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltc668ef3e8d8e567e/75322_Lifestyle_build_crop.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
      'https://www.lego.com/cdn/cs/set/assets/bltbd5dac7ea4825e72/75322_WEB_Lineup_NOBG.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    ],
    ages: '9+',
    pieces: 586,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb466c',
    set: 'Star Wars™ The Sith™',
    item_id: 312003120031200,
    reviews: 35,
    rating: '4.492753623188406',
    availability: 'Coming Soon',
    price: 119,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt956bfb05244f416b/31200.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '18+',
    pieces: 3406,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb466d',
    set: 'Death Star™ Final Duel',
    item_id: 752917529175291,
    reviews: 40,
    rating: '4.4423076923076925',
    availability: 'Coming Soon',
    price: 99,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt9f2b4aceebc941bc/75291.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '9+',
    pieces: 775,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb466e',
    set: 'Yoda™',
    item_id: 752557525575255,
    reviews: 96,
    rating: '4.4921875',
    availability: 'Coming Soon',
    price: 99,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/bltcbf69ce35da7ccc7/75255.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '10+',
    pieces: 1771,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb466b',
    set: 'Millennium Falcon™',
    item_id: 752577525775257,
    reviews: 100,
    rating: '4.618055555555555',
    availability: 'Coming Soon',
    price: 159,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt892f38a4fd55edeb/75257.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '9+',
    pieces: 1353,
    __v: 0,
  },
  {
    _id: '61df944eb226bd9df3bb466f',
    set: 'The Child',
    item_id: 753187531875318,
    reviews: 62,
    rating: '4.7894736842105265',
    availability: 'Coming Soon',
    price: 79,
    images: [
      'https://www.lego.com/cdn/cs/set/assets/blt4077c030eb5d127d/75318.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
    ],
    ages: '10+',
    pieces: 1073,
    __v: 0,
  },
];
