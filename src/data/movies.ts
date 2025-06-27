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
    title: 'The Future of AI',
    description: 'An in-depth exploration of artificial intelligence and its impact on society.',
    genre: ['Documentary', 'Technology', 'Science'],
    year: 2024,
    rating: 'PG',
    duration: '2h 15m',
    thumbnail: '/src/assets/1.jpg',
    backdrop: '/src/assets/1.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 892
  },
  {
    id: '2',
    title: 'Digital Revolution',
    description: 'How technology is reshaping our world and changing the way we live.',
    genre: ['Documentary', 'Technology', 'History'],
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    thumbnail: '/src/assets/2.jpg',
    backdrop: '/src/assets/2.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 756
  },
  {
    id: '3',
    title: 'Innovation Stories',
    description: 'Inspiring tales of breakthrough innovations and the minds behind them.',
    genre: ['Documentary', 'Biography', 'Innovation'],
    year: 2024,
    rating: 'PG',
    duration: '1h 30m',
    thumbnail: '/src/assets/3.jpg',
    backdrop: '/src/assets/3.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 634
  },
  {
    id: '4',
    title: 'Tech Titans',
    description: 'The rise of technology giants and their influence on global markets.',
    genre: ['Documentary', 'Business', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '2h',
    thumbnail: '/src/assets/4.jpg',
    backdrop: '/src/assets/4.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 1123
  },
  {
    id: '5',
    title: 'Startup Nation',
    description: 'The entrepreneurial spirit driving innovation in the modern economy.',
    genre: ['Documentary', 'Business', 'Entrepreneurship'],
    year: 2024,
    rating: 'PG',
    duration: '1h 50m',
    thumbnail: '/src/assets/5.jpg',
    backdrop: '/src/assets/5.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 445
  },
  {
    id: '6',
    title: 'Green Technology',
    description: 'Sustainable innovations leading the fight against climate change.',
    genre: ['Documentary', 'Environment', 'Technology'],
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    thumbnail: '/src/assets/11.jpg',
    backdrop: '/src/assets/11.jpg',
    videoUrl: 'https://player.vimeo.com/video/1096572882',
    trailerUrl: 'https://player.vimeo.com/video/1096572882',
    likes: 567
  }
];

export const contentRows: ContentRow[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: [
      {
        id: 'trending-1',
        title: 'Quantum Computing Breakthrough',
        description: 'Scientists achieve new milestone in quantum computing technology.',
        genre: ['Science', 'Technology', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '45m',
        thumbnail: '/src/assets/11.jpg',
        backdrop: '/src/assets/11.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 723
      },
      {
        id: 'trending-2',
        title: 'Space Exploration Update',
        description: 'Latest developments in space technology and exploration missions.',
        genre: ['Space', 'Science', 'Exploration'],
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
        id: 'trending-3',
        title: 'Renewable Energy Revolution',
        description: 'How clean energy is transforming the global power landscape.',
        genre: ['Environment', 'Energy', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '52m',
        thumbnail: '/src/assets/13.jpg',
        backdrop: '/src/assets/13.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 612
      }
    ]
  },
  {
    id: 'practical-info',
    title: 'Practical Information',
    movies: [
      {
        id: 'practical-1',
        title: 'Tech Career Guide 2024',
        description: 'Essential skills and pathways for building a successful tech career.',
        genre: ['Education', 'Career', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 20m',
        thumbnail: '/src/assets/14.jpg',
        backdrop: '/src/assets/14.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 534
      },
      {
        id: 'practical-2',
        title: 'Cybersecurity Essentials',
        description: 'Protecting yourself and your business in the digital age.',
        genre: ['Security', 'Education', 'Technology'],
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
        id: 'practical-3',
        title: 'Digital Marketing Mastery',
        description: 'Modern strategies for effective online marketing and growth.',
        genre: ['Marketing', 'Business', 'Digital'],
        year: 2024,
        rating: 'PG',
        duration: '1h 35m',
        thumbnail: '/src/assets/1.jpg',
        backdrop: '/src/assets/1.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 456
      }
    ]
  },
  {
    id: 'innovation',
    title: 'Innovation Spotlight',
    movies: [
      {
        id: 'innovation-1',
        title: 'Biotech Breakthroughs',
        description: 'Revolutionary advances in biotechnology and medical research.',
        genre: ['Science', 'Medicine', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '1h 10m',
        thumbnail: '/src/assets/2.jpg',
        backdrop: '/src/assets/2.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 678
      },
      {
        id: 'innovation-2',
        title: 'Smart Cities of Tomorrow',
        description: 'How urban planning meets cutting-edge technology.',
        genre: ['Urban Planning', 'Technology', 'Future'],
        year: 2024,
        rating: 'PG',
        duration: '58m',
        thumbnail: '/src/assets/3.jpg',
        backdrop: '/src/assets/3.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 543
      },
      {
        id: 'innovation-3',
        title: 'Robotics Revolution',
        description: 'The latest developments in robotics and automation.',
        genre: ['Robotics', 'Automation', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 25m',
        thumbnail: '/src/assets/4.jpg',
        backdrop: '/src/assets/4.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 432
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