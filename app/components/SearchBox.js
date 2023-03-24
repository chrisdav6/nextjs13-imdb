'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex max-w-6xl mx-auto items-center justify-between px-5 mt-5'
    >
      <input
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
        type='text'
        placeholder='Search Keywords'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type='submit'
        className='text-amber-600 disabled:text-gray-400'
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
