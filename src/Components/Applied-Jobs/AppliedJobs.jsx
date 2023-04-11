import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../utilites/fakedb';
import './Applied-Jobs.css'
import ShowApplied from '../ShowApplied/ShowApplied';
import AppliedHeader from '../AppliedHeader/AppliedHeader';

const AppliedJobs = () => {
    // const savedInfo = useLoaderData();

const [jobs,setJobs] = useState([]);

useEffect(()=>{
    fetch('featured.json')
    .then(res => res.json())
    .then(data => setJobs(data))
},[])

     const data = getShoppingCart();
     const savedJob = [];
    for(const id in data){
        const addedJob = jobs.find(pd  => pd.id === id);
        if(addedJob){
            savedJob.push(addedJob);
        }
    };

    return (
        <div>
            <AppliedHeader></AppliedHeader>
            {
                savedJob.map(job => <ShowApplied key={job.id} job={job}></ShowApplied> )
            }
        </div>
    );
};

export default AppliedJobs;