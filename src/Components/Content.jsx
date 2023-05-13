import React, { useEffect } from 'react';
import '../../src/Content.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Content = (props) => {
    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000,
        });
    }, [])
    return (
        <div className="container d-flex justify-content-evenly mt-5 mb-5" data-aos="slide-up">
            <div className="infoDiv col-4 col-xl-3">
                <h1 className="head">{props.head}</h1>
                <div className="imgDivMob">
                    <img src={props.img} alt="" className="image" />
                </div>
                <h3 className="description">{props.des}</h3>
                <p className="link d-inline-block">{props.info}</p>
                <i className="bi bi-arrow-right mb-2" style={{ fontSize: "2rem" }}></i>
            </div>
            <div className="imgDiv col-5 col-xl-4">
                <img src={props.img} alt="" className="image" />
            </div>
        </div>
    )
}

export default Content; 