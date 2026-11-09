// About page copy — verbatim from the client's "ABOUT US — Final designer brief" (ClickUp, Oct 2026).
import type { ImageMetadata } from 'astro';
import friedrichstadt from '../assets/about/collab/friedrichstadt-palast.jpg';
import duo from '../assets/about/latina-festival.jpg';
import trampwall1 from '../assets/about/trampwall-1.jpg';
import trampwall2 from '../assets/about/trampwall-2.jpg';
import flashday from '../assets/about/collab/zircus-flashday.jpg';
import soleil from '../assets/about/collab/cirque-du-soleil.jpg';
import eloize from '../assets/about/collab/cirque-eloize.jpg';
import sevenFingers from '../assets/about/collab/the-7-fingers.jpg';
import knie from '../assets/about/collab/circus-knie.jpg';
import sonrisas from '../assets/about/collab/productores-de-sonrisas.jpg';
import rafaPhoto from '../assets/home/founder-rafa.png';
import pacoPhoto from '../assets/home/founder-paco.png';

export interface Project {
  title: string;
  /** Short facts line under the title (e.g. "6 performers / 2 teeterboards"). */
  meta: string;
  text: string;
  image: ImageMetadata;
  alt: string;
  /** Focal point when the photo is cropped to the card (CSS object-position). */
  focus?: string;
}

export const intro = {
  lead: 'Arte Algo is a contemporary circus company based in Granada, Spain, founded by brothers Rafa and Paco Olmos.',
  body: [
    'What began in 2017 with the creation of our own acrobatic acts has gradually grown into an international journey. Over the years, we have created and performed with artists from different countries, brought our work to stages around the world, received recognition at major international circus festivals and taken part in television productions. Along the way, we have also had the opportunity to perform and collaborate within productions by Cirque du Soleil, Friedrichstadt-Palast, Cirque Éloize, The 7 Fingers and Circus Knie.',
    'Each of these experiences has influenced the way we understand circus today. Working in different countries, with different companies, artists and creative environments has allowed us to discover new ways of approaching acrobatics, creation and the stage, while gradually shaping the identity of Arte Algo.',
    'This journey also led us to create our own circus studio in Granada, a space dedicated to training, workshops, research and creation. It is where we continue developing ideas, bringing artists together and giving new projects the time and space they need to grow.',
    'Today, Arte Algo is entering a new stage. Our main focus is the creation and production of complete circus shows designed to live on different stages and reach different audiences. We want to keep exploring what acrobatics can become when technique, movement, music and stage creation are developed as part of the same artistic language.',
    'For us, the future of Arte Algo lies in continuing to create, bringing new artists and ideas into the process, and developing productions that allow our work to travel, evolve and find its place on stages around the world.',
  ],
};

