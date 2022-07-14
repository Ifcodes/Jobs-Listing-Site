# Jobs-Listing-Site

List of available jobs were fetched from "https://api.graphql.jobs/", extracting needed values like title, commitment, remotes, date posted etc.

Graphql query method was used to make request to the api in the services/queries directory. 

Simpler-state management library was used for state management across the app.

Two default states were created - foundJobs to hold all data fetched and filtered jobs to handle filtered job data conditional rendering.

From App.tsx, on first page load, the data is set to the two states, such that the default filter value "All Jobs" renders all jobs data

A component called groupedJobs is created to render job data grouped according to dates is created and in it jobs are filtered to render jobs that match the date string passed as props.

A component called allgroup is created to render the groupedJobs component by maping through an array that filters all dates of jobs data, passing each date as props to groupedJobs component

Allgroup component is rendered in the app.tsx.

Jobs are filtered by featured, on site and remote.

Featured button triggers a function that sets the filtered state value to all jobs with isFeatured value is true or null - I decided to use null cos it appears only one value has isFeatured value as true

On Site button triggers a function that set the filtered state value to all jobs with remotes value (which is an array) length is equals to zero 

On Site button triggers a function that set the filtered state value to all jobs with remotes value (which is an array) length is greater than zero

The search field checks job titles that matches the text values inputed.
