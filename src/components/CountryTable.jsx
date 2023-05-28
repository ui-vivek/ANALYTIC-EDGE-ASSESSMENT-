import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const CountryTable = () => {
  const [countries, setCounries] = useState([]);

  const getCountries = async () => {
    try {
      const responce = await axios.get("https://restcountries.com/v2/all");
      setCounries(responce.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
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

  return <DataTable columns={columns} data={countries}  />;
};

export default CountryTable;
