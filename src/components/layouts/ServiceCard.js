import React from 'react'

const ServiceCard = ({service}) => {
    return <>
    {/* DETAILS */}
  
    <div className="col-11 col-sm-10 col-md-6 col-lg-3 col-xl-3 mx-auto mt-4 service">
        <div  className='p-4 text-center rounded' style={{backgroundColor:`${service.color}`,transform:'none'}}>
          <span>
            <i className={service.icon}></i>
          </span>
          <div style={{display:'inline',fontWeight:'bold',color:'rgb(49,53,91)'}} className='text-center'>
            <h3 style={{fontSize:'1rem',color:'rgb(49,53,91)',display:'inline-block'}} className='fw-bolder'>&nbsp; &nbsp;{service.title}</h3>
            <p style={{fontWeight:'bold'}} className='mt-2'>{service.text}</p>
          </div>
  
        </div>
      </div>
    </>
}

export default ServiceCard