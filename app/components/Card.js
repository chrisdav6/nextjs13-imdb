import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({ movie }) => {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 rounded-lg transition-shadow duration-200 group'>
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          height={300}
          width={500}
          className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
          placeholder='blur'
          blurDataURL='/spinner.svg'
          style={{ maxWidth: '100%', height: 'auto' }}
          alt={`Movie ${movie.id}`}
        />

        <div className='p-2'>
          <p className='line-clamp-2 text-md'>{movie.overview}</p>
          <h2 className='truncate text-lg font-bold'>
            {movie.title || movie.name}
          </h2>
          <p className='flex items-center justify-between'>
            {movie.release_date || movie.first_air_date}
            <span className='flex items-center'>
              <FiThumbsUp className='mr-1' /> {movie.vote_count}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
