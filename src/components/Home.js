import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";
import HomeBackV from "./layouts/HomeBackV";
import HomeCarousel from "./layouts/HomeCarousel";
// import HomeRelatedV from "./layouts/HomeRelatedV";
import HomeOffer from "./layouts/HomeOffer";
import ServiceCard from "./layouts/ServiceCard";

export default function Home() {
  let data = [
    {
      title: "Bionic hand offers strength, sense of touch to amputees",
      image1: {
        sale: true,
        image1:
          "https://w7.pngwing.com/pngs/614/278/png-transparent-prosthesis-amputation-protesis-ortopedica-limb-orthotics-prosthetic-design-inc-glass-foot-limb.png",
        shortTitle: "Leg Prosthetic",
        del: "20%",
        offer: "50% off",
        text: "Deal of the Day",
      },
      image2: {
        sale: false,
        image2:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidBJ1Bjw6E0zlKgvqT6RO5rX5HDQfMQrtddytKY80owpwqzzKfi2BJv9Yc03zJKm-xc4&usqp=CAU",
        shortTitle: "Arm Prosthetic",
        del: "25%",
        offer: "40% off",
        text: "Hot Deals",
      },
      image3: {
        sale: true,
        image3:
          "https://media.istockphoto.com/id/1423617287/photo/asian-female-athlete-with-disability-artificial-leg-warm-up-stretching-at-pedestrian-walkway.webp?b=1&s=170667a&w=0&k=20&c=I4bFg4uT9Q6LEUwLJMB_--yYhA8VlE9kq44acJ2o048=",
        shortTitle: "Finger Prosthetic",
        del: "5%",
        offer: "10% off",
        text: "Deal of the Day",
      },
      image4: {
        sale: false,
        image4:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275RRq9Liu-r64wyKWTNXNWJrXaXC4vECoA&usqp=CAU",
        shortTitle: "Foot Prosthetic",
        del: "15%",
        offer: "20% off",
        text: "Hot deals",
      },
      allDeal: "See All Deals",
    },
    {
      title: "Up to 75% offer | prosthetic-hands-Arkansas",
      image1: {
        sale: false,
        image1:
          "https://journal.sciencemuseum.ac.uk/wp-content/uploads/2020/05/fig-1-5-1024x683.jpg",
        shortTitle: "Prosthetic limbs",
        del: "45%",
        offer: "60% off",
        text: "Hot Deals",
      },
      image2: {
        sale: true,
        image2:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmevGrDKypi6_2si_ucE2Px3fDBXRB0H2zwg&usqp=CAU",
        shortTitle: "Prosthetics Legs",
        del: "20%",
        offer: "40% off",
        text: "Deal of the Day",
      },
      image3: {
        sale: false,
        image3:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBIs7o0amg_Pyv-oO8JPNuhP4qY3U45WdQ6s17dFxmuiP4rq29spHNI6nk1V75GGPkms&usqp=CAU",
        shortTitle: "Upper Extremity Prosthetics",
        del: "47%",
        offer: "55% off",
        text: "Hot Deals",
      },
      image4: {
        sale: false,
        image4: "https://wallpapercave.com/dwp1x/wp8496365.jpg",
        shortTitle: "Leg prosthetic",
        del: "13%",
        offer: "41% off",
        text: "Deal of the Day",
      },
      allDeal: "See All Deals",
    },
    {
      title: "Get the perfect size | Prosthetic leg Starting ₹16,999",
      image1: {
        sale: true,
        image1:
          "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2019/10/prosthetic-leg.jpg",
        shortTitle: "New prosthesis feels and acts like original limb",
        del: "50%",
        offer: "70% Off",
        text: "Deal of the Day",
      },
      image2: {
        sale: false,
        image2:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzaNPWLJiCETm8DiDANFutIHqasVPH4hsej9yzTXuqPNRIlnGnknlkdXKbVrzX9URLMf8&usqp=CAU",
        shortTitle: "Biotechnology in motion",
        del: "34%",
        offer: "47% off",
        text: "Hot Deals",
      },
      image3: {
        sale: true,
        image3:
          "https://cdn.trendhunterstatic.com/thumbs/474/smart-prosthetic-arm.jpeg?auto=webp",
        shortTitle: "AI-Powered Prosthetic Arms : Smart Prosthetic Arm",
        del: "17%",
        offer: "36% off",
        text: "Deal of the Day",
      },
      image4: {
        sale: false,
        image4:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9eosUX1TPmOed5XWIh6tb7EHftz5if5X_NM86iyf5DeMj4VeVmfAv003ehnbtohuxz4&usqp=CAU",
        shortTitle: "ArtStation Space X Prosthetic Arm",
        del: "57%",
        offer: "50% off",
        text: "Hot Deals",
      },
      allDeal: "See All Deals",
    },
    {
      title: "Electronic glove offers ‘humanlike’ features for hand ",
      image1: {
        sale: false,
        image1:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSWbMF-grd_3qZuMBA-Ou5R3Pv4G9bKtMpfpYg4u-vmuXsjHDWrMMH4C5lLtZF7hcfv0&usqp=CAU",
        shortTitle:
          "This prosthetic limb integrates smart technology into its build to intuit",
        del: "45%",
        offer: "72% Off",
        text: "Deal of the Day",
      },
      image2: {
        sale: true,
        image2:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaI0nd7JSTm6wlwHI7D38EBFWIl48PoRnqBRzbYZiNXnss-5rkujIaoj0GWUk5eu2Grs&usqp=CAU",
        shortTitle: "The Prosthetics Industry Gets A Human Touch : NPR",
        del: "11%",
        offer: "50% off",
        text: "Hot Deals",
      },
      image3: {
        sale: false,
        image3:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnNPXE89xQhyVLwgA7UxIIitkCn2mopgXi353h0oSPF2L4txe_KO_DJdHCg-dua5YpSo&usqp=CAU",
        shortTitle:
          "Neural Prostheses Step Up: New Technology Allows Users to Feel",
        del: "5%",
        offer: "50% off",
        text: "Deal of the Day",
      },
      image4: {
        sale: true,
        image4:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaI0nd7JSTm6wlwHI7D38EBFWIl48PoRnqBRzbYZiNXnss-5rkujIaoj0GWUk5eu2Grs&usqp=CAU",
        shortTitle: "The Prosthetics Industry Gets A Human Touch : NPR",
        del: "11%",
        offer: "50% off",
        text: "Hot Deals",
      },
      allDeal: "See All Deals",
    },
  ];
  let service = [
    {
      icon: "fa-solid fa-truck",
      title: "Free Shipping",
      color: "rgb(253,239,230)",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "fa-solid fa-arrows-rotate",
      title: "Easy Returns",
      color: "rgb(206,235,233)",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Secure Payment",
      color: "rgb(226,242,178)",
      text: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "fa-solid fa-hand-holding-dollar",
      title: "Back Guarantee",
      color: "rgb(214,229,251)",
      text: "Lorem ipsum dolor sit amet.",
    },
  ];

  const dispatch = useDispatch();
  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );
  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };

  useEffect(() => {
    if (error) {
      return toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
    dispatch(getProducts(null, null, null, null, currentPage));
  }, [error, dispatch, currentPage]);

  return (
    <>
    <HomeBackV />
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={"Best Products"} />
            <div
              style={{ backgroundColor: "rgb(226,229,229)" }}
              className="p-2"
            >
              <h1 id="products_heading" className="text-center my-4 fw-bold mb">
              <i className="fa-solid fa-fire"></i> &nbsp; Hot Deals
              </h1>
            </div>
            <hr />
            <section id="products" className="container-fluid mt-5">
              <div className="row">
                {products &&
                  products.map((product) => (
                    <Product col={4} key={product._id} product={product} />
                  ))}
              </div>
            </section>
            {productsCount > 0 && productsCount > resPerPage ? (
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  onChange={setCurrentPageNo}
                  totalItemsCount={productsCount}
                  itemsCountPerPage={resPerPage}
                  nextPageText={"Next"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  itemClass={"page-item"}
                  linkClass={"page-link"}
                />
              </div>
            ) : null}
          </Fragment>
        )}
      </Fragment>
      <HomeCarousel />
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="container-fluid my-5" id="ser-det">
              <div className="row">
                {service.map((e, i) => {
                  return <ServiceCard key={i} service={e} />;
                })}
              </div>
            </div>
          </>
        )}
      </Fragment>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="my-5 home-offer-container">
              <div style={{ paddingTop: "2em" }}>
                <h1
                  id="offer"
                  className="d-flex justify-content-center  fw-bolder fs-1 mx-auto mb-4 p-4 mb"
                  style={{
                    fontStyle: "italic",
                    backgroundColor: "rgb(226,229,229)",
                  }}
                >
                  Today's Deals &nbsp; <i className="fa-solid fa-tags mt-2"></i>
                </h1>
              </div>
              <div className="container-fluid" id="offer-parent">
                <div className="row">
                  {data.map((data, i) => {
                    // console.log(data);
                    return <HomeOffer data={data} key={i} />;
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </Fragment>
      {/* <HomeRelatedV /> */}
    </>
  );
}
