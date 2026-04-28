import Book from "../models/book";

export const DUMMY_LISTS = [
    { id: "1", label: "To Read", desc: "Books to read" },
    { id: "2", label: "Favorites", desc: "Some favorites" },
    { id: "3", label: "Summer 2026", desc: "Books from Summer 2026" },
    { id: "4", label: "List 4" },
    { id: "5", label: "List 5" },
    { id: "6", label: "List 6" }
];

// id
// isbn
// genre
// title
// author
// rating
// desc
// imageurl
// page count

export const BOOKS = [
    // sci-fi
    new Book(
        1,
        "9780441172719",
        "sci-fi",
        "Dune",
        "Frank Herbert",
        5,
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to a dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of a precious resource in existence, only those who can conquer their own fear will survive.",
        "https://m.media-amazon.com/images/I/81DMp7F91LL._AC_UF1000,1000_QL80_.jpg",
        896
    ),
    new Book(
        2,
        "9780307387899",
        "sci-fi",
        "The Road",
        "Cormac McCarthy",
        4,
        "A father and his son walk alone through burned America. Nothing moves in the ravages landscape save the ash on the wind. it is cold enough to crack stones, and when the snow falls it is gray. The sky is dark. Their destination is the coast, although they don't know what, if anything, awaits them there. They have nothing; just a pistol to defend themselves against the lawless bands that stalk the road, the clothes they are wearing, a cart of scavenged food--and each other.",
        "https://m.media-amazon.com/images/I/51M7XGLQTBL._AC_UF1000,1000_QL80_.jpg",
        287
    ),
    new Book(
        3,
        "9780593135228",
        "sci-fi",
        "Project Hail Mary",
        "Andy Weir",
        4,
        "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he’s been asleep for a very, very long time. And he’s just been awakened to find himself millions of miles from home, with nothing but two corpses for company. His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, it’s up to him to puzzle out an impossible scientific mystery—and conquer an extinction-level threat to our species. And with the clock ticking down and the nearest human being light-years away, he’s got to do it all alone. Or does he?",
        "https://m.media-amazon.com/images/I/91ENQs2KLAL._SY466_.jpg",
        497
    ),
    new Book(
        4,
        "9780345539809",
        "sci-fi",
        "Red Rising",
        "Pierce Brown",
        4,
        "Darrow is a Red, a member of the lowest caste in the color-coded society of the future. Like his fellow Reds, he works all day, believing that he and his people are making the surface of Mars livable for future generations. Yet he toils willingly, trusting that his blood and sweat will one day result in a better world for his children. But Darrow and his kind have been betrayed. Soon he discovers that humanity reached the surface generations ago. Vast cities and lush wilds spread across the planet. Darrow—and Reds like him—are nothing more than slaves to a decadent ruling class. Inspired by a longing for justice, and driven by the memory of lost love, Darrow sacrifices everything to infiltrate the legendary Institute, a proving ground for the dominant Gold caste, where the next generation of humanity’s overlords struggle for power.  He will be forced to compete for his life and the very future of civilization against the best and most brutal of Society’s ruling class. There, he will stop at nothing to bring down his enemies . . . even if it means he has to become one of them to do so.",
        "https://m.media-amazon.com/images/I/81wGzzxqHSL._SY466_.jpg",
        416
    ),
    new Book(
        5,
        "9780441790340",
        "sci-fi",
        "Stranger in a Strange Land",
        "Robert A. Heinlein",
        4.3,
        "Raised by Martians on Mars, Valentine Michael Smith is a human who has never seen another member of his species. Sent to Earth, he is a stranger who must learn what it is to be a man. But his own beliefs and his powers far exceed the limits of humankind, and as he teaches them about grokking and water-sharing, he also inspires a transformation that will alter Earth’s inhabitants forever...",
        "https://m.media-amazon.com/images/I/41StzePuXCL._SY445_SX342_FMwebp_.jpg",
        438
    ),

    // horror
    new Book(
        6,
        "9780307743657",
        "horror",
        "The Shining",
        "Stephen King",
        4.5,
        "Jack Torrance takes a job as the off-season caretaker at the remote Overlook Hotel, hoping to reconnect with his family and write, but the hotel's sinister history and supernatural presence begin to corrupt him.",
        "https://m.media-amazon.com/images/I/91U7HNa2NQL._AC_UF1000,1000_QL80_.jpg",
        672
    ),
    new Book(
        7,
        "9780760366196",
        "horror",
        "The Complete Tales of H.P. Lovecraft",
        "H. P. Lovecraft",
        4,
        "Included in this volume are The Case of Charles Dexter Ward, The Call of Cthulhu, The Dream-Quest of Unknown Kadath, At the Mountains of Madness, The Shadow Over Innsmouth, The Colour Out of Space, The Dunwich Horror, and many more hair-raising tales.",
        "https://m.media-amazon.com/images/I/91LxwU-mKmL._SY425_.jpg",
        1564
    ),
    new Book(
        8,
        "9781503262423",
        "horror",
        "Frankenstein",
        "Mary Shelley",
        4,
        "Frankenstein; or, The Modern Prometheus, is a novel written by English author Mary Shelley about eccentric scientist Victor Frankenstein, who creates a grotesque creature in an unorthodox scientific experiment. Shelley started writing the story when she was eighteen, and the novel was published when she was twenty. This is a revised 1931 edition. Shelley's name appears on the second edition, published in France in 1823.",
        "https://m.media-amazon.com/images/I/51XYvhZ5kCL._SY466_.jpg",
        165,
    ),
    new Book(
        9,
        "9781435129733",
        "horror",
        "Dracula",
        "Bram Stoker",
        4.5,
        "Acting on behalf of his firm of solicitors, Jonathan Harker travels to the Carpathian Mountains to finalise the sale of England's Carfax Abbey to Transylvanian noble Count Dracula. Little does he realise that, in doing so, he endangers all that he loves. For Dracula is one of the Un-Dead; a centuries-old vampire who sleeps by day and stalks by night, feasting on the blood of his helpless victims. Once on English soil, the count sets his sights on Jonathan's circle of associates, among them his beloved wife Mina. To thwart Dracula's evil designs, Jonathan and his friends will have to accept as truth the most preposterous superstitions concerning vampires and in the company of legendary vampire hunter Abraham Van Helsing, embark on an unholy adventure for which even their worst nightmares have not prepared them.",
        "https://m.media-amazon.com/images/I/514nxI+qbcL.jpg",
        408
    ),
    new Book(
        10,
        "9781505234510",
        "horror",
        "The Strange Case of Dr. Jekyll and Mr. Hyde",
        "Robert Louis Stevenson",
        4.5,
        "Strange Case of Dr Jekyll and Mr Hyde is the original title of a novella written by the Scottish author Robert Louis Stevenson that was first published in 1886. The work is commonly known today as The Strange Case of Dr. Jekyll and Mr. Hyde, Dr. Jekyll and Mr. Hyde, or simply Jekyll & Hyde. It is about a London lawyer named Gabriel John Utterson who investigates strange occurrences between his old friend, Dr. Henry Jekyll, and the evil Edward Hyde.The work is commonly associated with the rare mental condition often spuriously called 'split personality', referred to in psychiatry as dissociative identity disorder, where within the same body there exists more than one distinct personality. In this case, there are two personalities within Dr Jekyll, one apparently good and the other evil. The novella's impact is such that it has become a part of the language, with the very phrase 'Jekyll and Hyde' coming to mean a person who is vastly different in moral character from one situation to the next.",
        "https://m.media-amazon.com/images/I/71VMDJw1nWL._SY466_.jpg",
        54
    ),

    // fantasy
    new Book(
        11,
        "9780395974681",
        "fantasy",
        "The Lord of the Rings",
        "J. R. R. Tolkien",
        5,
        "The Lord of the Rings by J.R.R. Tolkien is an epic high-fantasy novel following the quest of the hobbit Frodo Baggins to destroy the 'One Ring,' a powerful artifact created by the Dark Lord Sauron to dominate Middle-earth. Alongside a diverse fellowship, Frodo faces immense danger, battling forces of evil while navigating themes of friendship, bravery, and the corrupting nature of power.",
        "https://images.squarespace-cdn.com/content/v1/523dee8ee4b0c59776ef8c3a/1633031901550-5100DGC2HEPEGRU0WQ56/Lord+of+the+rings+illustrated+by+tolkien.jpg?format=1000w",
        1137
    ),
    new Book(
        12,
        "9780553808049",
        "fantasy",
        "A Game of Thrones",
        "George R. R. Martin",
        4.5,
        "In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the North of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones.",
        "https://m.media-amazon.com/images/I/81xf7GKNKTL._SY466_.jpg",
        896
    ),
    new Book(
        13,
        "9780765365279",
        "fantasy",
        "The Way of Kings",
        "Brandon Sanderson",
        4.8,
        "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter. It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them. One such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable. Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity. Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar's niece, Jasnah. Though she genuinely loves learning, Shallan's motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war.",
        "https://m.media-amazon.com/images/I/81pJXhRLdoL._SY522_.jpg",
        1280
    ),
    new Book(
        14,
        "9780064404990",
        "fantasy",
        "The Lion, the Witch and the Wardrobe",
        "C. S. Lewis",
        4.7,
        "Four siblings step through a mysterious wardrobe and into the magical Narnia, a once-peaceful land now frozen in snow and stone by the cruelty of the evil White Witch. Only the return of the Great Lion, Aslan, can put an end to the White Witch’s tyranny and restore peace. But for winter to meet its death and spring to come again, a great sacrifice must be made. . . .",
        "https://m.media-amazon.com/images/I/81nFlzPtAKL._SY466_.jpg",
        208
    ),
    new Book(
        15,
        "9780547928227",
        "fantasy",
        "The Hobbit",
        "J.R.R. Tolkien",
        4.7,
        "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their epic quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
        "https://m.media-amazon.com/images/I/712cDO7d73L._SY466_.jpg",
        320
    )
];