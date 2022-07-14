import React from "react";
import { allJobs } from "../../../Entity/AllJobs";
import { filteredJobs, searchField } from "../../../Entity/filteredJobs";
import { formatDate } from "../../../utils/helpers";
import DataListItemCard from "../../atoms/DataListItemCard";
import { GroupJobWrapper } from "./groupJobStyles";

const GroupedJobs = ({ date }: { date: string }) => {
  const jobs = filteredJobs.use();
  const searchItem = searchField.use();

  const filteredJob = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  const groupedJobs = searchField
    ? filteredJob
    : jobs.filter((jobs) => formatDate(jobs.postedAt) === formatDate(date));

  return (
    <GroupJobWrapper>
      <div className="group-date">
        <h1 className="date">{formatDate(date)}</h1>
        <hr />
      </div>
      <div className="dataList-cont">
        {groupedJobs.map((job, _index) => (
          <DataListItemCard key={job.id} handleDesClick={() => {}} {...job} />
        ))}
      </div>
    </GroupJobWrapper>
  );
};

export default GroupedJobs;
