import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Heart, Image as ImageIcon, ChevronRight } from "lucide-react";

const gold = "#D4AF37";
const softGold = "#E7C96B";
const bg = "#060606";
const border = "rgba(212,175,55,0.25)";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "tracks", label: "Example Tracks" },
  // Images page is hidden for now; keep route/component for later.
  { id: "contact", label: "Contact" },
];

const galleryPlaceholders = [
  "Grand ballroom wedding reception!!",
  "Elegant outdoor ceremony setup",
  "Prom night dance floor lighting",
  "School function with premium DJ setup",
  "Birthday party celebration energy",
  "Private party with upscale ambiance",
];

const exampleTracks = [
  "It Was A Good Day - Ice Cube",
  "Tennessee - Arrested Development",
  "Fuckin' Problems - A$AP (feat.Drake, 2 Chainz and Kendrick Lamar)",
  "Bonita Applebum - A Tribe Called Quest",
  "Rebel Without A Pause - Public Enemy",
  "Warning - The Notorious B.I.G.",
  "Eric B. is President - Eric B. & Rakim",
  "P.S.K. (What Does It Mean) - Schoolly D",
  "Gin & Juice - Snoop Doggy Dogg",
  "Children's Story - Slick Rick",
  "Ridin' - Chamillionaire (feat. Krayzie Bone)",
  "If I Ruled the World - Kurtis Blow",
  "They Reminisce Over You (T.R.O.Y.) - C.L. Smooth & Pete Rock",
  "Slow Down - Brand Nubian",
  "Straight Outta Compton - N.W.A",
  "Smooth Operator - Big Daddy Kane",
  "Me So Horny - 2 Live Crew",
  "Hail Mary - 2Pac",
  "Go Crazy - Young Jeezy",
  "I Ain't No Joke - Eric B. & Rakim",
  "Dre Day - Dr. Dre w/Snoop Doggy Dogg",
  "In Da Club - 50 Cent",
  "Around the Way Girl - LL Cool J",
  "I Got It Like That - The Jungle Brothers",
  "Wild Thing - Tone-Loc",
  "One Day - UGK",
  "The Choice Is Yours - Black Sheep",
  "Humble - Kendrick Lamar",
  "I'm Bad - LL Cool J",
  "Roc Boys (And the Winner Is...) - Jay-Z",
  "Just A Friend - Biz Markie",
  "Hard Knock Life - Jay Z",
  "Ms. Fat Booty - Mos Def",
  "You Got Me - The Roots",
  "Mama Said Knock You Out - LL Cool J",
  "Push It - Salt-n-Pepa",
  "The Way You Move - Outkast (feat. Sleepy Brown)",
  "Jam Master Jay - Run-D.M.C.",
  "Summertime - DJ Jazzy Jeff & The Fresh Prince",
  "Funkdafied - Da Brat",
  "Stan - Eminem",
  "99 Problems - Jay-Z",
  "Buddy - De La Soul w/The Jungle Bros, Monie Love & Q-Tip",
  "Pop Goes the Weasel - 3rd Bass",
  "The Heart Part 5 - Kendrick Lamar",
  "Follow the Leader - Eric B. & Rakim",
  "The Symphony - Marley Marl (feat. Masta Ace, Craig G, Kool G Rap, Big Daddy Kane)",
  "Get By - Talib Kweli",
  "Welcome to the Terrordome - Public Enemy",
  "Lose Yourself - Eminem",
  "California Love - 2Pac (feat. Dr. Dre)",
  "Straighten It Out - Pete Rock & CL Smooth",
  "Cell Therapy - Goodie MOB",
  "Regulate - Warren G. w/ Nate Dogg",
  "Me Myself and I - De La Soul",
  "Life Is...Too $hort - Too $hort",
  "Rock the Bells - LL Cool J",
  "Fight The Power - Public Enemy",
  "Can I Kick It? - A Tribe Called Quest",
  "Bring the Pain - Method Man",
  "What You Know - T.I.",
  "I Got It Made - Special Ed",
  "La Di Da Di - Slick Rick & Doug E. Fresh",
  "One Mic - Nas",
  "Crush On You - Lil Kim",
  "No Time - Lil Kim w/Puff Daddy",
  "White Lines (Don't Do It) - Grandmaster Flash & the Furious Five",
  "I Need Love - LL Cool J",
  "It Takes Two - Rob Base & DJ EZ Rock",
  "A Milli - Lil Wayne",
  "Deep Cover - Dr. Dre (feat. Snoop Doggy Dogg)",
  "The Humpty Dance - Digital Underground",
  "Dirty South - Goodie MOB",
  "Whatta Man - Salt N Pepa w/En Vogue",
  "Bring The Noise - Public Enemy",
  "Shed So Many Tears - 2 Pac",
  "All About the Benjamins - Puff Daddy w/Lil Kim, The LOX & The Notorious B.I.G.",
  "Words I Manifest - Gang Starr",
  "The Message - Grandmaster Flash & The Furious Five",
  "It's Funky Enough - The D.O.C.",
  "My Name Is... - Eminem",
  "Put Your Hands Where My Eyes Can See - Busta Rhymes",
  "Check the Rhime - A Tribe Called Quest",
  "Ladies First - Queen Latifah w/ Monie Love",
  "It's the Joint - The Funky Four + 1",
  "Streets of N.Y. - Kool G. Rap & DJ Polo",
  "Road to Riches - Kool G. Rap & DJ Polo",
  "Insane In the Brain - Cypress Hill",
  "O.P.P. - Naughty By Nature",
  "Set Adrift on Memory Bliss - P.M. Dawn",
  "Bust A Move - Young MC",
  "Get At Me Dog - DMX",
  "Keep Ya Head Up - 2 Pac",
  "Rappers Delight - Sugarhill Gang",
  "The World Is Yours - Nas",
  "Award Tour - A Tribe Called Quest",
  "Boyz-N-The-Hood - Eazy E",
  "Paul Revere - The Beastie Boys",
  "My Philosophy - Boogie Down Productions",
  "The Light - Common w/Erykah Badu",
  "Nuthin But A \"G\" Thang - Dr. Dre",
  "Rubberband Man - T.I.",
  "Crossover - EPMD",
  "Ruffneck - MC Lyte",
  "Set It Off - Big Daddy Kane",
  "I Used To Love H.E.R. - Common",
  "Empire State of Mind - Jay-Z (feat. Alicia Keys)",
  "Cha Cha Cha - MC Lyte",
  "Rosa Parks - Outkast",
  "Big Pimpin' - Jay Z",
  "Mind Playing Tricks on Me - Geto Boys",
  "Fu-Gee-La - The Fugees",
  "Rockstar - DaBaby (feat. Roddy Ricch)",
  "Proceed - The Roots",
  "Triumph - Wu-Tang Clan",
  "I'm Still #1 - Boogie Down Productions",
  "U.N.I.T.Y. - Queen Latifah",
  "Roxanne, Roxanne - U.T.F.O.",
  "Five Minutes of Funk - Whodini",
  "Walk This Way - Run-D.M.C. & Aerosmith",
  "Big Poppa - The Notorious B.I.G.",
  "The Show - Doug E. Fresh w/Slick Rick",
  "Sugar Hill - AZ",
  "Treat 'Em Right - Chubb Rock",
  "Feel the Heartbeat - Treacherous Three",
  "Gravel Pit - Wu-Tang Clan",
  "All the Stars - Kendrick Lamar and SZA",
  "Dear Mama - 2pac",
  "I Got 5 On It - The Luniz",
  "Tha Crossroads - Bone Thugs N Harmony",
  "B.O.B. - Outkast",
  "I Ain't Mad At Cha - 2Pac",
  "C.R.E.A.M. - Wu Tang Clan",
  "Lyte As A Rock - MC Lyte",
  "I'll Be There for You/You're All I Need - Method Man w/ Mary J. Blige",
  "Steady Mobbin' - Ice Cube",
  "We Want Eazy - Eazy E",
  "Dead Presidents, Pt II - Jay-Z",
  "Still Not A Player - Big Pun w/Joe",
  "King of Rock - Run-D.M.C.",
  "Get Ur Freak On - Missy Elliott",
  "Passin' Me By - The Pharcyde",
  "Street Struck - Big L",
  "Back That A** Up - Juvenile",
  "Through the Wire - Kanye West",
  "Mass Appeal - Gang Starr",
  "Brown-Skinned Lady - Mos Def & Talib Kweli",
  "Rockin' It - The Fearless Four",
  "Express Yourself - N.W.A",
  "911 Is A Joke - Public Enemy",
  "I Can't Live Without My Radio - LL Cool J",
  "6 In the Mornin' - Ice T",
  "Jesus Walks - Kanye West",
  "Planet Rock - Afrika Bambaataa & the Soulsonic Force",
  "It Ain't Hard to Tell - Nas",
  "Fuck Tha Police - N.W.A",
  "Rebirth of Slick (Cool Like Dat) - Digable Planets",
  "The Vapors - Biz Markie",
  "Baby Got Back - Sir Mix-a-Lot",
  "Paid in Full - Eric B. & Rakim",
  "How I Could Just Kill A Man - Cypress Hill",
  "Black Steel In the Hour of Chaos - Public Enemy",
  "Hey Ya - OutKast",
  "Elevators (Me & You) - Outkast",
  "(You Gotta) Fight For Your Right (To Party) - Beastie Boys",
  "The Breaks - Kurtis Blow",
  "Superstar - Lupe Fiasco",
  "Hip Hop Hooray - Naughty By Nature",
  "Doo Wop (That Thing) - Lauryn Hill",
  "Juicy - The Notorious B.I.G.",
  "Gangsta's Paradise - Coolio",
  "Flava In Ya Ear (remix) - Craig Mack",
  "Parents Just Don't Understand - DJ Jazzy Jeff & The Fresh Prince",
  "Paper Planes - M.I.A.",
  "I Seen A Man Die - Scarface",
  "Top Billin' - Audio Two",
  "Freaks Come Out At Night - Whodini",
  "The Bridge Is Over - Boogie Down Productions",
  "Scenario - A Tribe Called Quest",
  "Murder Was the Case - Snoop Doggy Dogg",
  "Shook Ones, Pt II - Mobb Deep",
  "It's Like That - Run-D.M.C.",
  "You Gots to Chill - EPMD",
  "Come Clean - Jeru Da Damaja",
  "Hypnotize - The Notorious B.I.G.",
  "Hip-Hop - Dead Prez",
  "Ain't No Half-Steppin' - Big Daddy Kane",
  "Colors - Ice T",
  "Crank That (Soulja Boy) - Soulja Boy Tell'em",
  "Sucker M.C.s - Run-D.M.C.",
  "Woo-Hah (Got U All In Check) - Busta Rhymes",
  "NY State of Mind - Nas",
  "Electric Relaxation - A Tribe Called Quest",
  "Hip Hop Junkie - Nice & Smooth",
  "The Rain (Supa Dupa Fly) - Missy Elliott",
  "The Definition - Mos Def & Talib Kweli (Black Star)",
  "Ms. Jackson - Outkast",
  "Rock Box - Run-D.M.C.",
  "Mona Lisa - Slick Rick",

];

