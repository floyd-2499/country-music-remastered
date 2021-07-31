import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "./product/actions/action";
import Header from "./contents/Header";
import Footer from "./contents/Footer";
import Product from "./product/Product";
import "./pageStyling.css";
import './page-phone.css'
import ad from "./Images/ad.svg";
import adbottom from "./Images/adbottom.svg";
import review from "./Images/review.svg";

const Products = () => {
  const [searchItem, setsearchItem] = useState(" ");

  const dispatch = useDispatch();
  const { instruments, loading } = useSelector((state) => state.getInstruments);

  useEffect(() => {
    dispatch({ type: actionTypes.GET_INSTRUMENTS });
  }, []);

  return (
    <div>
      <Header />
      <div className="pro-page page">
        <div className="pro-ad">
          <img src={ad} alt="pro-ad" />
        </div>
        <div className="pro-main">
          <div className="side-bar">
            <div className="brands">
              <h1>Top Brands</h1>
              <h5 className="small">{/* for a line */}</h5>

              <p>YAMAHA</p>
              <p>Casio</p>
              <p>Roland</p>
              <p>Akai</p>
              <p>Juârez</p>
              <p>Kadence</p>
              <p>Behringer</p>
              <p>Pearl</p>
              <p>Havana</p>
              <p>Tama</p>
            </div>

            <h5 className="large">{/* line */}</h5>

            <div className="reviews">
              <h1>Rewiews</h1>
              <h5 className="small">{/* for a line */}</h5>

              <img src={review} alt="review" />
            </div>
            <h5 className="large">{/* line */}</h5>
          </div>

          <div className="main-container">
            <div className="filter">
              <input
                type="text"
                placeholder="Search -- or --  Filter"
                onChange={(e) => {
                  setsearchItem(e.target.value);
                }}
              />
              <i className="fas fa-search"></i>
            </div>

            <div className="pro">
              {!loading
                ? instruments
                    .filter((val) => {
                      if (searchItem === "") {
                        return val;
                      } else if (
                        val.category
                          .toLowerCase()
                          .includes(searchItem.toLocaleLowerCase())
                      ) {
                        return val;
                      } else if (
                        val.item
                          .toLowerCase()
                          .includes(searchItem.toLocaleLowerCase())
                      ) {
                        return val;
                      } else if (
                        val.company
                          .toLowerCase()
                          .includes(searchItem.toLocaleLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((item) => {
                      return <Product key={item.id} product={item} />;
                    })
                : "loading..."}
            </div>
          </div>
        </div>

        <div className="pro-ad">
          <img src={adbottom} alt="pro-ad" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
