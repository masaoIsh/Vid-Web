export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  videoUrl: string;
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
    topics: ['Society 4.0', 'Society 5.0', 'Smart Society', 'Technology'],
  },
  {
    id: '2',
    title: 'Big Data and Social Media Algorithms',
    description: 'Explains how platforms like TikTok and Instagram use algorithms to predict and shape user behavior, and introduces basic ideas of machine learning.',
    thumbnailUrl: '/big-data.jpg',
    duration: '5:45',
    videoUrl: 'https://drive.google.com/file/d/1-fVlJcGHEPfrgug2d0Owm--BDby2Ud1V/preview',
    topics: ['Big Data', 'Algorithms', 'Machine Learning', 'Social Media'],
  },
  {
    id: '3',
    title: 'Brain-Computer Interfaces / Neuralink',
    description: 'Shows how technology is enabling people to control devices with their minds, featuring Neuralink and other medical applications for the disabled.',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=1L_h0_39gqvrCGS5m2-aWIyqziVQqloR7',
    duration: '5:00',
    videoUrl: 'https://drive.google.com/file/d/1GHwhPMBlG5IZhhjP6_7gMHlAF3H1dcJg/preview',
    topics: ['Brain-Computer Interface', 'Neuralink', 'Medical Technology'],
  },
  {
    id: '4',
    title: 'Genetically Modified Organisms (GMO)',
    description: 'Demonstrates how genetic engineering creates organisms like glow-in-the-dark rabbits or drought-resistant rice to help farmers.',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=17aiVBydp-RF9WIiKiiT7bud-ysRM9tGi',
    duration: '5:00',
    videoUrl: 'https://drive.google.com/file/d/1OCuwJqJY52LezYIPvU2vUPj6qn9MGaDd/preview',
    topics: ['GMO', 'Genetic Engineering', 'Biotechnology'],
  },
  {
    id: '5',
    title: 'Chemistry in Cosmetics',
    description: 'Breaks down how chemistry helps create and improve everyday beauty products, from moisturizers to sunscreens.',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=1i9p1c-hiYrFoiKendADZnOL89HbqzkdZ',
    duration: '5:00',
    videoUrl: '',
    topics: ['Chemistry', 'Cosmetics', 'Everyday Science'],
  },
  {
    id: '6',
    title: 'NFTs and Blockchain',
    description: 'Uses digital art and NFTs to explain the mathematical ideas behind blockchain, encryption, and token-based economies.',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=1rmSK2_BfYDK-TnFveMzGatDd9AZS7Jyk',
    duration: '5:00',
    videoUrl: 'https://drive.google.com/file/d/1_xhzHG-XKGAn60RVbP5LULEUrIx6e9tW/preview',
    topics: ['NFT', 'Blockchain', 'Encryption', 'Digital Art'],
  },
  {
    id: '7',
    title: 'Biomimetics',
    description: 'Highlights how nature inspires innovation—like lotus leaf coatings preventing yogurt from sticking to lids or gecko-inspired adhesives.',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=15aYKHRsKrtbZuaZgWItP3qD-Uax-n4kK',
    duration: '5:00',
    videoUrl: '',
    topics: ['Biomimetics', 'Nature', 'Innovation'],
  },
  {
    id: '8',
    title: 'The Metaverse and Haptic Technology',
    description: 'Introduces virtual and augmented reality, focusing on how touch-based (haptic) feedback is making the metaverse more immersive.',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=15heBDAJtjLhyJ3S0R_hHHqONlaBGohGU',
    duration: '5:00',
    videoUrl: '',
    topics: ['Metaverse', 'Haptic Technology', 'Virtual Reality', 'Augmented Reality'],
  },
  {
    id: '9',
    title: 'Palm Detection Technology',
    description: 'Starts with ATM security and explains how palm recognition works, emphasizing its accuracy and resistance to forgery.',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=1p9ytQJMmexpeJkwMvVccxNxwytdNW048',
    duration: '5:00',
    videoUrl: '',
    topics: ['Palm Detection', 'Biometrics', 'Security'],
  },
  {
    id: '10',
    title: 'Relativity and GPS',
    description: 'Explores how Einstein\'s theory of relativity is essential for the precise functioning of GPS systems around the world.',
    thumbnailUrl: 'https://drive.google.com/uc?export=view&id=1NXrf7K2wNT7mkFq-jZ8DSo-f1ZBv0f3h',
    duration: '5:00',
    videoUrl: 'https://drive.google.com/file/d/1lT7EbNaqFqrosPw31XChg_EqaSnNXvxZ/preview',
    topics: ['Relativity', 'GPS', 'Physics'],
  },
];