export const creations: Project[] = [
  {
    title: 'Friedrichstadt-Palast',
    meta: '6 performers / 2 teeterboards',
    text: 'For this large-scale production, Arte Algo developed an acrobatic act for six performers and two teeterboards. We were responsible for the stage concept, casting, acrobatic choreography and leadership of the team, while also performing as acrobats within the act. The creation remained on stage for two years and was seen live by more than one million spectators.',
    image: friedrichstadt,
    alt: 'Arte Algo teeterboard act at Friedrichstadt-Palast',
  },
  {
    title: 'Teeterboard Duo',
    meta: 'Rafa & Paco Olmos',
    text: "The creation that marked the beginning of Arte Algo. Developed and performed by Rafa and Paco Olmos, the act toured internationally with companies including Circus Knie and Roncalli, as well as appearing in television productions and major circus festivals. The duo received international recognition at the International Circus Festival of Italy in Latina, becoming one of the first milestones in Arte Algo's journey.",
    image: duo,
    alt: 'Rafa and Paco Olmos receiving an award at the International Circus Festival of Italy in Latina',
  },
  {
    title: 'Trampwall Creation I',
    meta: '6 international performers',
    text: "This project marked the beginning of Arte Algo's work with larger trampwall creations. Developed with six international performers, the act was built around a transparent wall with three windows and was presented in different circus productions, including Europa-Park. The experience became an important step in the development of our own approach to trampwall and eventually led us to design a new original structure for the next creation.",
    image: trampwall1,
    alt: 'Trampwall act with six performers and a transparent wall',
    focus: '60% 50%',
  },
  {
    title: 'Trampwall Creation II',
    meta: 'Created at Arte Algo Studio / original wall',
    text: 'Created and developed at the Arte Algo Studio in Granada, this trampwall project brought together six performers, including international artists invited to take part in the creation. Arte Algo developed its own original wall and led the casting, creative process and design of the acrobatic material, while also performing as part of the team. The creation has since been presented in several circus productions across Europe.',
    image: trampwall2,
    alt: 'Trampwall act on the original Arte Algo wall',
    focus: '75% 50%',
  },
  {
    title: 'ZIRCUS / FLASHDAY',
    meta: '90 min / approx. 15 artists / Granada',
    text: 'In collaboration with ZERO Tattoo, an established tattoo studio based in Granada, Arte Algo transformed its studio into the setting for a 90 minute circus production involving around 15 artists. The show brought together circus, live performance, music and hosting, with Arte Algo leading the overall creation and coordination of the production. More than 200 people attended the event, reaching full capacity and making ZIRCUS / FLASHDAY a sold out show.',
    image: flashday,
    alt: 'Artists on stage at ZIRCUS / FLASHDAY in the Arte Algo studio',
  },
];

export const collaborations: Project[] = [
  {
    title: 'Cirque du Soleil',
    meta: 'Rafa Olmos / Las Vegas',
    text: "Rafa Olmos spent two years performing with Mystère in Las Vegas as a teeterboard acrobat, also taking part in character and clown work within the production. During this period, he joined special projects including One Night for One Drop at the O Theatre in Bellagio, where he performed trampwall, as well as appearances on America's Got Talent and major sporting events.",
    image: soleil,
    alt: 'Rafa Olmos performing with Cirque du Soleil',
  },
  {
    title: 'Cirque Éloize',
    meta: 'Paco Olmos / ID Evolution',
    text: 'Paco Olmos toured internationally with Cirque Éloize in the production ID Evolution, performing as a trampoline acrobat and bounce juggling artist.',
    image: eloize,
    alt: 'Paco Olmos performing in Cirque Éloize ID Evolution',
  },
  {
    title: 'The 7 Fingers',
    meta: 'Rafa Olmos / Duel Reality',
    text: 'Rafa Olmos worked with The 7 Fingers on two different contracts for Duel Reality. He performed mainly as a teeterboard acrobat, also taking part in group acrobatics, Chinese pole, acting and on-stage speaking. For the cruise production, he also served as team captain, leading the acrobatic team, and later joined the land tour of Duel Reality for a short period.',
    image: sevenFingers,
    alt: 'Rafa Olmos performing in The 7 Fingers Duel Reality',
  },
  {
    title: 'Circus Knie',
    meta: 'Rafa & Paco Olmos / Switzerland',
    text: 'Rafa and Paco Olmos toured across Switzerland with Circus Knie, performing their teeterboard duo as one of their featured acts in the production. In addition to their own duo, they also performed a second act as part of the trampwall team, taking on two different roles within the same show.',
    image: knie,
    alt: 'Rafa and Paco Olmos performing with Circus Knie',
  },
  {
    title: 'Productores de Sonrisas',
    meta: 'Rafa & Paco Olmos / Spain',
    text: 'Rafa and Paco Olmos have collaborated with Productores de Sonrisas across several productions in Spain. Their first collaboration was at Teatro Circo Price in Madrid, performing trampwall and power track for its Christmas production. They later toured theatres across Spain for a year with Circlassica, presenting their teeterboard duo. Their most recent collaboration was Rock Circus, where they performed their teeterboard duo and brought a full trampwall team into the production.',
    image: sonrisas,
    alt: 'Rafa and Paco Olmos performing with Productores de Sonrisas',
  },
];

