import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturesJob from '../FeaturesJob/FeaturesJob';


const Home = () => {
       
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch('featured.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    const jobCategory = useLoaderData();
    return (
        <div>
            <Header></Header>
            <JobCategory jobCategory={jobCategory}></JobCategory>
            <FeaturesJob jobs={jobs}></FeaturesJob>
            
        </div>
    );
};

export default Home;