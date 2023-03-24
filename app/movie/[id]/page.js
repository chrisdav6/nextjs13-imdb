import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className='w-full'>
      <div className='flex flex-col items-center content-center max-w-6xl mx-auto p-4 pt-10 md:flex-row md:space-x-6'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className='rounded-lg'
          placeholder='blur'
          blurDataURL='/spinner.svg'
          style={{ maxWidth: '100%', height: '100%' }}
          alt={`Movie ${movie.id}`}
        />
        <div className='mt-8 md:mt-0'>
          <h2 className='text-lg font-bold mb-3'>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>
            <span className='font-bold'>Overview: </span>
            {movie.overview}
          </p>
          <div className='flex items-center justify-between'>
            <p>
              <span className='font-bold mr-2'>Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className='flex items-center'>
              <FiThumbsUp className='mr-2' /> {movie.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
