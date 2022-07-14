import { entity } from "simpler-state";

export const allJobs = entity<Array<any>>([]);

export const setAllJobs = (jobList: Array<any>) => {
  allJobs.set(jobList);
};
