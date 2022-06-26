import React from 'react';

function Slider(props) {
    return (
        <div style={{ zIndex: "-50", width: "100%", height: "250px" }} id="myslider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myslider" data-slide-to="0" className="active"></li>
                <li data-target="#myslider" data-slide-to="1"></li>
                <li data-target="#myslider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{ height: "250px", width: "100%" }}>
                <div className="item active">
                    <img src="https://i.ibb.co/P4sDnjF/flipadd1.jpg" alt="a" width="100%" height="250px" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/yhYd4mk/flipadd2.jpg" alt="a" width="100%" height="250px" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/Y7ctDSV/flipadd3.jpg" alt="a" width="100%" height="250px" />
                </div>
            </div>

            <a className="left carousel-control" href="#myslider" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a className="right carousel-control" href="#myslider" data-slide="next">
                <span id="right" className="glyphicon glyphicon-chevron-right"></span>
            </a>
        </div>
    );
}

export default Slider;