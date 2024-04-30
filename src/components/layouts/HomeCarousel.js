import React from 'react'
import DealCard from './DealCard';

let hotDeals=[
  {image:'https://static.vecteezy.com/system/resources/thumbnails/022/251/312/small_2x/illustration-of-leg-and-prosthesis-symbol-graphic-of-leg-and-amputation-ai-photo.jpg',
  text:'The function will terminate early,and the subsequent '

},
  {image:'https://c4.wallpaperflare.com/wallpaper/800/399/818/simple-background-robot-digital-art-artificial-intelligence-technology-hi-tech-wallpaper-preview.jpg',
  text:'The function will terminate early,and the subsequent '

},
  {image:'https://i.ytimg.com/vi/rBZKrpf3Y4U/maxresdefault.jpg',
  text:' If my leg falls off, I will get a prosthetic.'

},
  {image:'https://media.wired.com/photos/5a271d011a76b70919602351/master/w_1600%2Cc_limit/0118-WI-APPROS-04_sq.jpg',
  text:'Man has, as it were, become a kind of prosthetic God.'

},

]


const HomeCarousel = ({service}) => {
  return <>
  {/* CARD */}
<div style={{backgroundColor:'rgb(226,229,229)'}} className='my-5'>
   <h1 className='fw-bold text-center p-5 mb'><i>Latest Product</i></h1>
   </div>
<div className="container" id='dealCard'>
  <div className="row">
    {
      hotDeals.map((e,i)=>{
        // console.log(e);
        return <DealCard deal={e} key={i}/>
      })
    }
  </div>
</div>

  {/* CAROSOUL */}
  <div id="carouselExampleCaptions" className="carousel slide mt-5 my-5" data-mdb-ride="carousel" data-mdb-carousel-init>
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div data-aos="fade-right">
        <img src="https://wallpapercave.com/dwp1x/wp8496328.jpg" className="d-block w-100" alt="Wild Landscape"/>
      </div>
      <div className="carousel-caption d-none d-md-block">
        <div data-aos="fade-right">
          <h5 className="text-dark fs-1 fw-bolder">Prosthetic-Limb</h5>
          <p className="text-dark fs-4 fw-bold">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://wallpapercave.com/wp/wp8496333.jpg" className="d-block w-100" alt="Camera"/>
      <div className="carousel-caption d-none d-md-block">
        <div data-aos="fade-right">
          <h5 className="text-dark fs-1 fw-bolder">Prosthetic-Limb</h5>
          <p className="text-dark fs-4 fw-bold">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits"/>
      <div className="carousel-caption d-none d-md-block">
        <div data-aos="fade-right">
          <h5 className="text-dark fs-1 fw-bolder">Prosthetic-Limb</h5>
          <p className="text-dark fs-4 fw-bold">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </>
}

export default HomeCarousel