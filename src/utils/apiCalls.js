import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export const getCountries = () => {
    return apiUrl.get('/all').then(({ data }) => {
      return data
    });
};

export const getSingleCountry = (searchTerm) => {
    return apiUrl.get(`name/${searchTerm}`).then((data) => {
        return data;
    })
}