const electronicTracks = [
  "I Feel Love - Donna Summer",
  "The Robots - Kraftwerk",
  "One More Time - Daft Punk",
  "Around the World - Daft Punk",
  "Da Funk - Daft Punk",
  "Harder, Better, Faster, Stronger - Daft Punk",
  "Music Sounds Better with You - Stardust",
  "Show Me Love - Robin S",
  "Finally - CeCe Peniston",
  "Gypsy Woman (She's Homeless) - Crystal Waters",
  "Ride on Time - Black Box",
  "Good Life - Inner City",
  "Your Love - Frankie Knuckles & Jamie Principle",
  "Can You Feel It - Mr. Fingers",
  "Acid Tracks - Phuture",
  "Move Your Body - Marshall Jefferson",
  "French Kiss - Lil Louis",
  "Energy Flash - Joey Beltram",
  "Jaguar - Underground Resistance",
  "The Bells - Jeff Mills",
  "Strings of Life - Derrick May",
  "Minimal Nation - Robert Hood",
  "At Les - Carl Craig",
  "Crispy Bacon - Laurent Garnier",
  "Windowlicker - Aphex Twin",
  "Block Rockin' Beats - The Chemical Brothers",
  "Hey Boy Hey Girl - The Chemical Brothers",
  "Firestarter - The Prodigy",
  "Breathe - The Prodigy",
  "Smack My Bitch Up - The Prodigy",
  "Right Here, Right Now - Fatboy Slim",
  "Praise You - Fatboy Slim",
  "Insomnia - Faithless",
  "God Is a DJ - Faithless",
  "Born Slippy (Nuxx) - Underworld",
  "Rez - Underworld",
  "Go - Moby",
  "Porcelain - Moby",
  "Halcyon + On + On - Orbital",
  "Chime - Orbital",
  "What Time Is Love? - The KLF",
  "Blue Monday - New Order",
  "Enjoy the Silence - Depeche Mode",
  "The Age of Love (Jam & Spoon Remix) - Age of Love",
  "Cafe Del Mar - Energy 52",
  "1998 - Binary Finary",
  "Offshore - Chicane",
  "Saltwater - Chicane ft. Maire Brennan",
  "9 PM (Till I Come) - ATB",
  "Sandstorm - Darude",
  "Children - Robert Miles",
  "For an Angel - Paul van Dyk",
  "Adagio for Strings - Tiesto",
  "Traffic - Tiesto",
  "Shivers - Armin van Buuren",
  "In and Out of Love - Armin van Buuren ft. Sharon den Adel",
  "Sun & Moon - Above & Beyond",
  "Satellite - OceanLab",
  "Airwave - Rank 1",
  "As the Rush Comes - Motorcycle",
  "Exploration of Space - Cosmic Gate",
  "Gouryella - Gouryella",
  "Universal Nation - Push",
  "Flaming June - BT",
  "Xpander - Sasha",
  "For What You Dream Of - Bedrock",
  "Open Up - Leftfield",
  "Phat Planet - Leftfield",
  "Red Alert - Basement Jaxx",
  "Where's Your Head At - Basement Jaxx",
  "Lady (Hear Me Tonight) - Modjo",
  "Sing It Back (Boris Musical Mix) - Moloko",
  "Finally - Kings of Tomorrow ft. Julie McKnight",
  "Bar A Thym - Kerri Chandler",
  "Push the Feeling On - Nightcrawlers",
  "You Don't Know Me - Armand Van Helden",
  "Another Chance - Roger Sanchez",
  "Call on Me - Eric Prydz",
  "Pjanoo - Eric Prydz",
  "Opus - Pryda",
  "Strobe - deadmau5",
  "I Remember - deadmau5 & Kaskade",
  "Ghosts 'n' Stuff - deadmau5",
  "Levels - Avicii",
  "Seek Bromance - Avicii",
  "Don't You Worry Child - Swedish House Mafia",
  "One - Swedish House Mafia",
  "If I Lose Myself (Alesso Remix) - Alesso vs OneRepublic",
  "Summer - Calvin Harris",
  "How Deep Is Your Love - Calvin Harris & Disciples",
  "I Need Your Love - Calvin Harris ft. Ellie Goulding",
  "Clarity - Zedd ft. Foxes",
  "Spectrum - Zedd",
  "Animals - Martin Garrix",
  "In the Name of Love - Martin Garrix & Bebe Rexha",
  "Titanium - David Guetta ft. Sia",
  "When Love Takes Over - David Guetta & Kelly Rowland",
  "Satisfaction - Benny Benassi",
  "Better Off Alone - Alice Deejay",
  "Kernkraft 400 - Zombie Nation",
  "Toca's Miracle - Fragma",
  "Castles in the Sky - Ian Van Dahl",
  "Touch Me - Rui da Silva ft. Cassandra",
  "Rapture - iio",
  "Free - Ultra Nate",
  "Freed from Desire - Gala",
  "Rhythm of the Night - Corona",
  "Rhythm Is a Dancer - Snap!",
  "What Is Love - Haddaway",
  "Pump Up the Jam - Technotronic",
  "I Like to Move It - Reel 2 Real",
  "Mr. Vain - Culture Beat",
  "Get Ready for This - 2 Unlimited",
  "We Like to Party! - Vengaboys",
  "Better Off Alone - Alice DJ",
  "World, Hold On - Bob Sinclar",
  "Barbra Streisand - Duck Sauce",
  "aNYway - Duck Sauce",
  "D.A.N.C.E. - Justice",
  "Genesis - Justice",
  "Pogo - Digitalism",
  "Hustler - Simian Mobile Disco",
  "NY Excuse - Soulwax",
  "Someone Great - LCD Soundsystem",
  "Over and Over - Hot Chip",
  "Superstylin' - Groove Armada",
  "At the River - Groove Armada",
  "Eple - Royksopp",
  "The Girl and the Robot - Royksopp ft. Robyn",
  "Body Language - Booka Shade",
  "Beautiful Life - Gui Boratto",
  "Body Language - M.A.N.D.Y. vs Booka Shade",
  "Moan (Trentemoller Remix) - Trentemoller",
  "Soopertrack - Extrawelt",
  "I Want You (Forever) - Carl Cox",
  "Flash - Green Velvet",
  "La La Land - Green Velvet",
  "Higher State of Consciousness - Josh Wink",
  "Spastik - Plastikman",
  "Your Mind - Adam Beyer & Bart Skils",
  "Selected - Charlotte de Witte",
  "Astral Projection - Enrico Sangiuliano",
  "In Silence - Amelie Lens",
  "Another Earth - Tale Of Us",
  "Cola - CamelPhat & Elderbrook",
  "Losing It - Fisher",
  "XTC - Solardo & Eli Brown",
  "Piece of Your Heart - Meduza ft. Goodboys",
  "Take It - Dom Dolla",
  "Deep End - John Summit",
  "Ready for Your Love - Gorgon City ft. MNEK",
  "Latch - Disclosure ft. Sam Smith",
  "You & Me (Flume Remix) - Disclosure ft. Eliza Doolittle",
  "Never Be Like You - Flume",
  "Say My Name - ODESZA",
  "Innerbloom - RUFUS DU SOL",
  "Atlas - Lane 8",
  "Glue - Bicep",
  "Opal (Four Tet Remix) - Bicep",
  "Two Thousand and Seventeen - Four Tet",
  "Silhouettes (I, II & III) - Floating Points",
  "Loud Places - Jamie xx",
  "Odessa - Caribou",
  "A New Error - Moderat",
  "Kerala - Bonobo",
  "Space Is Only Noise If You Can See - Nicolas Jaar",
  "Pick Up - DJ Koze",
  "(It Goes Like) Nanana - Peggy Gou",
  "Hypnotized - Purple Disco Machine",
  "No Eyes - Claptone ft. Jaw",
  "Need U (100%) - Duke Dumont",
  "Ocean Drive - Duke Dumont",
  "17 - MK",
  "Look Right Through (MK Dub III) - Storm Queen",
  "My Love - Route 94 ft. Jess Glynne",
  "Rather Be - Clean Bandit ft. Jess Glynne",
  "Lean On - Major Lazer & DJ Snake ft. MO",
  "Turn Down for What - DJ Snake & Lil Jon",
  "Scary Monsters and Nice Sprites - Skrillex",
  "Bangarang - Skrillex",
  "Internet Friends - Knife Party",
  "Promises - Nero",
  "Me and You - Nero",
  "Slam - Pendulum",
  "The Island, Pt. I (Dawn) - Pendulum",
  "End Credits - Chase & Status ft. Plan B",
  "Afterglow - Wilkinson",
  "Tidal Wave - Sub Focus",
  "Memory Lane - Netsky",
  "Woo Boost - Rusko",
  "Archangel - Burial",
  "Inner City Life - Goldie",
  "Horizons - LTJ Bukem",
  "Circles - Adam F",
  "Brown Paper Bag - Roni Size / Reprazent",
  "Poison - Groove Coverage",
  "Played-A-Live (The Bongo Song) - Safri Duo",
  "Faded - Alan Walker",
  "Weightless - Ben Bohmer ft. Panama",
  "Strong - Fred again.., Romy & HAAi",
];

