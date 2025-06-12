export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  videoUrl: string;
  kahootLink: string;
  topics: string[];
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'Society 4.0 and 5.0',
    description: 'A quick introduction to the evolution from industrial to smart societies, explaining how Society 5.0 integrates technology into daily life for social benefit.',
    thumbnailUrl: '/thumbnail1.png',
    duration: '8:10',
    videoUrl: 'https://drive.google.com/file/d/1e1uXGjx7tRHdPPKsB9fc6imwllrMpZNn/preview',
    kahootLink: 'https://kahoot.it/challenge/08658767?challenge-id=f865b48d-5eb2-4039-a112-271f45c6838b_1748704138035',
    topics: ['Society 4.0', 'Society 5.0', 'Smart Society', 'Technology'],
  },
  {
    id: '2',
    title: 'Big Data and Social Media Algorithms',
    description: 'Explains how platforms like TikTok and Instagram use algorithms to predict and shape user behavior, and introduces basic ideas of machine learning.',
    thumbnailUrl: '/big-data.jpg',
    duration: '5:45',
    videoUrl: 'https://drive.google.com/file/d/1UuCAiVMmP51hRmI0_asrHo3JEAiJ0oZw/preview',
    kahootLink: '#',
    topics: ['Big Data', 'Algorithms', 'Machine Learning', 'Social Media'],
  },
  {
    id: '3',
    title: 'Brain-Computer Interfaces / Neuralink',
    description: 'Shows how technology is enabling people to control devices with their minds, featuring Neuralink and other medical applications for the disabled.',
    thumbnailUrl: '/thumbnails/neuralink.jpg',
    duration: '5:00',
    videoUrl: '#',
    kahootLink: '#',
    topics: ['Brain-Computer Interface', 'Neuralink', 'Medical Technology'],
  },
  {
    id: '4',
    title: 'Genetically Modified Organisms (GMO)',
    description: 'Demonstrates how genetic engineering creates organisms like glow-in-the-dark rabbits or drought-resistant rice to help farmers.',
    thumbnailUrl: '/thumbnails/gmo.jpg',
    duration: '5:00',
    videoUrl: '#',
    kahootLink: '#',
    topics: ['GMO', 'Genetic Engineering', 'Biotechnology'],
  },
  {
    id: '5',
    title: 'Chemistry in Cosmetics',
    description: 'Breaks down how chemistry helps create and improve everyday beauty products, from moisturizers to sunscreens.',
    thumbnailUrl: '/thumbnails/cosmetics.jpg',
    duration: '5:00',
    videoUrl: '#',
    kahootLink: '#',
    topics: ['Chemistry', 'Cosmetics', 'Everyday Science'],
  },
  {
    id: '6',
    title: 'NFTs and Blockchain',
    description: 'Uses digital art and NFTs to explain the mathematical ideas behind blockchain, encryption, and token-based economies.',
    thumbnailUrl: '/thumbnails/nft.jpg',
    duration: '5:00',
    videoUrl: '#',
    kahootLink: '#',
    topics: ['NFT', 'Blockchain', 'Encryption', 'Digital Art'],
  },
  {
    id: '7',
    title: 'Biomimetics',
    description: 'Highlights how nature inspires innovation—like lotus leaf coatings preventing yogurt from sticking to lids or gecko-inspired adhesives.',
    thumbnailUrl: '/thumbnails/biomimetics.jpg',
    duration: '5:00',
    videoUrl: '#',
    kahootLink: '#',
    topics: ['Biomimetics', 'Nature', 'Innovation'],
  },
  {
    id: '8',
    title: 'The Metaverse and Haptic Technology',
    description: 'Introduces virtual and augmented reality, focusing on how touch-based (haptic) feedback is making the metaverse more immersive.',
    thumbnailUrl: '/thumbnails/metaverse.jpg',
    duration: '5:00',
    videoUrl: '#',
    kahootLink: '#',
    topics: ['Metaverse', 'Haptic Technology', 'Virtual Reality', 'Augmented Reality'],
  },
  {
    id: '9',
    title: 'Palm Detection Technology',
    description: 'Starts with ATM security and explains how palm recognition works, emphasizing its accuracy and resistance to forgery.',
    thumbnailUrl: '/thumbnails/palm.jpg',
    duration: '5:00',
    videoUrl: '#',
    kahootLink: '#',
    topics: ['Palm Detection', 'Biometrics', 'Security'],
  },
  {
    id: '10',
    title: 'Relativity and GPS',
    description: 'Explores how Einstein\'s theory of relativity is essential for the precise functioning of GPS systems around the world.',
    thumbnailUrl: '/thumbnails/gps.jpg',
    duration: '5:00',
    videoUrl: '#',
    kahootLink: '#',
    topics: ['Relativity', 'GPS', 'Physics'],
  },
]; 