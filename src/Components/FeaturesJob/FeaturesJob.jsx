import React, { useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import './FeaturesJob.css'
const FeaturesJob = ({jobs}) => {
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore =()=>{
    setSeeMore(true)
  };
    return (
        <section className='container'>
            <h1 className='section-title '>Featured Jobs</h1>
          <p className='section-sub-title'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          <div className= 'cart-container row'>
          {
            jobs.slice(0,seeMore? 8: 4).map(job => <SingleJob key={job.id}
            job={job}></SingleJob>)
          }
          </div>
             <div onClick={()=>{handleSeeMore()}} className='btn-c d-flex justify-content-center'>
             <button className='btn-apply'>See All Jobs</button>
             </div>
             
        </section>
    );
};

export default FeaturesJob;