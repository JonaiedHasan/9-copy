import React, { useEffect, useState } from 'react';
import './DetailContent.css'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utilites/fakedb';



const DetailContent = () => {
//     let newCart =[];
// const [cart,setCart] = useState([])


const handleProducts = (product) =>{
//    const exists = cart.find(pd => pd.id === product.id);
//    if(exists){
//     newCart = [...cart]
//    }
//    else{
//     newCart = [...cart,product]
//    }
//  setCart(newCart);
 addToDb(product.id)

}


    const { detailsId } = useParams();

    const [info, setInfo] = useState(null)

    const data = useLoaderData();
    useEffect(() => {
        const newData = data.filter(dt => dt.id == detailsId)
        if (newData.length) {
            setInfo(newData[0])
        }
    }, [])
    return (

        <section className='container my-5'>
              {
                    info !== null &&
                    <div className='row'>    
                    <div className='col-md-8'>
                        <p ><span className='fs-5 fw-bold'>Job Description:</span>{info.JobDescription}</p>
                        <p><span className='fs-5 fw-bold'>Job Responsibility:</span>{info.JobResponsibility} </p>
                        <p><span className='fs-5 fw-bold'>Educational Requirements:</span>{info.educationalRequirements} </p>

                        <p><span className='fs-5 fw-bold'>Experiences:</span>{info.Experiences} </p>
                    </div>
                    <div className='col-md-4'>
                    <div className='d-cart p-4'>
                        <h4 className='fw-bold'>Job Details</h4>
                        <hr />
                        <p> <span className='fs-5 fw-semibold'>Salary : </span>{info.salary}(Per Month)</p>
                        <p> <span className='fs-5 fw-semibold'>Job Title : </span>{info.jobTitle}</p>

                        <h4 className='fw-bold'>Contact Information</h4>
                        <hr />
                        <p> <span className='fs-5 fw-semibold'>Phone : </span> {info.phone}</p>
                        <p> <span className='fs-5 fw-semibold'>Email : </span>{info.email}</p>
                        <p> <span className='fs-5 fw-semibold'>Address : </span>{info.location}</p>
                    </div>
                    
                    <Link to='/appliedjobs'><button onClick={()=>handleProducts(info)} className='btn-applyNOW'>Apply Now</button></Link>
                </div>
                
                    </div>
                    
                }
                 
            
        </section>
    );
};

export default DetailContent;