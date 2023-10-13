/* eslint-disable react/prop-types */
export default function Results({countries, error}) {
    if(error) return <p>No results found</p>
    return (
        <section id="results-section">
        {countries.map((country) => {
        return (
        <article className='country-card' key={country.flag}>
            <h2>{country.name.common}</h2>
            <p>Capital city: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Continent: {country.region}</p>
            <p>Cars drive on the {country.car.side}</p>
        </article>
        )
        })
        }
        </section>
    )
}
