import Article from "../models/article";

export const ARTICLES = [
  // US news
  new Article(
    1,
    "us",
    "Senate Passes Sweeping Infrastructure Bill Amid Bipartisan Support",
    "2025-03-15",
    "Jane Mitchell",
    "CNN",
    "The Senate passed a landmark infrastructure bill late Thursday evening with rare bipartisan support, allocating over $1.2 trillion toward roads, bridges, broadband internet, and clean energy projects across the country. Supporters say the legislation will create millions of jobs over the next decade while modernizing aging American infrastructure. Critics, however, warn of ballooning deficits and question whether the funds will be managed efficiently at the state level.",
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800"
  ),
  new Article(
    2,
    "us",
    "Federal Reserve Holds Interest Rates Steady Amid Inflation Concerns",
    "2025-03-18",
    "Robert Langley",
    "Fox News",
    "The Federal Reserve announced Wednesday that it would hold its benchmark interest rate steady for the third consecutive meeting, citing persistent inflation and uncertainty in global markets. Fed Chair Jerome Powell indicated the committee remains data-dependent and is not yet confident that inflation is sustainably moving toward the 2% target. Markets responded with modest gains as investors digested the cautious tone of the announcement.",
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
  ),
  new Article(
    3,
    "us",
    "Wildfires Sweep Through Northern California, Thousands Evacuated",
    "2025-03-20",
    "Sarah Connors",
    "NBC News",
    "Fast-moving wildfires fueled by high winds and dry conditions have forced thousands of residents to evacuate in Northern California. The fires have burned through over 50,000 acres in three counties, destroying hundreds of homes and forcing the closure of major highways. Emergency crews from neighboring states have been deployed to assist local firefighters as officials warn the situation may worsen before it improves.",
    "https://images.unsplash.com/photo-1602615576820-ea14cf51f374?w=800"
  ),
  new Article(
    4,
    "us",
    "Supreme Court to Hear Landmark Case on Digital Privacy Rights",
    "2025-03-22",
    "David Horton",
    "PBS NewsHour",
    "The Supreme Court announced it will take up a highly anticipated case this fall that could reshape how the government accesses digital data without a warrant. The case centers on whether law enforcement agencies must obtain a warrant before compelling tech companies to hand over user location data stored in the cloud. Civil liberties groups have filed numerous amicus briefs urging the court to strengthen Fourth Amendment protections in the digital age.",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
  ),
  new Article(
    5,
    "us",
    "New York City Rolls Out Congestion Pricing Program for Drivers",
    "2025-03-25",
    "Maria Delgado",
    "The New York Times",
    "New York City officially launched its long-awaited congestion pricing program, making it the first city in the United States to charge drivers a toll for entering the central business district. The program aims to reduce traffic in Manhattan while generating billions in revenue for public transit improvements. Early reports suggest a noticeable drop in vehicle congestion during peak morning hours, though business owners near the toll zone have expressed mixed reactions.",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800"
  ),
  new Article(
    6,
    "us",
    "Congress Debates New Measures to Address Student Loan Crisis",
    "2025-03-28",
    "Tom Ellison",
    "NPR",
    "Lawmakers on Capitol Hill are sparring over a new package of proposals designed to address the nation's $1.7 trillion student loan debt crisis. The legislation under discussion includes income-based repayment reforms, expanded Pell Grant eligibility, and interest rate caps for federal loans. While Democrats push for broad forgiveness measures, Republicans argue that any relief plan must be fiscally responsible and tied to accountability reforms at universities.",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
  ),
  new Article(
    7,
    "us",
    "Historic Heat Wave Grips the Southern United States",
    "2025-04-01",
    "Lisa Park",
    "ABC News",
    "A record-breaking heat wave is gripping the Southern United States, with temperatures soaring well above 100 degrees Fahrenheit in Texas, Louisiana, and Mississippi. Health officials have issued emergency warnings urging residents to stay hydrated and avoid outdoor activities during peak afternoon hours. Power grids across the region are under severe strain, and utility companies have asked residents to conserve energy to prevent rolling blackouts.",
    "https://images.unsplash.com/photo-1504370805625-d32c054b5eb8?w=800"
  ),

  // world news
  new Article(
    8,
    "world",
    "G7 Leaders Reach Agreement on Global Minimum Corporate Tax",
    "2025-03-14",
    "Angela Fischer",
    "BBC News",
    "Leaders from the G7 nations have reached a landmark agreement to enforce a global minimum corporate tax rate of 15%, a move designed to curb tax havens and level the playing field for multinational corporations. The deal, years in the making, is expected to generate hundreds of billions in additional tax revenue worldwide. Some developing nations have raised concerns that the framework may disproportionately benefit wealthier countries.",
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800"
  ),
  new Article(
    9,
    "world",
    "Ceasefire Declared in Ongoing Middle East Conflict",
    "2025-03-17",
    "Hassan Al-Amin",
    "Al Jazeera",
    "A fragile ceasefire has been declared between warring factions in the ongoing Middle East conflict following weeks of intense diplomatic negotiations brokered by international mediators. The agreement calls for an immediate halt to hostilities, the release of prisoners, and the opening of humanitarian corridors to allow aid into affected regions. Officials caution that prior ceasefires in the region have been short-lived and that sustained monitoring will be critical to maintaining the peace.",
    "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=800"
  ),
  new Article(
    10,
    "world",
    "Major Earthquake Strikes Southeast Asia, Relief Efforts Underway",
    "2025-03-19",
    "Priya Nair",
    "Reuters",
    "A powerful 7.4-magnitude earthquake struck a densely populated region of Southeast Asia early Tuesday morning, triggering landslides and collapsing thousands of buildings. The death toll has risen to over 400 with hundreds more still missing as rescue teams work through the rubble. International aid organizations have begun mobilizing emergency relief supplies, and several nations have pledged financial assistance and search-and-rescue personnel.",
    "https://images.unsplash.com/photo-1590593162201-f67611a18b87?w=800"
  ),
  new Article(
    11,
    "world",
    "European Union Announces Sweeping New Climate Legislation",
    "2025-03-21",
    "Claudia Bauer",
    "Deutsche Welle",
    "The European Union unveiled a sweeping package of climate legislation aimed at making the bloc carbon neutral by 2045, five years ahead of previous targets. The measures include stricter emissions standards for industry, a rapid phase-out of fossil fuel subsidies, and significant investment in renewable energy infrastructure. Environmental groups praised the ambition of the plan, though some member states have raised concerns about the economic burden the transition may place on working-class communities.",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800"
  ),
  new Article(
    12,
    "world",
    "China Launches Its Largest-Ever Space Station Expansion Mission",
    "2025-03-24",
    "Wei Zhang",
    "South China Morning Post",
    "China's National Space Administration successfully launched its most ambitious space station expansion mission to date, sending three new modules into orbit to significantly expand the capacity of the Tiangong station. The mission marks a major milestone in China's long-term goal of becoming a dominant space power by 2030. International observers note that the expansion could allow China to host foreign astronauts for the first time and positions the country as a serious competitor to NASA and the European Space Agency.",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800"
  ),
  new Article(
    13,
    "world",
    "Brazil's Amazon Deforestation Rate Drops to 10-Year Low",
    "2025-03-26",
    "Isabella Souza",
    "The Guardian",
    "New data released by Brazil's national space research institute shows that deforestation in the Amazon rainforest fell to its lowest rate in a decade last year, a development that environmental advocates are cautiously celebrating. The decline is attributed in part to stronger enforcement of environmental regulations and satellite monitoring programs. However, scientists warn that the forest remains under significant long-term pressure from agricultural expansion and climate change.",
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800"
  ),
  new Article(
    14,
    "world",
    "South Korea and Japan Sign Historic Economic Partnership Agreement",
    "2025-03-29",
    "Yuna Kim",
    "Associated Press",
    "South Korea and Japan have signed a landmark economic partnership agreement in Seoul, marking a significant thaw in relations between the two neighboring nations that have long been strained by historical disputes. The agreement covers trade, technology sharing, and joint infrastructure investment across Southeast Asia. Both governments framed the deal as an essential step toward regional stability and economic resilience in the face of growing geopolitical uncertainty.",
    "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800"
  ),

  // local news
  new Article(
    15,
    "local",
    "Myrtle Beach Boardwalk Named One of America's Best by Travel Magazine",
    "2025-03-16",
    "Dana Fowler",
    "The Sun News",
    "Myrtle Beach's iconic oceanfront boardwalk has been named one of the top five boardwalks in the United States by a leading national travel publication, drawing praise for its mix of family-friendly attractions, dining, and ocean views. The ranking highlights recent improvements to the promenade including new lighting, expanded seating areas, and the addition of local artisan vendors. City officials say the recognition is expected to boost spring and summer tourism bookings significantly.",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
  ),
  new Article(
    16,
    "local",
    "Horry County Schools Receive $4 Million Grant for STEM Programs",
    "2025-03-18",
    "Marcus Webb",
    "WMBF News",
    "Horry County Schools announced this week that it has been awarded a $4 million federal grant to expand STEM education programs at 12 schools across the district. The funding will be used to build dedicated maker spaces, purchase robotics equipment, and provide professional development training for teachers over the next three years. Superintendent Sherrie Cross called the investment a transformative opportunity for students in the Grand Strand region.",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800"
  ),
  new Article(
    17,
    "local",
    "New Waterpark Resort Breaks Ground Along Ocean Boulevard",
    "2025-03-20",
    "Tiffany Reeves",
    "Myrtle Beach Online",
    "A major hospitality developer broke ground Thursday on a $200 million waterpark resort along Ocean Boulevard, a project that city leaders say will bring hundreds of permanent jobs to the area. The resort is expected to feature a 400-room hotel, a sprawling outdoor waterpark, and a family entertainment center. Construction is slated to be completed in time for the 2027 summer tourism season, with officials projecting significant economic impact for local businesses.",
    "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800"
  ),
  new Article(
    18,
    "local",
    "Myrtle Beach Police Department Launches Community Outreach Initiative",
    "2025-03-23",
    "Jerome Caldwell",
    "WPDE News",
    "The Myrtle Beach Police Department unveiled a new community outreach initiative this week aimed at strengthening trust between officers and local residents. The program includes monthly neighborhood town halls, a youth ride-along program, and a new community liaison officer position dedicated to addressing resident concerns. Chief Amy Prock said the initiative reflects the department's commitment to building lasting partnerships with the communities it serves.",
    "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?w=800"
  ),
  new Article(
    19,
    "local",
    "Annual Myrtle Beach Bike Week Draws Record Attendance",
    "2025-03-27",
    "Randy Simmons",
    "The Sun News",
    "This year's Myrtle Beach Bike Week drew an estimated 350,000 visitors to the Grand Strand, breaking the event's previous attendance record and generating an estimated $45 million in economic activity for local businesses. Hotels reported near-full occupancy throughout the week, and restaurants along Kings Highway saw lines stretching out the door on peak evenings. Organizers credited favorable weather conditions and expanded vendor areas for the record turnout.",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
  ),
  new Article(
    20,
    "local",
    "Coastal Carolina University Opens New Marine Science Research Center",
    "2025-03-30",
    "Patricia Monroe",
    "WBTW News 13",
    "Coastal Carolina University officially opened the doors of its new Marine Science Research Center this week, a state-of-the-art facility dedicated to studying the health of the Atlantic coastal ecosystem. The 25,000-square-foot center houses advanced water quality labs, a living shoreline research station, and collaborative spaces for student and faculty researchers. University President Fred Carter said the center positions CCU as a regional leader in environmental science and ocean conservation.",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800"
  ),
  new Article(
    21,
    "local",
    "Grand Strand Medical Center Expands Emergency Department Capacity",
    "2025-04-01",
    "Nicole Hargrove",
    "WMBF News",
    "Grand Strand Medical Center announced the completion of a major expansion to its emergency department, adding 30 new treatment bays and a dedicated fast-track area for non-critical patients. Hospital administrators say the $18 million project was driven by growing demand as Horry County's population continues to rise at one of the fastest rates in South Carolina. The expanded facility is now fully operational and is expected to significantly reduce average patient wait times.",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800"
  ),
];