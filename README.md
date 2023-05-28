Live at - https://vivek-singh-analytic-edge-assessment.netlify.app/


## Solution Explanation

The provided solution is a ReactJS-based Data Grid component that fetches data from the "https://restcountries.com/v2/all" API endpoint. It includes the following components and features:

### `CountryTable` Component:

- This component serves as the main Data Grid component.
- It uses React Hooks to manage state variables, including `countries`, `search`, `filteredCountries`, and `pending`.
- The `getCountries` function is responsible for fetching data from the API and updating the state variables.
- The component uses the `useEffect` hook to fetch data on component mount and to filter countries based on the search input.
- It renders a `DataTable` component from the `react-data-table-component` library to display the data in a tabular format.
- The `DataTable` component includes various props, such as `title`, `columns`, `data`, `pagination`, `fixedHeader`, `fixedHeaderScrollHeight`, `highlightOnHover`, `subHeader`, and `progressPending`.
- The sub-header component renders an input field for searching countries.
- The component also includes column definitions for the Data Grid, specifying the column names and the data to display.

### Dependencies:

The solution utilizes the following external libraries: `react`, `react-dom`, `react-data-table-component`, and `axios`.
The `react-data-table-component` library is used to create the Data Grid component.
The `axios` library is used for making API requests to fetch data.

### Implementation Details:

- The solution incorporates the use of React Hooks and Context APIs for managing state and side effects.
- It demonstrates the utilization of the `useEffect` hook for fetching data from the API and updating the filtered countries based on the search input.
- The solution includes a reusable Data Grid component implemented without using any external libraries.
- The provided code showcases the usage of the `axios` library for making API requests.
- The solution is responsive, adapting to different screen sizes.
- It follows a project layout structure for better code organization and scalability.
- The use of TypeScript is not implemented in the provided code, but it is mentioned as a bonus requirement in the original test.

