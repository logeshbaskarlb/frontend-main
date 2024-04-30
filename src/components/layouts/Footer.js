import { Link } from 'react-router-dom'; 

export  default function Footer (){
    return (
      <footer className="py-5" style={{backgroundColor:'rgb(227,230,230)',color:'rgb(49,53,91)'}}>
      <div className="container-fluid">
        <div className="row">
            <div className="col-4 text-center">
                <h4 className="fw-bold">Special Person</h4>
               <div style={{fontStyle:'italic'}}>
               <span className="d-block mt-1">A108 Adam Street</span>
                <span className="d-block mt-1">New York, NY 535022</span>
                <span className="d-block mt-1">United States</span>
                <span className="d-block mt-1 end-phn"> +1 5589 55488 55</span>
                <span className="d-block mt-1 end-email"> info@example.com</span>
               </div>
            </div>
            <div className="col-4">
               <h4 className="text-center fw-bold">Useful Links</h4>
            <div className="d-flex justify-content-center" style={{fontStyle:'italic'}}>
                <ul>
                    <Link to='/' style={{textDecoration:'none',color:'rgb(49,81,149)'}}><li className="">Home</li></Link>
                    <Link to='about' style={{textDecoration:'none',color:'rgb(49,81,149)'}} ><li className="">About US</li></Link>
                    <Link to='/' style={{textDecoration:'none',color:'rgb(49,81,149)'}}><li className="">Service</li></Link>
                    <Link to='/' style={{textDecoration:'none',color:'rgb(49,81,149)'}}><li className="">Terms of Service</li></Link>
                    <Link to='/' style={{textDecoration:'none',color:'rgb(49,81,149)'}}> <li className="">Contact Us</li></Link>
                </ul>
            </div>
            </div>
            <div className="col-4">
                <h4 className="text-center fw-bold">Our Services</h4>
              <div className="d-flex justify-content-center" style={{fontStyle:'italic'}}>
                <ul>
                    <li className="">Web Design</li>
                    <li className="">Web Developer</li>
                    <li className="">Product Mangement</li>
                    <li className="">Marketing</li>
                    <li className="">Graphic Design</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div className="container-fluid my-4">
        <div className="row">
            <div className="col-11 col-lg-6 col-xl-6 col-sm-6 col-md-6 mx-auto text-center">
                  <div className="container mt-4"><p className="m-0 text-center fw-bold">Copyright &copy; My Website 2024</p></div>
            </div>
            <div className="col-11 col-lg-6 col-xl-6 col-sm-6 col-md-6 mx-auto text-center">
                        <div className="social-link">
                           <a href='https://www.facebook.com/'> <span className="links-spn m-1"><i className="fa-brands fa-facebook-f links"></i></span>
                           </a>
                           <a href='https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s%7Cc%7C547419127637%7Ce%7Cinstagram%20login%7C&placement=&creative=547419127637&keyword=instagram%20login&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-35100690670%26loc_physical_ms%3D9183225%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAiAloavBhBOEiwAbtAJO7ixWHWEEIFOXTRGAXjY92g4CWQwR8IXZo6ehUZHvXcq5ULIqrSl7hoCdekQAvD_BwE'> <span className="links-spn m-1"><i className="fa-brands fa-instagram links"></i></span>
                           </a>

                           <a href='https://www.linkedin.com/feed/'> <span className="links-spn m-1"><i className="fa-brands fa-linkedin-in links"></i></span></a>

                           <a href='https://twitter-log.netlify.app/'> <span className="links-spn m-1"><i className="fa-brands fa-twitter links"></i></span></a>
                        <a href='https://www.google.co.in/'><span className="links-spn m-1 no"><i className="fa-brands fa-google-plus-g links"></i></span></a>
                        </div>
            </div>
        </div>
      </div>
    </footer>
    )
}