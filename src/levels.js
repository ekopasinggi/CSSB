const levels = [
  {
    id: 1,
    name: "Simply Square",
    image: "/targets/1.png",
    colors: ["#5d3a3a", "#b5e0ba"]
  },
  {
    id: 2,
    name: "Carrom",
    image: "/targets/2.png",
    colors: ["#62374e", "#fdc57b"]
  },
  {
    id: 3,
    name: "Push Button",
    image: "/targets/3.png",
    colors: ["#6592CF", "#243D83", "#EEB850"]
  },
  {
    id: 4,
    name: "Ups n Downs",
    image: "/targets/4.png",
    colors: ["#62306D", "#F7EC7D"]
  },
  {
    id: 5,
    name: "Acid Rain",
    image: "/targets/5.png",
    colors: ["#0B2429", "#F3AC3C", "#998235"]
  },
  {
    id: 6,
    name: "Missing Slice",
    image: "/targets/6.png",
    colors: ["#E3516E", "#F7F3D7", "#51B5A9", "#FADE8B"]
  },
  {
    id: 7,
    name: "Leafy Trail",
    image: "/targets/7.png",
    colors: ["#0B2429", "#F3AC3C", "#998235", "#1A4341"]
  },
  {
    id: 8,
    name: "Forking Crazy",
    image: "/targets/8.png",
    colors: ["#6592CF", "#060F55"]
  },
  {
    id: 9,
    name: "Tesseract",
    image: "/targets/9.png",
    colors: ["#222730", "#4CAAB3", "#393E46"]
  },
  {
    id: 10,
    name: "Cloaked Spirits",
    image: "/targets/10.png",
    colors: ["#62306D", "#F7EC7D", "#AA445F", "#E38F66"]
  },
  {
    id: 11,
    name: "Eye of Sauron",
    image: "/targets/11.png",
    colors: ["#191210", "#ECA03D", "#84271C"]
  },
  {
    id: 12,
    name: "Wiggly Moustache",
    image: "/targets/12.png",
    colors: ["#F5D6B4", "#D86F45"]
  },
  {
    id: 13,
    name: "Totally Triangle",
    image: "/targets/13.png",
    colors: ["#0B2429", "#F3AC3C"]
  },
  {
    id: 14,
    name: "Web Maker Logo",
    image: "/targets/14.png",
    colors: ["#F2F2B6", "#FF6D00", "#FD4602"]
  },
  {
    id: 15,
    name: "Overlap",
    image: "/targets/15.png",
    colors: ["#09042A", "#7B3F61", "#E78481"]
  },
  {
    id: 16,
    name: "Eye of the Tiger",
    image: "/targets/16.png",
    colors: ["#0B2429", "#998235", "#F3AC3C"]
  },
  {
    id: 17,
    name: "Fidget Spinner",
    image: "/targets/17.png",
    colors: ["#09042A", "#E78481", "#F5BB9C"]
  },
  {
    id: 18,
    name: "Matrix",
    image: "/targets/18.png",
    colors: ["#5C434C", "#F09462", "#F5D6B4"]
  },
  {
    id: 19,
    name: "Cube",
    image: "/targets/19.png",
    colors: ["#0B2429", "#F3AC3C", "#998235", "#1A4341"]
  },
  {
    id: 20,
    name: "Ticket",
    image: "/targets/20.png",
    colors: ["#62306D", "#F7EC7D", "#E38F66"]
  },
  {
    id: 21,
    name: "SitePoint Logo",
    image: "/targets/21.png",
    colors: ["#222", "#F2994A", "#2D9CDB"]
  },
  {
    id: 22,
    name: "Cloud",
    image: "/targets/22.png",
    colors: ["#F5D6B4", "#D86F45"]
  },
  {
    id: 23,
    name: "Boxception",
    image: "/targets/23.png",
    colors: ["#F3AC3C", "#1A4341", "#998235"]
  },
  {
    id: 24,
    name: "Switches",
    image: "/targets/24.png",
    colors: ["#62306D", "#F7EC7D", "#AA445F", "#E38F66"]
  },
  {
    id: 25,
    name: "Blossom",
    image: "/targets/25.png",
    colors: ["#998235", "#1A4341", "#F3AC3C"]
  },
  {
    id: 26,
    name: "Smiley",
    image: "/targets/26.png",
    colors: ["#6592CF", "#060F55"]
  },
  {
    id: 27,
    name: "Lock Up",
    image: "/targets/27.png",
    colors: ["#E38F66", "#AA445F", "#F7EC7D"]
  },
  {
    id: 28,
    name: "Cups & Balls",
    image: "/targets/28.png",
    colors: ["#1A4341", "#998235", "#F3AC3C"]
  },
  {
    id: 29,
    name: "Suffocate",
    image: "/targets/29.png",
    colors: ["#F3AC3C", "#1A4341"]
  },
  {
    id: 30,
    name: "Horizon",
    image: "/targets/30.png",
    colors: ["#F7EC7D", "#E38F66", "#AA445F", "#62306D"]
  },
  {
    id: 31,
    name: "Equals",
    image: "/targets/31.png",
    colors: ["#AA445F", "#F7EC7D", "#E38F66"]
  },
  {
    id: 32,
    name: "Band-aid",
    image: "/targets/32.png",
    colors: ["#FFFFFF", "#F3AC3C", "#A3A368", "#FBE18C"]
  },
  {
    id: 33,
    name: "Birdie",
    image: "/targets/33.png",
    colors: ["#1A4341", "#998235", "#F3AC3C", "#0B2429"]
  },
  {
    id: 34,
    name: "Christmas Tree",
    image: "/targets/34.png",
    colors: ["#007065", "#FFEECF", "#F5C181", "#00A79D"]
  },
  {
    id: 35,
    name: "Ice Cream",
    image: "/targets/35.png",
    colors: ["#293462", "#FFF1C1", "#FE5F55", "#A64942"]
  },
  {
    id: 36,
    name: "Interleaved",
    image: "/targets/36.png",
    colors: ["#1A4341", "#F3AC3C", "#998235"]
  },
  {
    id: 37,
    name: "Tunnel",
    image: "/targets/37.png",
    colors: ["#6592CF", "#243D83"]
  },
  {
    id: 38,
    name: "Not Simply Square",
    image: "/targets/38.png",
    colors: ["#293462", "#FFF1C1", "#FE5F55", "#A64942"]
  },
  {
    id: 39,
    name: "Sunset",
    image: "/targets/39.png",
    colors: ["#1A4341", "#F3AC3C", "#998235"]
  },
  {
    id: 40,
    name: "Letter B",
    image: "/targets/40.png",
    colors: ["#6592CF", "#243D83"]
  },
  {
    id: 41,
    name: "Fox Head",
    image: "/targets/41.png",
    colors: ["#293462", "#FE5F55"]
  },
  {
    id: 42,
    name: "Baby",
    image: "/targets/42.png",
    colors: ["#293462", "#FE5F55", "#FFF1C1"]
  },
  {
    id: 43,
    name: "Wrench",
    image: "/targets/43.png",
    colors: ["#6592CF", "#243D83"]
  },
  {
    id: 44,
    name: "Stripes",
    image: "/targets/44.png",
    colors: ["#1A4341", "#F3AC3C"]
  },
  {
    id: 45,
    name: "Magical Tree",
    image: "/targets/45.png",
    colors: ["#1A4341", "#F3AC3C", "#998235"]
  },
  {
    id: 46,
    name: "Mountains",
    image: "/targets/46.png",
    colors: ["#293462", "#FFF1C1", "#FE5F55"]
  },
  {
    id: 47,
    name: "Corona Virus",
    image: "/targets/47.png",
    colors: ["#1A4341", "#F3AC3C", "#998235"]
  },
  {
    id: 48,
    name: "Wash Your Hands",
    image: "/targets/48.png",
    colors: ["#293462", "#FE5F55", "#A64942"]
  },
  {
    id: 49,
    name: "Stay at Home",
    image: "/targets/49.png",
    colors: ["#6592CF", "#243D83", "#EEB850"]
  },
  {
    id: 50,
    name: "Use Hand Sanitizer",
    image: "/targets/50.png",
    colors: ["#1A4341", "#F3AC3C", "#998235"]
  },
  {
    id: 51,
    name: "Wear a Mask",
    image: "/targets/51.png",
    colors: ["#293462", "#FFF1C1", "#FE5F55"]
  },
  {
    id: 52,
    name: "Break the Chain",
    image: "/targets/52.png",
    colors: ["#6592CF", "#243D83", "#EEB850"]
  },
  {
    id: 53,
    name: "Pastel Logo",
    image: "/targets/53.png",
    colors: ["#19191A", "#4F77FF", "#9AD5FF", "#F9E492"]
  },
  {
    id: 54,
    name: "Black Lives Matter",
    image: "/targets/54.png",
    colors: ["#191919", "#F9E492"]
  },
  {
    id: 55,
    name: "Windmill",
    image: "/targets/55.png",
    colors: ["#191919", "#F9E492", "#4F77FF"]
  },
  {
    id: 56,
    name: "Skull",
    image: "/targets/56.png",
    colors: ["#191919", "#4F77FF"]
  },
  {
    id: 57,
    name: "Pillars",
    image: "/targets/57.png",
    colors: ["#191919", "#4F77FF", "#F9E492"]
  },
  {
    id: 58,
    name: "Rose",
    image: "/targets/58.png",
    colors: ["#191919", "#4F77FF", "#F9E492"]
  },
  {
    id: 59,
    name: "Earth",
    image: "/targets/59.png",
    colors: ["#191919", "#4F77FF"]
  },
  {
    id: 60,
    name: "Evil Triangles",
    image: "/targets/60.png",
    colors: ["#191919", "#4F77FF"]
  },
  {
    id: 61,
    name: "ImprovMX",
    image: "/targets/61.png",
    colors: ["#191919", "#5DBCF9"]
  },
  {
    id: 62,
    name: "Sunset",
    isOpen: true,
    image: "/targets/62.png",
    colors: ["#191919", "#F2AD43", "#E08027", "#824B20", "#FFF58F"]
  },
  {
    id: 63,
    name: "Command Key",
    image: "/targets/63.png",
    colors: ["#191919", "#5DBCF9"]
  },
  {
    id: 64,
    name: "Door Knob",
    image: "/targets/64.png",
    colors: ["#191919", "#E08027", "#824B20", "#FFF58F"]
  },
  {
    id: 65,
    name: "Max Volume",
    image: "/targets/65.png",
    colors: ["#191919", "#5DBCF9"]
  },
  {
    id: 66,
    name: "Batmicky",
    image: "/targets/66.png",
    colors: ["#191919", "#F2AD43"]
  },
  {
    id: 67,
    name: "Video Reel",
    image: "/targets/67.png",
    colors: ["#191919", "#5DBCF9"]
  },
  {
    id: 68,
    name: "Bell",
    image: "/targets/68.png",
    colors: ["#191919", "#E08027", "#F2AD43", "#824B20"]
  },
  {
    id: 69,
    name: "PushOwl",
    image: "/targets/69.png",
    colors: ["#191919", "#E08027"],
    isOpen: true
  },
  {
    id: 70,
    name: "Froggy",
    image: "/targets/70.png",
    colors: ["#293462", "#FE5F55", "#A64942", "#FFF1C1"]
  },
  {
    id: 71,
    name: "Elephant",
    image: "/targets/71.png",
    colors: ["#998235", "#1A4341", "#0B2429", "#FFFFFF"],
    isOpen: true
  },
  {
    id: 72,
    name: "Sheep",
    image: "/targets/72.png",
    colors: ["#243D83", "#6592CF"]
  },
  {
    id: 73,
    name: "Happy Tiger",
    image: "/targets/73.png",
    colors: ["#F3AC3C", "#998235", "#1A4341", "#FFFFFF"],
    isOpen: true
  },
  {
    id: 74,
    name: "Danger Noodle",
    image: "/targets/74.png",
    colors: ["#191919", "#E08027"]
  },
  {
    id: 75,
    name: "Hippo",
    image: "/targets/75.png",
    colors: ["#191919", "#A64942", "#FE5F55", "#000000"]
  },
  {
    id: 76,
    name: "Beeee",
    image: "/targets/76.png",
    colors: ["#998235", "#FFFFFF", "#EFF33C", "#191919"]
  },
  {
    id: 77,
    name: "Notes",
    image: "/targets/77.png",
    colors: ["#191919", "#FE5F55", "#A64942"]
  },
  {
    id: 78,
    name: "Ukulele",
    image: "/targets/78.png",
    colors: ["#F3AC3C", "#998235", "#1A4341"]
  },
  {
    id: 79,
    name: "Tambourine",
    image: "/targets/79.png",
    colors: ["#243D83", "#6592CF"]
  },
  {
    id: 80,
    name: "Piano",
    image: "/targets/80.png",
    colors: ["#998235", "#191919", "#FFFFFF"]
  },
  {
    id: 81,
    name: "Odoo",
    image: "/targets/81.png",
    colors: ["#191919", "#714B67", "#8F8F8F"]
  },
  {
    id: 82,
    name: "Diamond Cut",
    image: "/targets/82.png",
    colors: ["#F3AC3C", "#998235", "#1A4341"]
  },
  {
    id: 83,
    name: "Supernova",
    image: "/targets/83.png",
    colors: ["#243D83", "#6592CF", "#EEB850"]
  },
  {
    id: 84,
    name: "Junction",
    isOpen: true,
    image: "/targets/84.png",
    colors: ["#191919", "#A64942", "#FE5F55"]
  },
  {
    id: 85,
    name: "Pythagoras",
    image: "/targets/85.png",
    colors: ["#D25B70", "#F7F3DA", "#F6DF96", "#6CB3A9"]
  },
  {
    id: 86,
    name: "Stairway",
    image: "/targets/86.png",
    colors: ["#191919", "#4F77FF"]
  },
  {
    id: 87,
    name: "Building Blocks",
    image: "/targets/87.png",
    colors: ["#F3AC3C", "#1A4341"]
  },
  {
    id: 88,
    name: "Tight Corner",
    image: "/targets/88.png",
    colors: ["#F7F3DA", "#D25B70"]
  },
  {
    id: 89,
    name: "Summit",
    image: "/targets/89.png",
    colors: ["#191919", "#F9E492", "#4F77FF"]
  },
  {
    id: 90,
    name: "Eclipse",
    image: "/targets/90.png",
    colors: ["#998235", "#F3AC3C", "#1A4341"]
  },
  {
    id: 91,
    name: "Reflection",
    image: "/targets/91.png",
    colors: ["#6CB3A9", "#D25B70", "#F6DF96"],
    isOpen: true
  },
  {
    id: 92,
    name: "Squeeze",
    image: "/targets/92.png",
    colors: ["#6592CF", "#243D83"]
  },
  {
    id: 93,
    name: "Great Wall",
    image: "/targets/93.png",
    colors: ["#4F77FF", "#191919", "#F9E492", "#D6B73F"]
  },
  {
    id: 94,
    name: "Ripples",
    image: "/targets/94.png",
    colors: ["#0E2E2C", "#F3AC3C", "#998235"]
  },
  {
    id: 95,
    name: "Pokeball",
    image: "/targets/95.png",
    colors: ["#6CB3A9", "#D25B70", "#FFFFFF", "#781728", "#F6DF96"]
  },
  {
    id: 96,
    name: "Mandala",
    image: "/targets/96.png",
    colors: ["#6592CF", "#243D83"]
  },
  {
    id: 97,
    name: "Snowman",
    image: "/targets/97.png",
    colors: ["#AC474B", "#FFFFFF", "#0E1F2B", "#FFA63F"]
  },
  {
    id: 98,
    name: "Candle",
    image: "/targets/98.png",
    colors: ["#14313E", "#BA3E46", "#F3695A", "#F3AC3C"]
  },
  {
    id: 99,
    name: "Gift Box",
    image: "/targets/99.png",
    colors: ["#AC474B", "#FFFFFF"]
  },
  {
    id: 100,
    name: "CSSBattle",
    image: "/targets/100.png",
    colors: ["#14313E", "#FFDF00"],
    isOpen: true
  },
  {
    id: 101,
    name: "Sharingan",
    image: "/targets/101.png",
    colors: ["#161616", "#A22015", "#000000", "#E96A23"]
  },
  {
    id: 102,
    name: "One Piece",
    image: "/targets/102.png",
    colors: ["#000000", "#FFFFFF"]
  },
  {
    id: 103,
    name: "Super Saiyan",
    image: "/targets/103.png",
    colors: ["#161616", "#EBAE11", "#FFFFFF", "#FFDEB9"]
  },
  {
    id: 104,
    name: "Amegakure",
    image: "/targets/104.png",
    colors: ["#000000", "#37385A", "#9897AE", "#C0C3DB"]
  },
  {
    id: 105,
    name: "Ryuk",
    image: "/targets/105.png",
    colors: ["#BAC7CE", "#475862", "#000000", "#868A64", "#5A6042", "#4E2B24"]
  },
  {
    id: 106,
    name: "Ryuk's Apple",
    image: "/targets/106.png",
    colors: ["#000000", "#D4392D"],
    isOpen: true
  },
  {
    id: 107,
    name: "Sealing Wand",
    image: "/targets/107.png",
    colors: ["#161616", "#E96A23", "#FFFFFF", "#A22015"]
  },
  {
    id: 108,
    name: "Clow Card",
    image: "/targets/108.png",
    colors: ["#000000", "#E96A23", "#EBAE11"]
  },
  {
    id: 109,
    name: "Curtain",
    image: "/targets/109.png",
    colors: ["#191919", "#F6E59C"]
  },
  {
    id: 110,
    name: "Sunrays",
    image: "/targets/110.png",
    colors: ["#D25B70", "#F2E09F"]
  },
  {
    id: 111,
    name: "Rain Drops",
    image: "/targets/111.png",
    colors: ["#F3AC3C", "#254241"],
    isOpen: true
  },
  {
    id: 112,
    name: "Chevron",
    image: "/targets/112.png",
    colors: ["#6592CF", "#293D7E"]
  },
  {
    id: 113,
    name: "Black Light",
    image: "/targets/113.png",
    colors: ["#5776F6", "#191919"]
  },
  {
    id: 114,
    name: "Negative Box",
    image: "/targets/114.png",
    colors: ["#172D2C", "#E9AF53"]
  },
  {
    id: 115,
    name: "Droplet",
    image: "/targets/115.png",
    colors: ["#C36271", "#F2E09F"]
  },
  {
    id: 116,
    name: "Headphones",
    image: "/targets/116.png",
    colors: ["#293D7E", "#6E91CA"]
  },
  {
    id: 117,
    name: "Arineo",
    image: "/targets/117.png",
    colors: ["#FFFFFF", "#0088CA", "#2E2926"]
  },
  {
    id: 118,
    name: "Donkey Kong",
    image: "/targets/118.png",
    colors: ["#000000", "#AF067C", "#FFFFFF"]
  },
  {
    id: 119,
    name: "Pacman",
    image: "/targets/119.png",
    colors: ["#000000", "#E0E246", "#C74E4E", "#FFFFFF"]
  },
  {
    id: 120,
    name: "Tank",
    image: "/targets/120.png",
    colors: ["#000000", "#54C144", "#C74E4E", "#FFFFFF"],
    isOpen: true
  },
  {
    id: 121,
    name: "Duck Hunt",
    image: "/targets/121.png",
    colors: ["#1E92FF", "#6F6100", "#69D10A", "#441A0A"]
  },
  {
    id: 122,
    name: "Tetris",
    image: "/targets/122.png",
    colors: ["#173889", "#EE4F63", "#2CE1EA", "#F8DA37", "#B069F7"]
  },
  {
    id: 123,
    name: "Snake",
    image: "/targets/123.png",
    colors: ["#C74E4E", "#E0E246", "#FFFFFF"]
  },
  {
    id: 124,
    name: "Space Invaders",
    image: "/targets/124.png",
    colors: ["#071945", "#B069F7", "#F8DA37", "#2CE1EA"]
  },
  {
    id: 125,
    name: "Root Learn",
    image: "/targets/125.png",
    colors: ["#EFF2F1", "#1C1C1C"]
  },
  {
    id: 126,
    name: "Letter A",
    image: "/targets/126.png",
    colors: ["#62306D", "#FEF9CA", "#C5B732", "#E38F66", "#AA445F"]
  },
  {
    id: 127,
    name: "Letter I",
    image: "/targets/127.png",
    colors: ["#E3516E", "#FADE8B"]
  },
  {
    id: 128,
    name: "Letter N",
    image: "/targets/128.png",
    colors: ["#998235", "#0B2429", "#FCBE5C"]
  },
  {
    id: 129,
    name: "Letter B",
    image: "/targets/129.png",
    colors: ["#6592CF", "#515DBD", "#2E3B9F", "#060F55"]
  },
  {
    id: 130,
    name: "Letter O",
    image: "/targets/130.png",
    colors: ["#926927", "#FFFFFF", "#6D480A"],
    isOpen: true
  },
  {
    id: 131,
    name: "Letter W",
    image: "/targets/131.png",
    colors: ["#E38F66", "#62306D", "#FFFBDA"]
  },
  {
    id: 132,
    name: "Letter S",
    image: "/targets/132.png",
    colors: ["#4F77FF", "#FFFFFF", "#1038BF"]
  },
  {
    id: 133,
    name: "Spiral",
    image: "/targets/133.png",
    colors: ["#F5D6B4", "#D86F45"]
  },
  {
    id: 134,
    name: "Wig",
    image: "/targets/134.png",
    colors: ["#62306D", "#F7EC7D"]
  },
  {
    id: 135,
    name: "Spikes",
    image: "/targets/135.png",
    colors: ["#E3516E", "#D9D9D9"]
  },
  {
    id: 136,
    name: "Alien Eye",
    image: "/targets/136.png",
    colors: ["#998235", "#FCBE5C", "#0B2429"]
  },
  {
    id: 137,
    name: "Elbow",
    image: "/targets/137.png",
    colors: ["#6592CF", "#060F55"],
    isOpen: true
  },
  {
    id: 138,
    name: "Lotus",
    image: "/targets/138.png",
    colors: ["#926927", "#6D480A", "#FFFFFF"]
  },
  {
    id: 139,
    name: "Lamp",
    image: "/targets/139.png",
    colors: ["#E38F66", "#FFFBDA", "#62306D"]
  },
  {
    id: 140,
    name: "Eclipse",
    image: "/targets/140.png",
    colors: ["#4F77FF", "#1038BF", "#FFFFFF"]
  },
  {
    id: 141,
    name: "Third Eye",
    image: "/targets/141.png",
    colors: ["#E3516E", "#D9D9D9"]
  },
  {
    id: 142,
    name: "Curtains",
    image: "/targets/142.png",
    colors: ["#4F77FF", "#1038BF", "#FFFFFF"],
    isOpen: true
  },
  {
    id: 143,
    name: "Simply Circle",
    image: "/targets/143.png",
    colors: ["#F5D6B4", "#D86F45"]
  },
  {
    id: 144,
    name: "Long Heart",
    image: "/targets/144.png",
    colors: ["#62306D", "#F7EC7D"]
  },
  {
    id: 145,
    name: "Spotlight",
    image: "/targets/145.png",
    colors: ["#E3516E", "#D9D9D9"]
  },
  {
    id: 146,
    name: "Streaks",
    image: "/targets/146.png",
    colors: ["#998235", "#FCBE5C", "#0B2429"]
  },
  {
    id: 147,
    name: "Splash",
    image: "/targets/147.png",
    colors: ["#6592CF", "#060F55"]
  },
  {
    id: 148,
    name: "Eight",
    image: "/targets/148.png",
    colors: ["#926927", "#6D480A"],
    isOpen: true
  },
  {
    id: 149,
    name: "Earthworm",
    image: "/targets/149.png",
    colors: ["#E38F66", "#FFFBDA"]
  },
  {
    id: 150,
    name: "Finger Heart",
    image: "/targets/150.png",
    colors: ["#4F77FF", "#1038BF"]
  },
  {
    id: 151,
    name: "Pawn",
    image: "/targets/151.png",
    colors: ["#F5D6B4", "#D86F45"]
  },
  {
    id: 152,
    name: "Rook",
    image: "/targets/152.png",
    colors: ["#62306D", "#F7EC7D"]
  },
  {
    id: 153,
    name: "Checkers",
    image: "/targets/153.png",
    colors: ["#E3516E", "#FADE8B"]
  },
  {
    id: 154,
    name: "Poker Chip",
    image: "/targets/154.png",
    colors: ["#998235", "#FCBE5C", "#0B2429"]
  },
  {
    id: 155,
    name: "Snakes & Ladders",
    image: "/targets/155.png",
    colors: ["#6592CF", "#060F55"]
  },
  {
    id: 156,
    name: "Chinese Checkers",
    image: "/targets/156.png",
    colors: ["#926927", "#F8B140"]
  },
  {
    id: 157,
    name: "Monopoly",
    image: "/targets/157.png",
    colors: ["#E38F66", "#FFFBDA"]
  },
  {
    id: 158,
    name: "Clubs",
    image: "/targets/158.png",
    colors: ["#4F77FF", "#1038BF"]
  },
  {
    id: 159,
    name: "Portal",
    image: "/targets/159.png",
    colors: ["#F5D6B4", "#D86F45"]
  },
  {
    id: 160,
    name: "Donut",
    image: "/targets/160.png",
    colors: ["#62306D", "#F7EC7D", "#E38F66"]
  },
  {
    id: 161,
    name: "Converge",
    image: "/targets/161.png",
    colors: ["#E3516E", "#FADE8B"]
  },
  {
    id: 162,
    name: "Upwards",
    image: "/targets/162.png",
    colors: ["#998235", "#0B2429", "#FCBE5C"]
  },
  {
    id: 163,
    name: "Missing Piece",
    image: "/targets/163.png",
    colors: ["#D669EC", "#FDFBF8"]
  },
  {
    id: 164,
    name: "Rangoli",
    image: "/targets/164.png",
    colors: ["#66284A", "#D86F45", "#F0CD48", "#D669EC", "#FDFBF8"]
  },
  {
    id: 165,
    name: "Pyramid",
    image: "/targets/165.png",
    colors: ["#F0CD48", "#66284A"]
  },
  {
    id: 166,
    name: "Flow",
    image: "/targets/166.png",
    colors: ["#D86F45", "#FDFBF8"]
  }
];

module.exports = levels;
