import React from "react";
import { formatDate } from "../../../utils/helpers";
import Button from "../Button";
import { ListCardWrapper } from "./dataListCardStyle";

type ListCardProps = {
  applyUrl?: string;
  company?: any;
  commitment?: any;
  remotes?: any;
  postedAt: string;
  title?: string;
  handleDesClick?: Function;
};
const DataListItemCard = ({
  applyUrl,
  company,
  commitment,
  remotes,
  title,
  postedAt,
  handleDesClick = () => {},
}: ListCardProps) => {
  return (
    <ListCardWrapper>
      <div className="img-cont">
        <img
          src={
            !company.logoUrl
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSUdJ1cy3NZPol57dvf3vN5E9TbJBnjvgmw&usqp=CAU"
              : company.logoUrl
          }
          alt={company.name}
        />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <h2 className="title2">
          <span>Company: </span>
          {company.name && company.name}
        </h2>
        <span className="commitment">
          {commitment.title}
          {remotes.length > 0 ? ` / ${remotes[0].name}` : ""}
        </span>
        <div className="btn-cont">
          <Button btnText="Job Description" onClick={() => handleDesClick()} />
          <a href={applyUrl}>
            <Button btnText="Apply" />
          </a>
        </div>
        <span className="date">{formatDate(postedAt)}</span>
      </div>
    </ListCardWrapper>
  );
};

export default DataListItemCard;
