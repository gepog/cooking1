import { Movie, ContentRow } from '../types';

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'AI Hackathon News',
  description: 'Stay updated with the latest developments in artificial intelligence hackathons around the world.',
  genre: ['Technology', 'News', 'Innovation'],
  year: 2024,
  rating: 'PG',
  duration: '45m',
  thumbnail: '/src/assets/1.jpg',
  backdrop: '/src/assets/1.jpg',
  videoUrl: 'https://player.vimeo.com/video/1096572882',
  trailerUrl: 'https://player.vimeo.com/video/1096572882',
  isFeatured: true,
  likes: 1250
};

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Beijing Tech Summit 2024',
    description: 'Comprehensive coverage of China\'s largest technology conference featuring AI innovations and startup showcases.',
    genre: ['Technology', 'Business', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 892
  },
  {
    id: '2',
    title: 'Berlin Innovation Week',
    description: 'Explore Germany\'s thriving startup ecosystem and cutting-edge technological developments from Berlin.',
    genre: ['Technology', 'Startup', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 15m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 756
  },
  {
    id: '3',
    title: 'Milan Design & Tech Fusion',
    description: 'Discover how Italy combines traditional design excellence with modern technology innovations.',
    genre: ['Design', 'Technology', 'Culture'],
    year: 2024,
    rating: 'PG',
    duration: '1h 20m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 634
  },
  {
    id: '4',
    title: 'Tokyo AI Revolution',
    description: 'Inside Japan\'s artificial intelligence breakthroughs and robotics innovations shaping the future.',
    genre: ['AI', 'Robotics', 'Future Tech'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 1123
  },
  {
    id: '5',
    title: 'Mexico City Startup Scene',
    description: 'Exploring the vibrant entrepreneurial ecosystem and tech innovations emerging from Mexico.',
    genre: ['Startup', 'Business', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 10m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 445
  },
  {
    id: '6',
    title: 'Barcelona Smart City Initiative',
    description: 'How Spain is leading the way in smart city technology and sustainable urban development.',
    genre: ['Smart Cities', 'Sustainability', 'Urban Tech'],
    year: 2024,
    rating: 'PG',
    duration: '1h 25m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 567
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'china',
    title: 'China Tech News',
    movies: [
      {
        id: 'china-1',
        title: 'Shenzhen Hardware Hub',
        description: 'Deep dive into China\'s electronics manufacturing capital and its role in global tech supply chains.',
        genre: ['Manufacturing', 'Hardware', 'Business'],
        year: 2024,
        rating: 'PG',
        duration: '50m',
        thumbnail: '/src/assets/11.jpg',
        backdrop: '/src/assets/11.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 723
      },
      {
        id: 'china-2',
        title: 'Chinese AI Giants',
        description: 'Examining the rise of Chinese artificial intelligence companies and their global impact.',
        genre: ['AI', 'Business', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 5m',
        thumbnail: '/src/assets/12.jpg',
        backdrop: '/src/assets/12.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 891
      },
      {
        id: 'china-3',
        title: 'Shanghai Fintech Revolution',
        description: 'How Shanghai is becoming a global fintech hub with innovative payment and banking solutions.',
        genre: ['Fintech', 'Banking', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '45m',
        thumbnail: '/src/assets/13.jpg',
        backdrop: '/src/assets/13.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 612
      }
    ]
  },
  {
    id: 'germany',
    title: 'Germany Innovation',
    movies: [
      {
        id: 'germany-1',
        title: 'German Engineering Excellence',
        description: 'Exploring how German precision engineering meets cutting-edge digital transformation.',
        genre: ['Engineering', 'Manufacturing', 'Digital'],
        year: 2024,
        rating: 'PG',
        duration: '55m',
        thumbnail: '/src/assets/14.jpg',
        backdrop: '/src/assets/14.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 534
      },
      {
        id: 'germany-2',
        title: 'Munich Automotive Tech',
        description: 'Inside Germany\'s automotive industry transformation towards electric and autonomous vehicles.',
        genre: ['Automotive', 'Electric Vehicles', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 15m',
        thumbnail: '/src/assets/15.jpg',
        backdrop: '/src/assets/15.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 789
      },
      {
        id: 'germany-3',
        title: 'Hamburg Port Digitalization',
        description: 'How Germany\'s largest port is embracing IoT and automation for efficient logistics.',
        genre: ['Logistics', 'IoT', 'Automation'],
        year: 2024,
        rating: 'PG',
        duration: '40m',
        thumbnail: '/src/assets/1.jpg',
        backdrop: '/src/assets/1.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 456
      }
    ]
  },
  {
    id: 'italy',
    title: 'Italy Tech & Design',
    movies: [
      {
        id: 'italy-1',
        title: 'Italian Fashion Tech',
        description: 'How Italy\'s fashion industry is embracing technology for sustainable and innovative design.',
        genre: ['Fashion', 'Sustainability', 'Design'],
        year: 2024,
        rating: 'PG',
        duration: '48m',
        thumbnail: '/src/assets/2.jpg',
        backdrop: '/src/assets/2.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 678
      },
      {
        id: 'italy-2',
        title: 'Rome Smart Heritage',
        description: 'Preserving Italy\'s cultural heritage through advanced digital technologies and AR experiences.',
        genre: ['Heritage', 'AR/VR', 'Culture'],
        year: 2024,
        rating: 'PG',
        duration: '52m',
        thumbnail: '/src/assets/3.jpg',
        backdrop: '/src/assets/3.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 543
      },
      {
        id: 'italy-3',
        title: 'Turin Automotive Innovation',
        description: 'Italy\'s automotive capital embraces electric mobility and connected car technologies.',
        genre: ['Automotive', 'Electric', 'Connected Cars'],
        year: 2024,
        rating: 'PG',
        duration: '1h',
        thumbnail: '/src/assets/4.jpg',
        backdrop: '/src/assets/4.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 432
      }
    ]
  },
  {
    id: 'japan',
    title: 'Japan Future Tech',
    movies: [
      {
        id: 'japan-1',
        title: 'Japanese Robotics Mastery',
        description: 'Exploring Japan\'s world-leading robotics industry and its applications in daily life.',
        genre: ['Robotics', 'AI', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 10m',
        thumbnail: '/src/assets/5.jpg',
        backdrop: '/src/assets/5.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 1045
      },
      {
        id: 'japan-2',
        title: 'Osaka Gaming Revolution',
        description: 'Inside Japan\'s gaming industry evolution from arcade classics to virtual reality experiences.',
        genre: ['Gaming', 'VR', 'Entertainment'],
        year: 2024,
        rating: 'PG',
        duration: '58m',
        thumbnail: '/src/assets/11.jpg',
        backdrop: '/src/assets/11.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 867
      },
      {
        id: 'japan-3',
        title: 'Kyoto Traditional Meets Digital',
        description: 'How Japan\'s ancient capital blends traditional craftsmanship with modern technology.',
        genre: ['Tradition', 'Digital', 'Culture'],
        year: 2024,
        rating: 'PG',
        duration: '44m',
        thumbnail: '/src/assets/12.jpg',
        backdrop: '/src/assets/12.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 623
      }
    ]
  },
  {
    id: 'mexico',
    title: 'Mexico Innovation Hub',
    movies: [
      {
        id: 'mexico-1',
        title: 'Mexican Fintech Boom',
        description: 'How Mexico is becoming Latin America\'s fintech leader with innovative financial solutions.',
        genre: ['Fintech', 'Banking', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '46m',
        thumbnail: '/src/assets/13.jpg',
        backdrop: '/src/assets/13.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 398
      },
      {
        id: 'mexico-2',
        title: 'Guadalajara Silicon Valley',
        description: 'Exploring Mexico\'s tech hub and its growing influence in software development and innovation.',
        genre: ['Software', 'Tech Hub', 'Development'],
        year: 2024,
        rating: 'PG',
        duration: '53m',
        thumbnail: '/src/assets/14.jpg',
        backdrop: '/src/assets/14.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 512
      },
      {
        id: 'mexico-3',
        title: 'Mexican AgriTech Solutions',
        description: 'Revolutionary agricultural technologies helping Mexican farmers increase productivity sustainably.',
        genre: ['Agriculture', 'Sustainability', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '41m',
        thumbnail: '/src/assets/15.jpg',
        backdrop: '/src/assets/15.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 367
      }
    ]
  },
  {
    id: 'spain',
    title: 'Spain Digital Future',
    movies: [
      {
        id: 'spain-1',
        title: 'Spanish Renewable Energy Tech',
        description: 'How Spain is leading Europe in renewable energy innovation and smart grid technologies.',
        genre: ['Renewable Energy', 'Smart Grid', 'Sustainability'],
        year: 2024,
        rating: 'PG',
        duration: '49m',
        thumbnail: '/src/assets/1.jpg',
        backdrop: '/src/assets/1.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 634
      },
      {
        id: 'spain-2',
        title: 'Madrid Startup Ecosystem',
        description: 'Inside Spain\'s capital startup scene and its growing influence in European tech.',
        genre: ['Startup', 'Entrepreneurship', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '56m',
        thumbnail: '/src/assets/2.jpg',
        backdrop: '/src/assets/2.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 478
      },
      {
        id: 'spain-3',
        title: 'Valencia Smart Agriculture',
        description: 'Innovative farming techniques and IoT solutions transforming Spanish agriculture.',
        genre: ['Agriculture', 'IoT', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '43m',
        thumbnail: '/src/assets/3.jpg',
        backdrop: '/src/assets/3.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 389
      }
    ]
  },
  {
    id: 'most-liked',
    title: 'Most Popular',
    movies: [] // This will be populated dynamically with the most liked content
  }
];

export const getMostLikedMovies = (allMovies: Movie[], count: number = 12): Movie[] => {
  return allMovies
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, count);
};