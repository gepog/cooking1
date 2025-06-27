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
    description: 'A comprehensive look at artificial intelligence and its impact on society.',
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
    title: 'Quantum Computing Revolution',
    description: 'Exploring the breakthrough technologies that will change computing forever.',
    genre: ['Documentary', 'Technology', 'Science'],
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
    title: 'Space Exploration 2024',
    description: 'The latest missions and discoveries in space exploration.',
    genre: ['Documentary', 'Space', 'Science'],
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
    title: 'Climate Tech Solutions',
    description: 'Innovative technologies fighting climate change.',
    genre: ['Documentary', 'Environment', 'Technology'],
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
    title: 'Biotech Breakthroughs',
    description: 'Revolutionary advances in biotechnology and medicine.',
    genre: ['Documentary', 'Medicine', 'Science'],
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
    title: 'Renewable Energy Future',
    description: 'The transition to sustainable energy sources worldwide.',
    genre: ['Documentary', 'Environment', 'Energy'],
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
        title: 'Neural Networks Explained',
        description: 'Understanding the fundamentals of neural networks and deep learning.',
        genre: ['Education', 'Technology', 'AI'],
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
        title: 'Robotics in Healthcare',
        description: 'How robots are revolutionizing medical procedures and patient care.',
        genre: ['Healthcare', 'Robotics', 'Innovation'],
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
        title: 'Blockchain Beyond Crypto',
        description: 'Exploring blockchain applications beyond cryptocurrency.',
        genre: ['Technology', 'Finance', 'Innovation'],
        year: 2024,
        rating: 'PG',
        duration: '55m',
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
        description: 'Essential skills and pathways for a successful technology career.',
        genre: ['Career', 'Education', 'Technology'],
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
        title: 'Cybersecurity Basics',
        description: 'Protecting yourself and your business in the digital age.',
        genre: ['Security', 'Education', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '50m',
        thumbnail: '/src/assets/15.jpg',
        backdrop: '/src/assets/15.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 789
      },
      {
        id: 'practical-3',
        title: 'Digital Privacy Guide',
        description: 'Understanding and protecting your digital privacy rights.',
        genre: ['Privacy', 'Education', 'Digital Rights'],
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
    id: 'innovation',
    title: 'Innovation Spotlight',
    movies: [
      {
        id: 'innovation-1',
        title: 'Startup Success Stories',
        description: 'Inspiring journeys of successful tech entrepreneurs.',
        genre: ['Business', 'Entrepreneurship', 'Success'],
        year: 2024,
        rating: 'PG',
        duration: '1h 15m',
        thumbnail: '/src/assets/2.jpg',
        backdrop: '/src/assets/2.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 678
      },
      {
        id: 'innovation-2',
        title: 'Future of Work',
        description: 'How technology is reshaping the workplace and employment.',
        genre: ['Future', 'Work', 'Technology'],
        year: 2024,
        rating: 'PG',
        duration: '1h 10m',
        thumbnail: '/src/assets/3.jpg',
        backdrop: '/src/assets/3.jpg',
        videoUrl: 'https://player.vimeo.com/video/1096572882',
        trailerUrl: 'https://player.vimeo.com/video/1096572882',
        likes: 543
      },
      {
        id: 'innovation-3',
        title: 'Smart Cities Revolution',
        description: 'Building the connected cities of tomorrow.',
        genre: ['Urban Planning', 'Technology', 'Future'],
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