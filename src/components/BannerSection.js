import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BannerSection = ({ mainBannerData = [], smallBannerData = [] }) => {
  return (
    <div className="container">

      <div className="row py-5 slider-container-banner">
        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6"> 
            <div className="main-banner-display">
              <Swiper className="main-banner-slider"
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
            >
              {mainBannerData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="main-banner position-relative">
                    <div className="box-img">
                      <img
                        src={item.images?.[0]?.url || "images/main-banner.jpg"} 
                        className="img-fluid rounded-3 w-100"
                        alt={item.alt || "main-banner"}
                      />
                    </div>
                    <div className="main-banner-content position-absolute">
                      <h4>{item.subTitle || "SUPPERCHARGED FOR PROS"}</h4>
                      <h5>{item.title || "iPad S14+ Pro."}</h5>
                      <p className="price">
                        <span className="red-p"> Từ { Number(item.price).toLocaleString("vi-VN") + " ₫"}</span>&nbsp; 
                      </p>
                      <Link to={`product/${item._id}`} className="button">
                        Mua ngay
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6"> 
          <div className="small-banner-display">
            {smallBannerData.map((item, index) => (
              <div className="small-banner position-relative" key={index}>
                <div className="box-img">
                  <img
                    src={item.images?.[0]?.url || "images/catbanner-01.jpg"}
                    className="img-fluid rounded-3"
                    alt={item.alt || "small-banner"}
                  />
                </div>
                <div className="small-banner-content position-absolute">
                  <div className="content" >
                    <h4>{item.subTitle || "Best Sale"}</h4>
                    <h5><Link to={`product/${item._id}`}>{item.title || "iPad S14+ Pro."}</Link></h5>
                    <p className="price">
                      <span className="red-p">Từ { Number(item.price).toLocaleString("vi-VN") + " ₫"}</span>&nbsp; 
                    </p> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