export interface CvGroup {
  label: string;
  items: string[];
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  photo: ImageMetadata;
  bio: string[];
  /** Selected CV — compiled only from facts in the approved brief; pending client confirmation. */
  cv: CvGroup[];
}

export const founders: Founder[] = [
  {
    id: 'rafa',
    name: 'Rafael Olmos',
    role: 'Co-Founder, Acrobat, Creator',
    photo: rafaPhoto,
    bio: [
      'Rafael Olmos is a co-founder of Arte Algo and has dedicated more than fifteen years to acrobatics and circus.',
      'His path began in competitive tumbling, where he became Spanish Champion, while also exploring disciplines such as tricking. Over time, competition gave way to the stage, and circus became the place where he found the freedom to combine physical challenge, performance and creativity.',
      'Teeterboard became his main discipline, although his experience also includes trampwall, group acrobatics, floor acrobatics and power track. Throughout his career, he has performed internationally and taken part in a wide range of circus productions and creative environments.',
      'Beyond performing, Rafael has progressively moved towards creation, artistic development and team leadership. His curiosity for building new ideas and bringing people together has become an important part of his role within Arte Algo, where he now focuses on transforming acrobatic concepts into larger stage creations.',
    ],
    cv: [
      {
        label: 'Selected productions',
        items: [
          'Cirque du Soleil — Mystère, Las Vegas (two years)',
          'Cirque du Soleil — One Night for One Drop, O Theatre, Bellagio',
          'The 7 Fingers — Duel Reality (cruise production and land tour)',
          'Friedrichstadt-Palast — teeterboard act for six performers',
          'Circus Knie — Switzerland tour',
          'Productores de Sonrisas — Teatro Circo Price, Circlassica, Rock Circus',
        ],
      },
      { label: 'Disciplines', items: ['Teeterboard', 'Trampwall', 'Group acrobatics', 'Floor acrobatics', 'Power track'] },
      {
        label: 'Awards',
        items: ['Spanish Champion — competitive tumbling', 'International Circus Festival of Italy, Latina — Teeterboard Duo'],
      },
      {
        label: 'Responsibilities',
        items: [
          'Co-founder of Arte Algo — creation, artistic development and team leadership',
          'Team captain, Duel Reality cruise production',
          "Stage concept, casting and choreography of Arte Algo's acts",
        ],
      },
    ],
  },
  {
    id: 'paco',
    name: 'Paco Olmos',
    role: 'Co-Founder, Acrobat, Creator',
    photo: pacoPhoto,
    bio: [
      'Paco Olmos is a co-founder of Arte Algo and has dedicated his life to circus since 2018, developing his path through both acrobatics and artistic creation.',
      'Curiosity has always been an important part of the way he works. He is constantly looking for new challenges, new disciplines and ideas that can be transformed into something meaningful on stage. Alongside acrobatics, he has developed a strong connection with stage comedy, teaching and the creative process behind performance.',
      "His main disciplines include teeterboard, juggling and trampwall, together with experience across other areas of circus. Beyond performing, Paco has also been deeply involved in building the environment around Arte Algo, from supporting and developing teams to helping create the company's circus space in Granada and producing events for the local circus community.",
      'For Paco, circus is not only about the work on stage. It is also about the people involved in the process, the relationships built along the way and creating the right space for artists and ideas to grow.',
    ],
    cv: [
      {
        label: 'Selected productions',
        items: [
          'Cirque Éloize — ID Evolution, international tour',
          'Circus Knie — Switzerland tour',
          'Productores de Sonrisas — Teatro Circo Price, Circlassica, Rock Circus',
        ],
      },
      { label: 'Disciplines', items: ['Teeterboard', 'Juggling and bounce juggling', 'Trampwall', 'Trampoline'] },
      { label: 'Awards', items: ['International Circus Festival of Italy, Latina — Teeterboard Duo'] },
      {
        label: 'Responsibilities',
        items: [
          'Co-founder of Arte Algo — supporting and developing teams',
          "Helped create the company's circus studio in Granada",
          'Producing events for the local circus community',
          'Teaching and stage comedy',
        ],
      },
    ],
  },
];
