const DATA = [
  {
    id: "9781250758842",
    alt: "Winter's Orbit",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/winters-orbit.jpg",
    caption:
      "While the Iskat Empire has long dominated the system through treaties and political alliances, several planets, including Thea, have begun to chafe under Iskat's rule. When tragedy befalls Imperial Prince Taam, his Thean widower, Jainan, is rushed into an arranged marriage with Taam's cousin, the disreputable Kiem, in a bid to keep the rising hostilities between the two worlds under control.",
  },
  {
    id: "9781500453305",
    alt: "The Long Way to a Small, Angry Planet",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/small-angry.jpg",
    caption:
      "Follow a motley crew on an exciting journey through space-and one adventurous young explorer who discovers the meaning of family in the far reaches of the universe-in this light-hearted debut space opera from a rising sci-fi star.",
  },
  {
    id: "9781473621442",
    alt: "A Closed and Common Orbit",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/common-orbit.jpg",
    caption:
      "Lovelace was once merely a ship's artificial intelligence. When she wakes up in an new body, following a total system shut-down and reboot, she has no memory of what came before. As Lovelace learns to negotiate the universe and discover who she is, she makes friends with Pepper, an excitable engineer, who's determined to help her learn and grow.",
  },
  {
    id: "9781473647602",
    alt: "Record of a Spaceborn Few",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/spaceborn.jpg",
    caption:
      "Centuries after the last humans left Earth, the Exodus Fleet is a living relic, a place many are from but few outsiders have seen. Humanity has finally been accepted into the galactic community, but while this has opened doors for many, those who have not yet left for alien cities fear that their carefully cultivated way of life is under threat.",
  },
  {
    id: "9780062936059",
    alt: "The Galaxy, and the Ground Within",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/ground-within.jpg",
    caption:
      "With no water, no air, and no native life, the planet Gora is unremarkable. The only thing it has going for it is a chance proximity to more popular worlds, making it a decent stopover for ships traveling between the wormholes that keep the Galactic Commons connected. If deep space is a highway, Gora is just your average truck stop.",
  },
  {
    id: "B074DZ1HBG",
    alt: "Dial D for Deadman",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/deadman.jpg",
    caption:
      "In an alien city torn apart by crooked cops and ruthless criminals, private detective, Dan Deadman, specializes in cases unusual and bizarre.\n\nSure, he doesn't smell great, and he's technically been dead for quite some time, but if you've got a rampaging Hell-beast tearing up your street, or a portal to another dimension appearing in your bathroom, Dan's your man.",
  },
  {
    id: "9781612184715",
    alt: "Off to Be the Wizard",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/wizard.jpg",
    caption:
      "Martin Banks is just a normal guy who has made an abnormal discovery: he can manipulate reality, thanks to reality being nothing more than a computer program. With every use of this ability, though, Martin finds his little “tweaks” have not escaped notice. Rather than face prosecution, he decides instead to travel back in time to the Middle Ages and pose as a wizard.",
  },
  {
    id: "9781477830918",
    alt: "Master of Formalities",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/formalities.jpg",
    caption:
      "Even when finding oneself engaged in interstellar war, good form must be observed. Our story is set thousands of years after the Terran Exodus, where two powerful, planet-dominating families—the elegant House Jakabitus and the less refined Hahn Empire—have reached a critical point in their generations-long war. Master Hennik, the Hahn ruler’s only son, has been captured, and the disposition of his internment may represent a last and welcome chance for peace.",
  },
  {
    id: "B015Q9EKA0",
    alt: "The Authorities™",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/authorities.jpg",
    caption:
      "Sinclair Rutherford is a young Seattle cop with a taste for the finer things. Doing menial tasks and getting hassled by superiors he doesn't respect are definitely not “finer things.” Good police work and bad luck lead him to crack a case that changes quickly from a career-making break into a high-profile humiliation when footage of his pursuit of the suspect—wildly inappropriate murder weapon in hand—becomes an Internet sensation.",
  },
  {
    id: "B01LWAESYQ",
    alt: "We Are Legion (We Are Bob)",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/bob.jpg",
    caption:
      "Bob Johansson has just sold his software company and is looking forward to a life of leisure. There are places to go, books to read, and movies to watch. So it's a little unfair when he gets himself killed crossing the street.\n\nBob wakes up a century later to find that corpsicles have been declared to be without rights, and he is now the property of the state. He has been uploaded into computer hardware and is slated to be the controlling AI in an interstellar probe looking for habitable planets. The stakes are high: no less than the first claim to entire worlds. If he declines the honor, he'll be switched off, and they'll try again with someone else. If he accepts, he becomes a prime target. There are at least three other countries trying to get their own probes launched first, and they play dirty.",
  },
  {
    id: "9781506701653",
    alt: "Will Save The Galaxy For Food",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/mckeown.jpg",
    caption:
      "A not-quite epic science fiction adventure about a down-on-his luck galactic pilot caught in a cross-galaxy struggle for survival! Space travel just isn't what it used to be. With the invention of Quantum Teleportation, space heroes aren't needed anymore. When one particularly unlucky ex-adventurer masquerades as famous pilot and hate figure Jacques McKeown, he's sucked into an ever-deepening corporate and political intrigue. Between space pirates, adorable deadly creatures, and a missing fortune in royalties, saving the universe was never this difficult!",
  },
  {
    id: "B00FZ4OPI4",
    alt: "Screw The Galaxy: Hard Luck Hank",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/hank.jpg",
    caption:
      "Hank is a thug. He knows he's a thug. He has no problem with that realization. In his view the galaxy has given him a gift: a mutation that allows him to withstand great deals of physical trauma. He puts his abilities to the best use possible and that isn't by being a scientist.",
  },
  {
    id: "9788497939201",
    alt: "Artemis Fowl",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/fowl.jpg",
    caption:
      "Twelve-year-old Artemis Fowl is a millionaire, a genius, and above all, a criminal mastermind. But even Artemis doesn't know what he's taken on when he kidnaps a fairy, Captain Holly Short of the LEPrecon Unit. These aren't the fairies of bedtime stories—they're dangerous! Full of unexpected twists and turns, Artemis Fowl is a riveting, magical adventure.",
  },
  {
    id: "9781786186300",
    alt: "Tune In Tomorrow",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/tune-in-tomorrow.jpg",
    caption:
      "Starr Weatherby came to New York to become… well, a star. But after ten years and no luck, she’s offered a big role – on a show no one has ever heard of. And there’s a reason for that. It’s a ‘reality’ show beyond the Veil, human drama, performed for the entertainment of the Fae.",
  },
  {
    id: "9781443434867",
    alt: "Station Eleven",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/station-eleven.jpg",
    caption:
      "An audacious, darkly glittering novel set in the eerie days of civilization’s collapse, Station Eleven tells the spellbinding story of a Hollywood star, his would-be savior, and a nomadic group of actors roaming the scattered outposts of the Great Lakes region, risking everything for art and humanity.",
  },
  {
    id: "B000SEIK2S",
    alt: "Old Man's War",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/old-mans-war.jpg",
    caption:
      "John Perry did two things on his 75th birthday. First he visited his wife's grave. Then he joined the army.\n\nThe good news is that humanity finally made it into interstellar space. The bad news is that planets fit to live on are scarce-- and alien races willing to fight us for them are common. So: we fight. To defend Earth, and to stake our own claim to planetary real estate. Far from Earth, the war has been going on for decades: brutal, bloody, unyielding.",
  },
  {
    id: "9780316229296",
    alt: "The Fifth Season",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/fifth-season.jpg",
    caption:
      "This is the way the world ends. Again.\n\nThree terrible things happen in a single day. Essun, a woman living an ordinary life in a small town, comes home to find that her husband has brutally murdered their son and kidnapped their daughter. Meanwhile, mighty Sanze -- the world-spanning empire whose innovations have been civilization's bedrock for a thousand years -- collapses as most of its citizens are murdered to serve a madman's vengeance. And worst of all, across the heart of the vast continent known as the Stillness, a great red rift has been torn into the heart of the earth, spewing ash enough to darken the sky for years. Or centuries.",
  },
  {
    id: "9781250758866",
    alt: "Ocean’s Echo",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/oceans-echo.jpg",
    caption:
      "Rich socialite, inveterate flirt, and walking disaster Tennalhin Halkana can read minds. Tennal, like all neuromodified “readers,” is a security threat on his own. But when controlled, readers are a rare asset. Not only can they read minds, but they can navigate chaotic space, the maelstroms surrounding the gateway to the wider universe.",
  },
  {
    id: "9781682300688",
    alt: "Dreadnought",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/dreadnought.jpg",
    caption:
      "Until Dreadnought fell out of the sky and died right in front of her, Danny was trying to keep people from finding out she’s transgender. But before he expired, Dreadnought passed his mantle to her, and those secondhand superpowers transformed Danny’s body into what she’s always thought it should be. Now there’s no hiding that she’s a girl.\n\nIt should be the happiest time of her life, but Danny’s first weeks finally living in a body that fits her are more difficult and complicated than she could have imagined. Between her father’s dangerous obsession with “curing” her girlhood, her best friend suddenly acting like he’s entitled to date her, and her fellow superheroes arguing over her place in their ranks, Danny feels like she’s in over her head.",
  },
  {
    id: "9781250788870",
    alt: "A Marvellous Light",
    src: "https://sandpack-bundler.vercel.app/img/book-covers/marvellous-light.jpg",
    caption:
      "Set in an alternative Edwardian England, this is a comedy of manners, manor houses, and hedge mazes: including a magic-infused murder mystery and a delightful queer romance.",
  },
];

export default DATA;
