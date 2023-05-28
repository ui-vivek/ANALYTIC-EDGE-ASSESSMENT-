import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const CountryTable = () => {
  // State variables
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Fetch countries data from API
  const getCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      setCountries(response.data);
      setFilteredCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Define table columns
  const columns = [
    {
      name: 'Country Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Country Native Name',
      selector: (row) => row.nativeName,
      sortable: true,
    },
    {
      name: 'Country Capital',
      selector: (row) => row.capital,
      sortable: true,
    },
    {
      name: 'Country Flag',
      selector: (row) => (
        <img width={50} height={50} src={row.flag} alt="country flag" />
      ),
    },
  ];

  // Fetch countries data on component mount
  useEffect(() => {
    getCountries();
  }, []);

  // Filter countries based on search input
  useEffect(() => {
    const filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredCountries(filtered);
  }, [search, countries]);

  return (
    <DataTable
      title={<h1 className="d-flex flex-column align-items-center">Country List</h1>}
      columns={columns}
      data={filteredCountries}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="28rem"
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search here"
          className="w-25 form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      }
    />
  );
};

export default CountryTable;
