import React from "react";
import "./Intro.scss";
import logo from "../public/imgs/logo.jpg";
import logo1 from "../public/imgs/tron_intro_icon.jpg";
import logo2 from "../public/imgs/date_intro_icon.jpg";
import intro_anh from "../public/imgs/intro_anh.jpg";
import intro_anh2 from "../public/imgs/intro_anh2.jpg";
import thudo_duoi from "../public/imgs/thudo_tren.jpg";
import thudo_tren from "../public/imgs/thudo_duoi.jpg";
import khachhang1 from "../public/imgs/khachhang1.jpeg";
import khachhang2 from "../public/imgs/khachang2.jpg";
import khachhang3 from "../public/imgs/khachhang3.jpg";
import tour1 from "../public/imgs/tour_information_one.jpg";
import tour2 from "../public/imgs/tour_information_two.jpg";
import tour3 from "../public/imgs/tour_information_thrre.jpg";
import tour4 from "../public/imgs/tour_information_four.jpg";

export default function Intro() {
  return (
    <div>
      <div className="intro">
        <div className="intro_left">
          <h2>Dare to live the life you've always wanted.</h2>
          <p>Life is short and the world is wide. So, better get started.</p>
          <div className="search">
            <div className="sea_Location">
              <img src={logo1} alt="" />
              <div className="sea_Lo_content">
                <p>
                  Location <i className="bx bx-chevron-down"></i>
                </p>
                <span>Allentown, New Mexico</span>
              </div>
            </div>
            <div className="gach"></div>
            <div className="sea_Date">
              <img src={logo2} alt="" />
              <div className="sea_Da_content">
                <p>
                  Date<i className="bx bx-chevron-down"></i>
                </p>
                <span>04 Aug, 2022</span>
              </div>
              <i className="bx bx-search"></i>
            </div>
          </div>
        </div>
        <div className="intro_right">
          <img className="anh_one" src={intro_anh} alt="" />
          <img className="anh_two" src={intro_anh2} alt="" />
        </div>
      </div>
      {/* 2 */}
      {/* <!-- information --> */}
      <div className="information">
        {/* <!--  tổng bên trái  --> */}
        <div className="information_img">
          <div className="boss_img">
            <img className="img_one" src={thudo_tren} alt="" />
            <img className="img_two" src={thudo_duoi} alt="" />
          </div>
        </div>
        {/* <!--  tổng bên phải  --> */}
        <div className="information_content">
          <div className="content_About">
            <p>About us</p>
            <h2>Our tour plan is to fulfil your dream wish</h2>
            <span>
              Understand to achieve anything requires faith and belief in
              yourself, vision, hard work, determination, and dedication.
            </span>
          </div>

          <div className="info_content_folow">
            {/* <!--  một  --> */}
            <div className="box folow_one ">
              <h2>15</h2>
              <p>Years of Experience</p>
            </div>
            {/* <!-- hai  --> */}
            <div className="box folow_tow ">
              <h2>1k</h2>
              <p>Sucessful Trips</p>
            </div>
            {/* <!--  ba  --> */}
            <div className="box folow_three ">
              <h2>20k</h2>
              <p>Happy Customers</p>
            </div>
            {/* <!--  bốn  --> */}
            <div className="box folow_four ">
              <h2>4.9</h2>
              <p>
                Overall <br /> Rating
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 3  */}
      <div className="Cach"></div>
      <div className="Sites">
        {/* <!--  các tiêu đề  --> */}
        <div className="title">
          <div className="title_content">
            <p>Tour Packages</p>
            <h2>
              The amazing places around <br /> the world
            </h2>
          </div>
          <div className="title_icon">
            <i className="bx bx-chevron-left"></i>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
        {/* <!--  Các địa danh và giá tiền --> */}
        <div className="folder">
          <div className="bxx location_one">
            <div className="anhne"></div>
            {/* <!-- <img src="img/diadanh_1.jpg" alt=""> --> */}
            <div className="folder_content">
              <p>Fall in love among the winding streets and snow-covered</p>
              <span>Prague, Czechia</span>
              <br />
              <br />
              <a href="">
                <i className="bx bxs-star"></i> 4.9
              </a>
              <div>
                <h3>$200</h3>
                <blockquote>10 days tour</blockquote>
              </div>
            </div>
          </div>
          <div className="bxx location_two">
            <div className="anhne"></div>
            {/* <!-- <img src="img/diadanh_2.jpg" alt=""> --> */}
            <div className="folder_content">
              <p>History is not about the past but a map of the past</p>
              <span>Beijing, China</span>
              <br />
              <br />
              <a href="">
                <i className="bx bxs-star"></i> 4.9
              </a>
              <div>
                <h3>$450</h3>
                <blockquote>5 days tour</blockquote>
              </div>
            </div>
          </div>
          <div className="bxx location_three">
            <div className="anhne"></div>
            {/* <!-- <img src="img/diadanh_3.jpg" alt=""> --> */}
            <div className="folder_content">
              <p>The unique character as a symbol of taste and ostentation</p>
              <span>Prague, Czechia</span>
              <br />
              <br />
              <a href="">
                <i className="bx bxs-star"></i> 4.9
              </a>
              <div>
                <h3>$150</h3>
                <blockquote>7 days tour</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="Testimonial">
        {/* <!-- PHẦN ĐẦU  --> */}
        <div className="Testimonial_header">
          <p>Testimonial</p>
          <h3>Satisfied travellers around the world</h3>
        </div>
        {/* <!--  khách hàng đánh giá --> */}
        <div className="evaluate">
          <i className="bx bxn bx-chevron-left"></i>
          {/* <!-- khách hàng 1  --> */}
          <div className="boxx evaluate_one">
            <div className="img_client">
              <img src={khachhang1} alt="" />
            </div>
            <h2>Eleanor Pena</h2>
            <blockquote>UI/UX Designer</blockquote>
            <div className="icon">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Customer testimonials are more effective than paid marketing copy
              as they take the spotlight away from the seller to shine it on the
              customers.{" "}
            </p>
          </div>
          {/* <!--  khách hàng 2  --> */}
          <div className="boxx evaluate_two">
            <div className="img_client">
              <img src={khachhang2} alt="" />
            </div>
            <h2>Eleanor Pena</h2>
            <blockquote>UI/UX Designer</blockquote>
            <div className="icon">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Customer testimonials are more effective than paid marketing copy
              as they take the spotlight away from the seller to shine it on the
              customers.{" "}
            </p>
          </div>
          {/* <!--  kahcsh hàng 3 --> */}
          <div className="boxx evaluate_thrre">
            <div className="img_client">
              <img src={khachhang3} alt="" />
            </div>
            <h2>Eleanor Pena</h2>
            <blockquote>UI/UX Designer</blockquote>
            <div className="icon">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Customer testimonials are more effective than paid marketing copy
              as they take the spotlight away from the seller to shine it on the
              customers.{" "}
            </p>
          </div>
          <i className="bx bxn bx-chevron-right"></i>
        </div>{" "}
        {/*  6  */}
        <div className="tour">
          <div className="tour_header">
            <h2>
              We can do anything we want to if we stick to it long enough.
            </h2>
            <p>Do what you can, with what you have, where you are.</p>
            <button>See all tours</button>
          </div>

          <div className="tour_information">
            {/* <!-- 1 --> */}
            <div className="t_i tour_information_one">
              <div className="part_img">
                <img src={tour1} alt="" />
              </div>
              <h3>Porto, Portugal</h3>
              <p>
                <a href="">$150</a> 7 days tour
              </p>
            </div>

            {/* <!-- 2 --> */}

            <div className="t_i tour_information_two">
              <div className="part_img">
                <img src={tour2} alt="" />
              </div>
              <h3>Paris, Fance</h3>
              <p>
                <a href="">$100</a> 5 days tour
              </p>
            </div>

            {/* <!-- 3  --> */}
            <div className="t_i tour_information_three">
              <div className="part_img">
                <img src={tour3} alt="" />
              </div>
              <h3>Paris, Fance</h3>
              <p>
                <a href="">$250</a> 6 days tour
              </p>
            </div>

            {/* <!-- 4 --> */}

            <div className="t_i tour_information_four">
              <div className="part_img">
                <img src={tour4} alt="" />
              </div>
              <h3>Amsterdam, Netherland</h3>
              <p>
                <a href="">$150</a> 10 days tour
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  cuoi cung */}
      <div className="Last">
        <div className="bxxx Tripy">
          <img src={logo} alt="" />
          <p>
            4517 Washington Ave. <br /> Manchester, Kentucky 39495
          </p>
          <i className="bx bxl-facebook-square"></i>
          <i className="bx bxl-instagram-alt"></i>
          <i className="bx bxl-youtube"></i>
        </div>
        <div className="bxxx About">
          <span>About</span>
          <p>About us</p>
          <p>Features</p>
          <p>News</p>
          <p>Plans</p>
        </div>
        <div className="bxxx Company">
          <span>Company</span>
          <p>Why Tripy</p>
          <p>Partner with us</p>
          <p>FAQ</p>
          <p>Blog</p>
        </div>
        <div className="bxxx Support">
          <span>Support</span>
          <p>Account</p>
          <p>Support center</p>
          <p>Feedback</p>
          <p>Contact us</p>
        </div>
        <div className="bxxx Newsletter">
          <span>Newsletter</span>
          <p>Subscribe our newsletter and get exciting offers </p>
          <input placeholder="    Nhập thông tin cần tìm " type="text" />
          <i className="bx bx-search"></i>
        </div>
      </div>
    </div>
  );
}
