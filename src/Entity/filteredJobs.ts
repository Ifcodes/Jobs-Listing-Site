import { entity } from "simpler-state";

export const filteredJobs = entity<Array<any>>([]);
export const searchField = entity("");

export const setFilteredJobs = (jobList: Array<any>) => {
  filteredJobs.set(jobList);
};

export const setSearchFilter = (val: string) => {
  const newState = filteredJobs
    .get()
    .filter((job) => job.title.toLowerCase().includes(val.toLowerCase()));
  filteredJobs.set(newState);
};

export const setSearchField = (val: string) => {
  searchField.set(val);
};