const classic80s90sTracks = [
  "Billie Jean - Michael Jackson",
  "Like a Prayer - Madonna",
  "Smells Like Teen Spirit - Nirvana",
  "Sweet Child O' Mine - Guns N' Roses",
  "Livin' on a Prayer - Bon Jovi",
  "When Doves Cry - Prince",
  "Purple Rain - Prince",
  "Take On Me - a-ha",
  "Everybody Wants to Rule the World - Tears for Fears",
  "Don't Stop Believin' - Journey",
  "With or Without You - U2",
  "Sweet Dreams (Are Made of This) - Eurythmics",
  "Girls Just Want to Have Fun - Cyndi Lauper",
  "Beat It - Michael Jackson",
  "Thriller - Michael Jackson",
  "Faith - George Michael",
  "Careless Whisper - George Michael",
  "I Wanna Dance with Somebody - Whitney Houston",
  "How Will I Know - Whitney Houston",
  "I Will Always Love You - Whitney Houston",
  "Vogue - Madonna",
  "Like a Virgin - Madonna",
  "Into the Groove - Madonna",
  "Material Girl - Madonna",
  "Holiday - Madonna",
  "Time After Time - Cyndi Lauper",
  "True Colors - Cyndi Lauper",
  "Every Breath You Take - The Police",
  "Roxanne - The Police",
  "Message in a Bottle - The Police",
  "Karma Police - Radiohead",
  "Creep - Radiohead",
  "Wonderwall - Oasis",
  "Don't Look Back in Anger - Oasis",
  "Champagne Supernova - Oasis",
  "Losing My Religion - R.E.M.",
  "Everybody Hurts - R.E.M.",
  "Shiny Happy People - R.E.M.",
  "Linger - The Cranberries",
  "Zombie - The Cranberries",
  "Dreams - The Cranberries",
  "No Scrubs - TLC",
  "Waterfalls - TLC",
  "Unpretty - TLC",
  "Say My Name - Destiny's Child",
  "MMMBop - Hanson",
  "Genie in a Bottle - Christina Aguilera",
  "...Baby One More Time - Britney Spears",
  "Oops!... I Did It Again - Britney Spears",
  "I Want It That Way - Backstreet Boys",
  "Everybody (Backstreet's Back) - Backstreet Boys",
  "Quit Playing Games (With My Heart) - Backstreet Boys",
  "Torn - Natalie Imbruglia",
  "Iris - Goo Goo Dolls",
  "Slide - Goo Goo Dolls",
  "Semi-Charmed Life - Third Eye Blind",
  "Jumper - Third Eye Blind",
  "Closing Time - Semisonic",
  "Bitter Sweet Symphony - The Verve",
  "Kiss from a Rose - Seal",
  "Fly - Sugar Ray",
  "All Star - Smash Mouth",
  "Tubthumping - Chumbawamba",
  "Wonder - Natalie Merchant",
  "Fast Car - Tracy Chapman",
  "Freedom! '90 - George Michael",
  "Kiss - Prince",
  "1999 - Prince",
  "Sign o' the Times - Prince",
  "Let's Go Crazy - Prince and The Revolution",
  "Little Red Corvette - Prince",
  "When You Were Mine - Prince",
  "Take My Breath Away - Berlin",
  "Footloose - Kenny Loggins",
  "Danger Zone - Kenny Loggins",
  "Eye of the Tiger - Survivor",
  "Africa - Toto",
  "Rosanna - Toto",
  "Jump - Van Halen",
  "Panama - Van Halen",
  "Pour Some Sugar on Me - Def Leppard",
  "Photograph - Def Leppard",
  "Every Rose Has Its Thorn - Poison",
  "Talk Dirty to Me - Poison",
  "Here I Go Again - Whitesnake",
  "The Final Countdown - Europe",
  "Rock You Like a Hurricane - Scorpions",
  "Wind of Change - Scorpions",
  "Summer of '69 - Bryan Adams",
  "Heaven - Bryan Adams",
  "(Everything I Do) I Do It for You - Bryan Adams",
  "Heaven Is a Place on Earth - Belinda Carlisle",
  "Eternal Flame - The Bangles",
  "Walk Like an Egyptian - The Bangles",
  "Manic Monday - The Bangles",
  "Total Eclipse of the Heart - Bonnie Tyler",
  "Holding Out for a Hero - Bonnie Tyler",
  "Take a Chance on Me - ABBA",
  "Dancing Queen - ABBA",
  "Gimme! Gimme! Gimme! (A Man After Midnight) - ABBA",
  "The Winner Takes It All - ABBA",
  "Wake Me Up Before You Go-Go - Wham!",
  "Last Christmas - Wham!",
  "Everything She Wants - Wham!",
  "Wake Up Little Susie - The Everly Brothers",
  "U Can't Touch This - MC Hammer",
  "Ice Ice Baby - Vanilla Ice",
  "Baby Got Back - Sir Mix-a-Lot",
  "Jump Around - House of Pain",
  "Regulate - Warren G. ft. Nate Dogg",
  "Gangsta's Paradise - Coolio",
  "California Love - 2Pac ft. Dr. Dre",
  "Changes - 2Pac",
  "Mo Money Mo Problems - The Notorious B.I.G.",
  "Juicy - The Notorious B.I.G.",
  "Hypnotize - The Notorious B.I.G.",
  "Nuthin' but a 'G' Thang - Dr. Dre",
  "Still D.R.E. - Dr. Dre ft. Snoop Dogg",
  "Gin and Juice - Snoop Doggy Dogg",
  "Who Am I? (What's My Name?) - Snoop Doggy Dogg",
  "My Name Is - Eminem",
  "The Real Slim Shady - Eminem",
  "No Diggity - Blackstreet ft. Dr. Dre",
  "This Is How We Do It - Montell Jordan",
  "Return of the Mack - Mark Morrison",
  "Poison - Bell Biv DeVoe",
  "End of the Road - Boyz II Men",
  "I'll Make Love to You - Boyz II Men",
  "On Bended Knee - Boyz II Men",
  "I Swear - All-4-One",
  "Can You Stand the Rain - New Edition",
  "If It Isn't Love - New Edition",
  "Back at One - Brian McKnight",
  "Always Be My Baby - Mariah Carey",
  "Fantasy - Mariah Carey",
  "Hero - Mariah Carey",
  "Vision of Love - Mariah Carey",
  "Emotions - Mariah Carey",
  "One Sweet Day - Mariah Carey and Boyz II Men",
  "I Don't Want to Miss a Thing - Aerosmith",
  "Cryin' - Aerosmith",
  "Crazy - Aerosmith",
  "Livin' la Vida Loca - Ricky Martin",
  "She Bangs - Ricky Martin",
  "Maria Maria - Santana ft. The Product G&B",
  "Smooth - Santana ft. Rob Thomas",
  "Black or White - Michael Jackson",
  "Man in the Mirror - Michael Jackson",
  "Bad - Michael Jackson",
  "The Way You Make Me Feel - Michael Jackson",
  "Dirty Diana - Michael Jackson",
  "Human Nature - Michael Jackson",
  "The Power of Love - Huey Lewis and the News",
  "Hip to Be Square - Huey Lewis and the News",
  "What I Got - Sublime",
  "Santeria - Sublime",
  "Killing Me Softly - Fugees",
  "Ready or Not - Fugees",
  "No Woman, No Cry - Fugees",
  "Wannabe - Spice Girls",
  "Spice Up Your Life - Spice Girls",
  "Say You'll Be There - Spice Girls",
  "Viva Forever - Spice Girls",
  "Ironic - Alanis Morissette",
  "You Oughta Know - Alanis Morissette",
  "Hand in My Pocket - Alanis Morissette",
  "Nothing Compares 2 U - Sinead O'Connor",
  "Kiss Me - Sixpence None the Richer",
  "Breathe - Faith Hill",
  "Achy Breaky Heart - Billy Ray Cyrus",
  "Friends in Low Places - Garth Brooks",
  "The Dance - Garth Brooks",
  "Boot Scootin' Boogie - Brooks and Dunn",
  "My Heart Will Go On - Celine Dion",
  "Because You Loved Me - Celine Dion",
  "It's All Coming Back to Me Now - Celine Dion",
  "Tears in Heaven - Eric Clapton",
  "Wonderful Tonight - Eric Clapton",
  "Layla - Eric Clapton",
  "Another Day in Paradise - Phil Collins",
  "In the Air Tonight - Phil Collins",
  "Against All Odds (Take a Look at Me Now) - Phil Collins",
  "Sledgehammer - Peter Gabriel",
  "In Your Eyes - Peter Gabriel",
  "Fastlove - George Michael",
  "Father Figure - George Michael",
  "Smooth Operator - Sade",
  "No Ordinary Love - Sade",
  "By Your Side - Sade",
  "Here Comes the Hotstepper - Ini Kamoze",
  "Macarena (Bayside Boys Remix) - Los Del Rio",
  "Mambo No. 5 (A Little Bit of...) - Lou Bega",
  "Blue (Da Ba Dee) - Eiffel 65",
  "Barbie Girl - Aqua",
  "Everybody Everybody - Black Box",
  "Rhythm Is a Dancer - Snap!",
  "What Is Love - Haddaway",
  "Be My Lover - La Bouche",
  "Another Night - Real McCoy",
  "Never Gonna Give You Up - Rick Astley",
];

