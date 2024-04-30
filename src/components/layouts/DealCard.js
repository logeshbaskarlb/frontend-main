import React from 'react'

const DealCard = ({deal}) => {
    return <>
    <div className="col-11 col-sm-6 col-md-10 col-lg-3 col-xl-3 mx-auto dealCard mt-3 d-flex justify-content-center">
        <div className="card p-2" style={{width: "18rem"}}>
          <img src={deal.image} className="card-img-top rounded img-fluid" alt={deal.text}/>
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          <span className="card-text text-center fw-bold my-3 fs-6">{deal.text}</span>
        </div>
        </div>
      </div>
    </>
}

export default DealCard