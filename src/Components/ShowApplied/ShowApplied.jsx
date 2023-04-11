import React from 'react';
import './ShowApplied.css'
import { Link } from 'react-router-dom';
const ShowApplied = ({ job }) => {
    const { jobTitle, id, companyLogo, companyName, jobType, jobTime, location, salary } = job;
    return (
        <div className='container job-container'>
            <div className='cart d-flex my-4'>
                <div className='img-div'>
                    <img className=' ' src={companyLogo} alt="" />
                </div>
                <div className='review-details'>
                    <h4 className='job-title'>{jobTitle}</h4>
                    <h5 className='light-dark'>{companyName}</h5>
                    <div className='d-flex gap-2'>
                        <div>
                            <h6 className='job-T-T'>{jobType}</h6>
                        </div>
                        <div>
                            <h6 className='job-T-T'>{jobTime}</h6>
                        </div>
                    </div>
                    <div className='d-flex gap-4'>
                        <h5 className='light-dark'>{location}</h5>
                        <h5 className='light-dark'>Salary: {salary}</h5>
                    </div>
                </div>
                <Link to={`/details/${id}`}><button className='btn-detail'>View Details</button> </Link>
            </div>
        </div>
    );
};

export default ShowApplied;