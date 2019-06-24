import React from 'react'
import background from "./../../assets/Images/background3.png";

import star from "./../../assets/Images/star.png";
import { 
    Container, 
    Row, 
    Col} from "reactstrap";
export default (props) => {
  return (
    <div>
        <div  className="p-5" style={{backgroundImage: `url(${background}`, 
                backgroundSize: "cover",
                backgroundPosition:"center center",
                backgroundRepeat:"no-repeat",}}>
            <div className="p-5 rounded" style={{
                background: "-moz-linear-gradient(45deg, rgba(220,220,220, 0.8), rgba(105,105,105, 0.8) 100%)",
                background: "-webkit-linear-gradient(45deg, rgba(220,220,220, 0.8), rgba(105,105,105, 0.8) 100%)",
                background: "-webkit-gradient(linear, 45deg, from(rgba(220,220,220, 0.8)), to(rgba(105,105,105, 0.8)))",
                background: "-o-linear-gradient(45deg, rgba(220,220,220, 0.8), rgba(105,105,105, 0.8) 100%)",
                background: "linear-gradient(45deg, rgba(220,220,220, 0.8), rgba(105,105,105, 0.8) 100%)",}}>

                <Container >
                    <Row className="pt-5 pb-5">
                        <Col>
                            <p className="h1 text-light shadow-sm" >Download YTS YIFY movies: HD smallest size</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{offset:2, size:7}}>
                            <p className="text-body">Welcome to the official YTS.LT website. Here you will be able to browse and download 
                            YIFY movies in excellent 720p, 1080p and 3D quality, all at the smallest file size. 
                            Only here: YTS Movies Torrents.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{offset:4, size:4}} className="px-0">
                            <img src={star} width="28px" className="d-inline align-top mr-2"/>
                            <p className="d-inline h4 text-white">Popular Downloads</p>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        {props.popularMovies.length != 0? props.popularMovies:null}
                    </Row>
                </Container>

            </div>
        </div>
        <div  style={{backgroundColor: "rgb(23, 23, 23)", 
                    backgroundSize: "cover",
                    backgroundPosition:"center center",
                    backgroundRepeat:"no-repeat",
                    }}>
            <Container>
                
                <Row>
                    <p className="h3 text-white mt-5">Latest YIFY Movies Torrents</p>
                </Row>

                {props.groupedLatestMoviesViews.length != 0? props.groupedLatestMoviesViews:null}
            
            </Container>
        </div>
    </div>
  )
}
