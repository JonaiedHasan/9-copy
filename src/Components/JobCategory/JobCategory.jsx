import React from 'react';
import './JobCategory.css'
const JobCategory = ({jobCategory}) => {
    return (
        <section className='container category-container mb-4'>
            <h1 className='section-title'>Job Category List</h1>
            <p className='section-sub-title'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='categorys d-flex text-start justify-content-between mt-4'>
              {
                jobCategory.map(category => <div className='category'>
                   <div className="category-logo d-flex justify-content-center align-items-center rounded">
                   <img className='' src={category.categoryLogo} alt="" />
                   </div>
                    <h4>{category.categoryName}</h4>
                    <h6 className='text-black-50'>{category.jobsAvailable}</h6>
                </div> )
              }
            </div>

        </section>
    );
};

export default JobCategory;