import React from "react";
import Intensity from "./Intensity";
import "./Css/Dashboard.css";
import Relevance from "./Relevance";
import Likelihood from "./Likelihood";
import Country from "./Country";
import City from "./City";
import Region from "./Region";
import Topic from "./Topic";

const Dashboard = () => {
  return <div className="dashboard">
     <Intensity/>
     <Relevance/>
     <Likelihood/>
     <City/>
     <Country/>
     <Region/>
     <Topic/>
     
  </div>;
};

export default Dashboard;
