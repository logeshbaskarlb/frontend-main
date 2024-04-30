import React from 'react'

const HomeRelatedV = () => {
  return <>
  <div className="container-fluid my-5" id="video">
  <h1 className="text-center my-3 text-dark fw-bolder p-4 mb" style={{fontStyle:'italic',backgroundColor:'rgb(226,229,229)'}}  >Related Videos &nbsp; <i className="fa-solid fa-video"></i></h1>
  <div className="row mx-1" height="600">
    <div className="col-sm-9 col-lg-5 col-xl-3 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-light-subtle shadow rounded-3 mb-4">
        <video autoPlay muted loop id="myVideo" controls width="560" height="600" src="https://youtu.be/5tC0geQhdao?si=Sk28ThcZKp03iN0j" type="video/mp4">
        </video>
    </div>
    <div className="col-9 col-lg-5 col-xl-6 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-dark-subtle shadow rounded-3 my-4">
      <video autoPlay muted loop id="myVideo" controls width="560" height="300" src="https://youtu.be/5tC0geQhdao?si=Sk28ThcZKp03iN0j" type="video/mp4">
      </video>
    </div>
    <div className="col-9 col-lg-5 col-xl-3 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-light-subtle shadow rounded-3 my-4">
      <video autoPlay muted loop id="myVideo" controls width="560" height="300" src="https://youtu.be/5tC0geQhdao?si=Sk28ThcZKp03iN0j" type="video/mp4">
      </video>
    </div>
    <div className="row mx-1 related-v">
      <div className="col-sm-9 col-lg-5 col-xl-4 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-dark-subtle shadow rounded-3 my-4">
        <video autoPlay muted loop id="myVideo" src="https://youtu.be/5tC0geQhdao?si=Sk28ThcZKp03iN0j" type="video/mp4" controls width="560" height="300">
        </video>
      </div>
    
      <div className="col-9 col-lg-5 col-xl-4 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-dark-subtle shadow rounded-3 my-4">
        <video autoPlay muted loop id="myVideo" src="https://youtu.be/5tC0geQhdao?si=Sk28ThcZKp03iN0j" type="video/mp4" controls width="560" height="300">
        </video>
      </div>
      <div className="col-9 col-lg-5 col-xl-4 col-md-8 col-sm-9 mx-auto d-flex justify-content-center align-items-center mt-5 border border-dark-subtle shadow rounded-3 my-4">
        <video autoPlay muted loop id="myVideo" src="https://youtu.be/5tC0geQhdao?si=Sk28ThcZKp03iN0j" type="video/mp4" controls width="560" height="300">
        </video>
      </div>
  </div>
</div>
</div>
  </>
}

export default HomeRelatedV