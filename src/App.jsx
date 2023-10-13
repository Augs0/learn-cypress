import './App.css';
import { useEffect, useState } from 'react';
import { getCountries, getSingleCountry } from './utils/apiCalls';
import Results from './components/Results';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCountries()
    .then((data) => {
      setCountries(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  const handleClick = ((e) => {
    e.preventDefault();
    setError(false);
    getSingleCountry(searchTerm)
    .then(({data}) => {
     if(data.length >= 1){
      setCountries(data);
      setSearchTerm('');
     }
    })
    .catch((err) => {
      if(err.response.status === 404){
        console.log('yo')
        setError(true)
      }
    })
  });

  const reset = () => {
    getCountries()
    .then((data) => {
      if(data.length >= 1){
        setCountries(data)
       }
    })
  }

  return (
    <main>
      <header id="header">
      <h1>Country Search</h1>
      </header>
      <section id="search-section">
      <form onSubmit={handleClick}>
      <label htmlFor="search">Search for a country</label>
      <input id="search" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button>Search</button>
      </form>
      <button onClick={() => reset()}>See all countries</button>
      </section>
    <Results countries={countries} error={error} />
    </main>
  )
}

export default App
