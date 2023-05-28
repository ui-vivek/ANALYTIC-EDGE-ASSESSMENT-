import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const CountryTable = () => {
  const [countries, setCounries] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCountries, setFilterCountries] = useState([]);

  const getCountries = async () => {
    try {
      const responce = await axios.get("https://restcountries.com/v2/all");
      setCounries(responce.data);
      setFilterCountries(responce.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
      sortable: true,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
      sortable: true,
    },
    {
      name: "Country Flag",
      selector: (row) => (
        <img width={50} height={50} src={row.flag} alt="contary flag" />
      ),
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  // useEffect(()=>{
  //   const result=countries.filter(country=> {
  //       return country.name.toLowerCase().match(search.toLocaleLowerCase())
  //   })
  //   setFilterCountries(result)
  // },[])

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterCountries(result);
  }, [search, countries]);
  

  return (
    <DataTable
      title={
        <h1 className="d-flex flex-column align-items-center">Country List</h1>
      }
      columns={columns}
      data={filterCountries}
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