const kidsElectronicTracks = [
  "Easy On Me (Lyfes Remix) - Adele",
  "Ordinary (Toby Strix Remix) EXT - Alex Warren",
  "Girl On Fire (Jacked Remix) - Alicia Keys",
  "Pineapple Princess ((From Hawaiiannette ) [Kinsey Moore Remix]) - Annette Funicello",
  "Barbie Girl Remix 2011 tancev - Aqua",
  "Theme Song Remix - Avengers",
  "Who Let The Dogs Out Dj Ozeroff Dj Sky Remix Electro House Electro Club VocalHouse - Baha Men",
  "Tarzan Boy Dj kriss latvia remix - Baltimora",
  "Beautiful Things (Henri PFR Extended Remix)",
  "Once Upon a Dream ((From Sleeping Beauty ) [Trion Remix]) - Bill Shirley, Mary Costa",
  "All The Small Things Justin Caruso Remix - Blink182",
  "The Duck Song The Duck and the Lemonade Stand - Bryant Oden",
  "GONNA MAKE YOU SWEAT (EVERYBODY DANCE NOW) [SIR GIO REMIX] - C&C MUSIC FACTORY",
  "The Floor Is Lava Song For Kids - Coach Ceevan",
  "Sky Full Of Stars (GRAM Remix) [Extended]v2 - Coldplay",
  "Sky Full Of Stars (GRAM Remix) [Radio Edit]v2 - Coldplay",
  "Axel F Index-1 Remix - Crazy Frog",
  "Wrecking Ball (Remix) - DJ Remix Factory",
  "Faded Chris Viviano SJUR Remix - Dj SiriusOfficial group Alan Walker",
  "Dolphin On Wheels (Bitten by Riff Rabbit)",
  "Dance The Night DE SOFFER Remix - Dua Lipa",
  "Blue (Mr. M!X Remix) - Eiffel 65",
  "Blue Da Ba Dee Reverence Bootleg - Eiffel65",
  "Peanut Butter Jelly (I.C.U Bootleg) v5 - Galantis",
  "Runaway (Lukas Bach Remix) - Galantis",
  "Hawaiian Roller Coaster Ride (Original Mix) - Gameloft, Martin Courcy",
  "Get Down On It (Maloo Bootleg) MP3",
  "Alex Kade, CVSS 123bpm Gmaj 9A - Golden (Alex Kade edit) [KPop Demon Hunters] EXTENDED",
  "What It Sounds Like (Fairlane Remix) - HUNTR X",
  "How Far I'll Go (Renco & Stavros Martina remix)",
  "Gummy Bear Remix by I-Kiria Morgenstern - I-Kiria Morgenstern",
  "Let It Go ((From Frozen ) [Armin van Buuren Remix]) - Idina Menzel",
  "Let It Go (Kepik Remix) - Idina Menzel",
  "Watermelon Meow Meow - Imagination Movers",
  "Don't Stop Believin' (dejinosuke Remix) EXTENDED MASTER - Journey",
  "3 - Aladdin - Friend like me (Stabfinger & K.D.S HOUSE remix) - K.D.S",
  "Waving Flag FIFA2010 World Cup - K naan",
  "Running Up That Hill (Kastra Remix) [Extended] - Kate Bush",
  "Running Up That Hill (Kastra Remix) - Kate Bush",
  "Running Up That Hill Mark Sherry s Stranger Things Remix - Kate Bush",
  "Firework (Marvin Vogel Remix) - Katy Perry",
  "Celebration (Greg Aven Remix) - Kool & The Gang",
  "Just Dance (Redliners Remix) - Lady Gaga",
  "Life is a Highway (Goons Remix)",
  "Old Town Road Beowulf Remix - Lil Nas X Feat.Billy Ray Cyrus",
  "One Day (BUUYO Remix) - Matisyahu",
  "Banana Remix - Minions",
  "N-1 LG STARGAZING REMIX EXT FINAL MK3",
  "The Floor Is Lava NCS Release - NIVIRO",
  "Crab Rave (Original Mix) - Noisestorm",
  "Steve s Lava Chicken REMIX - NoteBlock",
  "Stranger Things Remix Extended - Noyz Datamotion",
  "It s Raining Tacos - OST Star protiv sil zla",
  "Old Town Road (Milk N Cooks Remix)",
  "Give It All (Original Mix) - Onslow",
  "Gangnam Style DJ Tarantino DJ x X x Remix - PSY",
  "Gangnam Style Slash Junior Remix - PSY",
  "Party US (Xstra Remix)",
  "Pirates of the Caribbean (BERMUDA Remix) [Extended Mix]",
  "Sunflower (extended reggaeton remix) - Post Malone, Swae Lee, Nicky Jam & Prince Royce",
  "How Far Ill Go Lori Glori (Original Mix) - Psychotic Storm",
  "APT. (Dj Dark Remix) [Extended] - ROSÉ & Bruno Mars",
  "APT. (Dj Dark Remix) - ROSÉ & Bruno Mars",
  "You ve Got a Friend in Me ((From Toy Story ) [Alfred Montejano Hyper Remix]) - Randy Newman",
  "Michael Jackson - Billie Jean - Rework - Record Store Remixed",
  "Come and Get Your Love (Silver Nail Remix) (1) - Redbone",
  "Eye Of The Tiger (Original Mix) - Richard Grey, SHERPA, Eddie Pay",
  "APT. (Dabin Remix) - Ros x Bruno Mars",
  "Free (YUNIFY Remix) [K-Pop Demon Hunters] Final - Rumi x Jinu",
  "Crazy Frog Festival Edit Mix - FrkMusic.Info - STVW Mountblaq",
  "Zoo from Zootapia 2 - Shakira",
  "Top Of The World - Shawn Mendes",
  "Bamboleo - Sllash Doppe",
  "The Fate Of Ophelia (Loud Luxury Remix) - Taylor Swift, Loud Luxury",
  "Shake It Off original - Taylor Swift",
  "The Door (Carlos Fas & Vicente Fas Remix) - Teddy Swims",
  "Part Of Your World (dejinosuke 2023k Remix) Extended Mix - The Little Mermaid",
  "Part Of Your World (dejinosuke Extended Remix) FINAL - The Little Mermaid",
  "Ding dong song - The Crazy Frog",
  "Circle Of Life- m f Korol Lev 1994 nominaciya na Oskar - The Lion King",
  "Circle Of Life Sash S House Remix Extended Version - The Lion King",
  "Everything is Awesome OST Lego movie Oscar 2015 - The Lonely Island",
  "The Hamsterdance Song - Tikki Club",
  "MC HAMMER (MATT FAULK FLIP) - U CAN'T TOUCH THIS",
  "Wheels on the Bus D B - Venjent",
  "Do You (Original Mix) - Vintage Culture",
  "Shut Up And Dance With Me The White Panda Remix - Walk The Moon",
  "Shut Up and Dance With Me - Shut up and dance with me Oh don t you dare look back Ju - Walk The Moon",
  "Pink Pony Club (Workout Cardio Mix) - Workout Music",
  "Whats does the fox say - Yilvis",
  "HARRY POTTER THEME (REMIX - MASTERED) - ZANS",
  "Lowderz - Do i Wanna Know 2k17 Rework - eMusic",
  "heHc41h47I8",
  "watermelon meow meow 4min remix",
  "watermelon meow meow kids edm festival remix",
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function censorTrackTitle(title) {
  return title
    .replace(/\bfuck(?:in'?g)?\b/gi, "f***")
    .replace(/\bbitch\b/gi, "b****")
    .replace(/\bass\b/gi, "a**")
    .replace(/\bshit\b/gi, "s***");
}

function Card({ className = "", style, children }) {
  return (
    <div className={cn("rounded-xl", className)} style={style}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", variant, type = "button", children, ...props }) {
  const variantClass = variant === "ghost" ? "bg-transparent" : "";
  return (
    <button type={type} className={cn("inline-flex items-center justify-center", variantClass, className)} {...props}>
      {children}
    </button>
  );
}

function Input({ className = "", ...props }) {
  return <input className={cn("w-full px-4", className)} {...props} />;
}

function Textarea({ className = "", ...props }) {
  return <textarea className={cn("w-full px-4 py-3", className)} {...props} />;
}

function PageContainer({ children }) {
  return <div className="max-w-7xl mx-auto px-6 md:px-10">{children}</div>;
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl space-y-4 mb-10">
      <div className="uppercase tracking-[0.35em] text-xs" style={{ color: gold }}>
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-serif" style={{ color: "#f5e7b0" }}>
        {title}
      </h2>
      <p className="text-sm md:text-base leading-7 text-zinc-300">{text}</p>
    </div>
  );
}

/** Raster logo (1024×683) from `public/` — respects Vite `base` for GitHub Pages. */
function logoAssetUrl() {
  const base = import.meta.env.BASE_URL;
  const path = "alpha-omega-djs-logo.png";
  return base.endsWith("/") ? `${base}${path}` : `${base}/${path}`;
}

function LogoMark() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 [transform:translateZ(0)]">
      <img
        src={logoAssetUrl()}
        alt="Alpha &amp; Omega DJs logo"
        className="w-full max-w-[min(100%,28rem)] sm:max-w-[32rem] h-auto object-contain select-none"
        width={1024}
        height={683}
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <section className="relative overflow-hidden border-b" style={{ borderColor: border }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_35%),linear-gradient(180deg,rgba(212,175,55,0.04),transparent_35%)]" />
      <PageContainer>
        <div className="min-h-[88vh] flex items-center py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em]" style={{ borderColor: border, color: softGold }}>
                <Heart size={14} />
                Weddings First • All Events Welcome
              </div>
              <div className="space-y-5">
                <h1 className="text-5xl md:text-7xl font-serif leading-tight antialiased" style={{ color: "#f8edc0" }}>
                  Wedding-first entertainment for unforgettable receptions, proms, parties, school events, and milestone celebrations.
                </h1>
                <p className="text-lg md:text-xl leading-8 text-zinc-300 max-w-2xl">
                  Alpha &amp; Omega DJs specializes in weddings first, while also bringing the same polished energy, refined presentation, and packed dance floors to prom nights, birthday parties, school functions, and private events.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setPage("contact")} className="rounded-2xl px-7 py-6 text-base bg-transparent border hover:bg-white/5" style={{ borderColor: gold, color: "#f7e3a0" }}>
                  Inquire Now
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <Card className="w-full max-w-xl rounded-[1.5rem] border p-4 md:p-5 bg-gradient-to-b from-[#121212] to-[#090909] shadow-[0_0_40px_rgba(212,175,55,0.08)]" style={{ borderColor: border }}>
                <CardContent>
                  <LogoMark />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ExampleTracksPage() {
  const visibleTrackCount = 10;

  return (
    <section className="py-20 md:py-24 border-y" style={{ borderColor: border }}>
      <PageContainer>
        <SectionHeader
          eyebrow="Example Tracks"
          title="Sample music crates"
          text="Browse two sample track lists we can pull from to shape your event playlist."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="rounded-[1.5rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
            <CardContent className="p-6 md:p-8 space-y-5">
              <h3 className="text-2xl font-serif" style={{ color: "#f5e7b0" }}>
                Hip-hop
              </h3>
              <div className="rounded-2xl border bg-black/25 overflow-y-auto max-h-[21rem] pr-1" style={{ borderColor: border }}>
                <ol className="divide-y divide-zinc-800/70">
                  {exampleTracks.map((track, idx) => (
                    <li key={track} className="px-4 py-2.5 text-sm text-zinc-200">
                      <span className="mr-3 text-zinc-500">{idx + 1}.</span>
                      {censorTrackTitle(track)}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Showing {Math.min(visibleTrackCount, exampleTracks.length)} at a glance, scroll for all {exampleTracks.length}.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[1.5rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
            <CardContent className="p-6 md:p-8 space-y-5">
              <h3 className="text-2xl font-serif" style={{ color: "#f5e7b0" }}>
                Electronic Music
              </h3>
              <div className="rounded-2xl border bg-black/25 overflow-y-auto max-h-[21rem] pr-1" style={{ borderColor: border }}>
                <ol className="divide-y divide-zinc-800/70">
                  {electronicTracks.map((track, idx) => (
                    <li key={track} className="px-4 py-2.5 text-sm text-zinc-200">
                      <span className="mr-3 text-zinc-500">{idx + 1}.</span>
                      {censorTrackTitle(track)}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Showing {Math.min(visibleTrackCount, electronicTracks.length)} at a glance, scroll for all {electronicTracks.length}.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[1.5rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
            <CardContent className="p-6 md:p-8 space-y-5">
              <h3 className="text-2xl font-serif" style={{ color: "#f5e7b0" }}>
                80s &amp; 90s Hits
              </h3>
              <div className="rounded-2xl border bg-black/25 overflow-y-auto max-h-[21rem] pr-1" style={{ borderColor: border }}>
                <ol className="divide-y divide-zinc-800/70">
                  {classic80s90sTracks.map((track, idx) => (
                    <li key={track} className="px-4 py-2.5 text-sm text-zinc-200">
                      <span className="mr-3 text-zinc-500">{idx + 1}.</span>
                      {censorTrackTitle(track)}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Showing {Math.min(visibleTrackCount, classic80s90sTracks.length)} at a glance, scroll for all {classic80s90sTracks.length}.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[1.5rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
            <CardContent className="p-6 md:p-8 space-y-5">
              <h3 className="text-2xl font-serif" style={{ color: "#f5e7b0" }}>
                Kids Electronic
              </h3>
              <div className="rounded-2xl border bg-black/25 overflow-y-auto max-h-[21rem] pr-1" style={{ borderColor: border }}>
                <ol className="divide-y divide-zinc-800/70">
                  {kidsElectronicTracks.map((track, idx) => (
                    <li key={track} className="px-4 py-2.5 text-sm text-zinc-200">
                      <span className="mr-3 text-zinc-500">{idx + 1}.</span>
                      {censorTrackTitle(track)}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Showing {Math.min(visibleTrackCount, kidsElectronicTracks.length)} at a glance, scroll for all {kidsElectronicTracks.length}.
              </p>
            </CardContent>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="py-20 md:py-24 border-y" style={{ borderColor: border }}>
      <PageContainer>
        <div className="max-w-3xl space-y-10">
          <div className="space-y-3">
            <div className="uppercase tracking-[0.35em] text-xs" style={{ color: gold }}>
              Alpha &amp; Omega DJs
            </div>
            <h2 className="text-3xl md:text-5xl font-serif" style={{ color: "#f5e7b0" }}>
              Why Clients Choose Us
            </h2>
            <p className="text-sm md:text-base leading-7 text-zinc-300">
              We know how to throw a party and keep it classy. From big wedding moments to packed dance floors, we bring high
              energy, smooth flow, and a vibe that feels fun without ever feeling chaotic.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-sm font-semibold tracking-[0.18em] uppercase" style={{ color: softGold }}>
                Your Crowd, Your Soundtrack
              </div>
              <p className="text-sm md:text-base leading-7 text-zinc-300">
                No cookie-cutter playlists here. We build the music around your people, your taste, and your event style, then read
                the room live to keep everyone engaged.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold tracking-[0.18em] uppercase" style={{ color: softGold }}>
                Easy Planning, Zero Stress
              </div>
              <p className="text-sm md:text-base leading-7 text-zinc-300">
                We are responsive, organized, and easy to work with. You get clear communication, thoughtful prep, and a team that
                shows up ready so you can actually enjoy your event.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold tracking-[0.18em] uppercase" style={{ color: softGold }}>
                Experienced for Any Celebration
              </div>
              <p className="text-sm md:text-base leading-7 text-zinc-300">
                Weddings are our core, but we also rock school events, private parties, birthdays, and large celebrations. Different
                crowd? Different energy? We know how to adapt.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-semibold tracking-[0.18em] uppercase" style={{ color: softGold }}>
                Professional Setup, Great Atmosphere
              </div>
              <p className="text-sm md:text-base leading-7 text-zinc-300">
                Clean presentation, polished sound, and confident hosting help your event feel elevated while still feeling like you.
              </p>
            </div>
          </div>

          <Card className="rounded-[1.5rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
            <CardContent className="p-6 md:p-8 space-y-5">
              <div className="space-y-2">
                <div className="uppercase tracking-[0.35em] text-xs" style={{ color: gold }}>
                  Meet the DJs
                </div>
                <h3 className="text-2xl md:text-3xl font-serif" style={{ color: "#f5e7b0" }}>
                  Billy (DJ AO)
                </h3>
              </div>
              <p className="text-sm md:text-base leading-7 text-zinc-300">
                Billy brings nearly three decades of DJ experience, having begun his career in 1996. He started on belt-driven
                Gemini turntables, progressed to industry-standard Technics decks, and ultimately transitioned to digital platforms
                in 2006. This evolution has allowed him to dramatically expand his music library and deliver a more versatile,
                seamless experience tailored to each event.
              </p>
              <p className="text-sm md:text-base leading-7 text-zinc-300">
                His roots are in the vibrant 1990s New Orleans EDM scene, where he developed his foundational style and crowd-reading
                instincts. Over the years, Billy has performed across a wide range of event sizes and settings from intimate 50-person
                house parties to school events and large-scale EDM gatherings of over 1,000 attendees. This breadth of experience
                enables him to adapt effortlessly to different audiences, atmospheres, and energy levels.
              </p>
              <p className="text-sm md:text-base leading-7 text-zinc-300">
                Billy&apos;s musical expertise spans multiple genres, including electronic dance music (EDM), industrial, rock,
                alternative, pop, hip hop, and curated selections from the 80s and 90s. His ability to blend these styles ensures a
                dynamic and engaging set that resonates with diverse crowds, making him a strong fit for weddings, private events,
                school functions, and large celebrations alike.
              </p>
            </CardContent>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}

function ImagesPage() {
  return (
    <section className="py-20 md:py-24">
      <PageContainer>
        <SectionHeader eyebrow="Images" title="Gallery placeholders ready to replace." text="Swap these blocks with real event photos." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPlaceholders.map((item, idx) => (
            <motion.div key={item} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <Card className="overflow-hidden rounded-[2rem] border bg-[#0b0b0b]" style={{ borderColor: border }}>
                <div className="aspect-[4/5] bg-[linear-gradient(180deg,rgba(212,175,55,0.18),rgba(255,255,255,0.02))] flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-2xl border flex items-center justify-center" style={{ borderColor: border, color: gold }}>
                      <ImageIcon size={28} />
                    </div>
                    <div className="text-lg font-serif" style={{ color: "#f6e4aa" }}>
                      {item}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent("New inquiry from Alpha & Omega DJs website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:basslines@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="py-20 md:py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="Contact"
          title="A refined inquiry page."
          text="Use the form below to share your event details. Your message will be sent directly to our inbox."
        />
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <Card className="rounded-[2rem] border bg-[#0b0b0b]" style={{ borderColor: border }}>
            <CardContent className="p-8 md:p-10 space-y-8">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "basslines@gmail.com" },
                { icon: <Phone size={18} />, label: "Phone", value: "504-450-3281" },
                {
                  icon: <MapPin size={18} />,
                  label: "Service Area",
                  value: "Central Texas (Dallas, Houston, Austin, San Antonio)",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-2xl border flex items-center justify-center mt-1" style={{ borderColor: border, color: gold }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="uppercase text-xs tracking-[0.25em]" style={{ color: gold }}>
                      {item.label}
                    </div>
                    <div className="text-zinc-200 text-lg mt-1">{item.value}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-[2rem] border bg-gradient-to-b from-[#111] to-[#0a0a0a]" style={{ borderColor: border }}>
            <CardContent className="p-8 md:p-10">
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500"
                    style={{ borderColor: border }}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="h-12 rounded-2xl border bg-black/20 text-white placeholder:text-zinc-500"
                    style={{ borderColor: border }}
                    required
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your event vision..."
                  className="min-h-[180px] rounded-[1.5rem] border bg-black/20 text-white placeholder:text-zinc-500"
                  style={{ borderColor: border }}
                  required
                />
                <Button type="submit" className="rounded-2xl h-12 bg-transparent border hover:bg-white/5 text-base" style={{ borderColor: gold, color: "#f6e3a6" }}>
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </PageContainer>
    </section>
  );
}

export default function AlphaOmegaDjsWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("home");

  const pageContent = useMemo(() => {
    switch (page) {
      case "about":
        return <AboutPage />;
      case "tracks":
        return <ExampleTracksPage />;
      case "images":
        return <ImagesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  }, [page]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: bg, color: "white" }}>
      <header className="sticky top-0 z-50 backdrop-blur border-b bg-black/70" style={{ borderColor: border }}>
        <PageContainer>
          <div className="h-20 flex items-center justify-between">
            <button onClick={() => setPage("home")} className="text-left">
              <div className="text-xs uppercase tracking-[0.38em]" style={{ color: gold }}>
                Alpha &amp; Omega
              </div>
              <div className="text-lg md:text-xl font-serif" style={{ color: "#f3dd95" }}>
                DJs
              </div>
            </button>
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const active = page === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setPage(item.id)}
                    className="px-4 py-2 rounded-full text-sm tracking-[0.2em] uppercase transition"
                    style={{
                      color: active ? "#f7e4a6" : "#d4d4d8",
                      border: `1px solid ${active ? gold : "transparent"}`,
                      background: active ? "rgba(212,175,55,0.08)" : "transparent",
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle Menu">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-5 grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPage(item.id);
                    setMenuOpen(false);
                  }}
                  className="text-left rounded-2xl border px-4 py-3 uppercase tracking-[0.2em] text-sm"
                  style={{ borderColor: border, color: page === item.id ? "#f7e4a6" : "#e4e4e7" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </PageContainer>
      </header>
      <section aria-label="Page content">{pageContent}</section>
    </div>
  );
}
