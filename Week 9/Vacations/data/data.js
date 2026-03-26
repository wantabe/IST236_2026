import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
    new Country("c1", "Mexico", "#ddcd45"), // breaking bad yellow
    new Country("c2", "Japan", "#bc002d"),
    new Country("c3", "Italy", "#008c45"),
    new Country("c4", "Australia", "#00008b"),
    new Country("c5", "Brazil", "#009c3b"),
    new Country("c6", "France", "#0055a4"),
    new Country("c7", "Thailand", "#a51931"),
    new Country("c8", "South Africa", "#007a4d"),
    new Country("c9", "Canada", "#ff0000"),
    new Country("c10", "Peru", "#d91023"),
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Tulum Beach Resort",
    120,
    2005,
    4.6,
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113296165.jpg?k=ba244c3f6ecdfc5d0595d62bb995f5e9a3b66ee084fe62e92eda9eaaa3acd543&o="
  ),
  new Destination(
    "d2",
    "c1",
    "Chichen Itza Eco Lodge",
    85,
    1998,
    4.3,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcVk8u4S2qpK3I80QSUwFVESUDB4jJj5mzA&s"
  ),
  new Destination(
    "d3",
    "c2",
    "Kyoto Garden Hotel",
    200,
    1990,
    4.8,
    "https://kyoto-ryokan.co.jp/images/top/main02.jpg"
  ),
  new Destination(
    "d4",
    "c2",
    "Tokyo Shibuya Stay",
    175,
    2010,
    4.5,
    "https://images.trvl-media.com/lodging/3000000/2700000/2692100/2692097/b0d8f9b4.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
  ),
  new Destination(
    "d5",
    "c3",
    "Amalfi Coast Villa",
    250,
    1985,
    4.9,
    "https://www.homeinitaly.com/_data/magazine/articles/2024-08-07-best-luxury-villas-in-the-amalfi-coast/the-best-luxury-villas-in-the-amalfi-coast-1.jpg"
  ),
  new Destination(
    "d6",
    "c3",
    "Tuscany Vineyard Retreat",
    190,
    1992,
    4.7,
    "https://media.cntraveller.com/photos/68824c85a1c5827f1d55fcaa/16:9/w_2560%2Cc_limit/lake-orta-my-favourite-villa-july24-pr-global-Copia%2520di%252058-_Z5B0073.jpg"
  ),
  new Destination(
    "d7",
    "c4",
    "Great Barrier Reef Resort",
    220,
    2001,
    4.8,
    "https://digital.ihg.com/is/image/ihg/intercontinental-hayman-island-6087710419-2x1"
  ),
  new Destination(
    "d8",
    "c4",
    "Uluru Desert Lodge",
    160,
    1996,
    4.4,
    "https://images.northernterritory.com/atdw-cache/images/5dc97af3f2835e25e2e4513822726c45.jpeg?rect=0%2C192%2C2048%2C1152&w=1200&h=630&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI3MzQ1YWVlZWFhZjc3M2QwNTMzMSIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwY2EiLCJhcGlrZXlJZCI6IjU2YjFmNjNmMGNmMjEzYWQyMGRlZGY2NSJ9&fit=crop&auto=enhance%2Ccompress"
  ),
  new Destination(
    "d9",
    "c5",
    "Amazon Jungle Ecolodge",
    95,
    2003,
    4.3,
    "https://www.quasarex.com/wp-content/themes/qex-child/inc/img/og/Ecuador-La-Selva-Ecolodge-Tour.jpg"
  ),
  new Destination(
    "d10",
    "c5",
    "Rio de Janeiro Beachfront Hotel",
    180,
    1988,
    4.6,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/db/8f/56/vista-hotel.jpg?w=1200&h=-1&s=1"
  ),
  new Destination(
    "d11",
    "c6",
    "Paris Montmartre Boutique Hotel",
    300,
    1975,
    4.7,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/8c/b8/c1/caption.jpg?w=500&h=-1&s=1"
  ),
  new Destination(
    "d12",
    "c6",
    "Provence Lavender Farmhouse",
    145,
    1999,
    4.5,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshOHkllwOwAsKXfqRBO3VrVKVYH_zR71W5Q&s"
  ),
  new Destination(
    "d13",
    "c7",
    "Phuket Beachside Resort",
    110,
    2007,
    4.6,
    "https://nerdnomads.com/wp-content/uploads/2023/01/Katathani-Phuket-Beach-Resort.jpg"
  ),
  new Destination(
    "d14",
    "c7",
    "Chiang Mai Mountain Retreat",
    75,
    1994,
    4.2,
    "https://media-cdn.tripadvisor.com/media/photo-s/05/96/9c/9b/getlstd-property-photo.jpg"
  ),
  new Destination(
    "d15",
    "c8",
    "Cape Town Clifton Beach Hotel",
    195,
    2002,
    4.8,
    "https://media.cntraveler.com/photos/5b7d7a0ecfb18b195808221c/16:9/w_2560,c_limit/Cape-View-Clifton_2018_pool-deck-7.jpg"
  ),
  new Destination(
    "d16",
    "c8",
    "Kruger Safari Lodge",
    280,
    1983,
    4.9,
    "https://www.krugerpark.co.za/images/kruger-national-park-safari-lodge-camp-shawu-786x416.jpg"
  ),
  new Destination(
    "d17",
    "c9",
    "Banff National Park Lodge",
    165,
    1978,
    4.7,
    "https://banfflakelouise.bynder.com/m/24a627bf9362e591/2000x1080_jpg-2023_Banff_Winter_BanffParkLodge.jpg"
  ),
  new Destination(
    "d18",
    "c9",
    "Niagara Falls Riverside Inn",
    130,
    1991,
    4.4,
    "https://www.seesight-tours.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Ftripshepherd-prod.firebasestorage.app%2Fo%2Fblogs%252Fimages%252Fkh5gb_blogs.jpg%3Falt%3Dmedia%26token%3Db014a6e0-b053-4896-96b6-c7b90d5c71e2&w=3840&q=75"
  ),
  new Destination(
    "d19",
    "c10",
    "Machu Picchu Sanctuary Lodge",
    350,
    1995,
    4.9,
    "https://img.belmond.com/f_auto/t_2580x1299/photos/mps/mps-ext02.jpg"
  ),
  new Destination(
    "d20",
    "c10",
    "Lake Titicaca Floating Hotel",
    115,
    2008,
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/dc/5f/01/caption.jpg?w=900&h=500&s=1"
  ),
];