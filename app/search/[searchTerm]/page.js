import Results from '@/app/components/Results';

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  console.log(results);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className='text-center pt-6'>No results found!</h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
};

export default SearchPage;
