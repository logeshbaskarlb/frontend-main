import React from 'react'
// import 'aos/dist/aos.css'; 

const HomeOffer = ({data}) => {
  
  // useEffect(()=>{
  //   AOS.init();
  // })

return <div className="col-sm-10 col-11 col-lg-5 col-xl-5 mx-auto m-2 rounded-4">
  <div className="container mt-md-4 rounded-4 off-bg py-3 px-3 p-4">
      <div className="row">
        <div data-aos="flip-left">
          <h3 className="mb-4 text-center text-body-emphasis p-3 mb-head" style={{fontStyle:'italic'}}>{data.title}</h3>
        </div>
        <div className="col-6  off-bg-del position-relative">
            <a href="#" className="text-decoration-none stretched-link">
            {data.image1.sale?(<><div className="badge text-white position-absolute" style={{top: "-0.8em", right: "0.2rem", backgroundColor:'rgb(49,53,91)', fontStyle:'italic'}}>Best Seller</div></>):('')}
              <img src={data.image1.image1} alt={data.image1.shortTitle} title={data.image1.shortTitle} className="img-fluid" style={{borderRadius:'1em'}}/>
             <div className="mt-3 text-center">
                  <span className="bg-danger text-light rounded-2 p-2 mb-1 fw-bold"><del>{data.image1.del}</del>🎉{data.image1.offer}</span><br/>
                  <p className="text-danger mt-2 fw-bold " style={{fontStyle:'italic'}}>{data.image1.text}</p>
             </div>
          </a>
        </div>
        <div className="col-6  off-bg-del position-relative ">
            <a href="#" className="text-decoration-none stretched-link">
            {data.image2.sale?(<><div className="badge text-white position-absolute" style={{top: "-0.8em", right: "0.5rem", backgroundColor:'rgb(49,53,91)', fontStyle:'italic'}}>Best Seller</div></>):('')}
              <img src={data.image2.image2} alt={data.image2.shortTitle} title={data.image2.shortTitle} className="img-fluid rounded-2" style={{borderRadius:'1em'}} />
             <div className="mt-3 text-center">
                  <span className="bg-danger text-light rounded-2 p-2 fw-bold"><del>{data.image2.del}</del> 🎉{data.image2.offer}</span><br/>
                  <p className="text-danger mt-2 fw-bold" style={{fontStyle:'italic'}}>{data.image2.text}</p>
              </div>
            </a>      
        </div>
        <div className="col-6 mt-3  off-bg-del position-relative">
            <a href="#" className="text-decoration-none stretched-link">
            {data.image3.sale?(<><div className="badge text-white position-absolute" style={{top: "-0.8em", right: "0.5rem", backgroundColor:'rgb(49,53,91)', fontStyle:'italic'}}>Best Seller</div></>):('')}
              <img src={data.image3.image3} className="img-fluid rounded-2" alt={data.image3.shortTitle} title={data.image3.shortTitle} style={{borderRadius:'1em'}}/>
             <div className="mt-3 text-center">
                  <span className="bg-danger text-light rounded-2 p-2 fw-bold rounded-2"><del>{data.image3.del}</del> 🎉{data.image3.offer}</span><br/>
                  <p className="text-danger mt-2 fw-bold" style={{fontStyle:'italic'}}>{data.image3.text}</p>
             </div>
          </a>
        </div>  
        <div className="col-6 mt-3  off-bg-del position-relative">
            <a href="#" className="text-decoration-none stretched-link">
            {data.image4.sale?(<><div className="badge text-white position-absolute" style={{top: "-0.8em", right: "0.5rem", backgroundColor:'rgb(49,53,91)', fontStyle:'italic'}}>Best Seller</div></>):('')}
              <img src={data.image4.image4} alt={data.image4.shortTitle} title={data.image4.shortTitle} className="img-fluid rounded-5" style={{borderRadius:'1em'}}/>
              <div className="mt-3  text-center">
                <span className="bg-danger text-light rounded-2 p-2 fw-bold"><del>{data.image4.del}</del> 🎉{data.image4.offer}</span><br/>
                <p className="text-danger mt-2 fw-bold" style={{fontStyle:'italic'}}>{data.image4.text}</p>
              </div>
            </a>  
        </div>
  </div>  
</div>
</div> 
}

export default HomeOffer