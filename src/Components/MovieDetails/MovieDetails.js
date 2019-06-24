import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Container, Row, Col } from 'reactstrap';
import { faDownload, faHeart,   } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imdb from "./../../assets/Images/imdb-brands.svg";

export default (props) => {
    let similars = [];
    let itemsIndex = 0;
    let cast = [];
    if(props.similars.length != 0 ){
        for(var i=0;i<props.similars.length;i+=2){
            similars[itemsIndex] = <Row className="mt-5" key={i}>
                <Card className="col-5 mr-1" href={props.similars[i].url}>
                    <CardImg top width="100%" src={props.similars[i].medium_cover_image}/>
                </Card>
                <Card className="col-5" href={props.similars[i+1].url}>
                    <CardImg top width="100%" src={props.similars[i+1].medium_cover_image}/>
                </Card>
              
          </Row>
          itemsIndex = itemsIndex + 1;
        }
    }
    console.log(props.movie.cast );
    if(props.movie !== null && props.movie.cast !== undefined){
        cast = props.movie.cast.map((actor) =>(
            <Row className="mt-3">
                <img className="rounded-circle col-3  d-inline" src={actor.url_small_image} />
                <p className="col-9"><span className="d-inline text-dark">{actor.name}</span> <span className="d-inline text-light">as {actor.character_name}</span></p>
                <p className="d-inline col-4 text-dark"></p>
                <p className="d-inline col-5 text-light"></p>
            </Row>
        ))
    }
    /*if(props.movie !== null && props.movie.cast !== null){
        console.log("in cast if");
        cast = props.movie.cast.map((actor) =>(
            <Row>
                <img className="rounded-circle col-4  d-inline" src={actor.url_small_image} />
                <p className="d-inline col-4 text-dark">{actor.name}</p>
                <p className="d-inline col-4 text-light">as {actor.character_name}</p>
            </Row>
        ))
    }*/
    console.log(cast);

    if(props.movie !== null){
        const torrents = props.movie.torrents.map(torrent =>
            <a className="ml-2 rounded btn btn-dark d-inline" href={torrent.url}>{`${torrent.quality}.${torrent.type}`}</a>
            )
        return (
            <div>
                <div   style={{backgroundImage: `url(${props.movie.background_image_original}`, 
                    backgroundSize: "cover",
                    backgroundPosition:"center center",
                    backgroundRepeat:"no-repeat",}}>
                    <div className="p-5 rounded" style={{
                        background: "-moz-linear-gradient(45deg, rgba(31, 31, 31, 0.8), rgba(105,105,105, 0.8) 100%)",
                        background: "-webkit-linear-gradient(45deg, rgba(31, 31, 31, 0.8), rgba(105,105,105, 0.8) 100%)",
                        background: "-webkit-gradient(linear, 45deg, from(rgba(31, 31, 31, 0.8)), to(rgba(105,105,105, 0.8)))",
                        background: "-o-linear-gradient(45deg, rgba(31, 31, 31, 0.8), rgba(105,105,105, 0.8) 100%)",
                        background: "linear-gradient(45deg, rgba(31, 31, 31, 0.8), rgba(105,105,105, 0.8) 100%)",}}>
                            
                        <Container>

                            <Row>

                                <Col md="3">
                                    <Card>
                                        <CardImg top width="100%" src={props.movie.medium_cover_image}/>
                                    </Card>
                                    <Button className="btn btn-success rounded-lg btn-block mt-2"> <FontAwesomeIcon icon={faDownload} size="lg" className="mr-2 align-top" /> Download</Button>
                                </Col>

                                <Col md={{size: 5, offset:1}}>
                                    <Container>
                                        <Row>
                                            <p className="h1 text-white mb-3">{props.movie.title_english}</p>
                                        </Row>
                                        <Row>
                                            <p className="h6 text-white d-block">{props.movie.year}</p>
                                        </Row>
                                        <Row>
                                            <p className="h6 text-white d-block">{props.movie.genres[0]}</p>
                                        </Row>
                                        <Row>
                                            <p className="font-italic text-white font-weight-bolder mt-2 d-inline">
                                                Available in: 
                                                {torrents}
                                            </p>
                                        </Row>
                                        <Row>

                                            <FontAwesomeIcon icon={faHeart} color="#6ac045" size="lg" className="align-top" />
                                            <p className="col-3 h5 text-white">{props.movie.like_count}</p>
                                        </Row>
                                        <Row>
                                            <div className="align-baseline">
                                                <img className="mt-2 d-inline"  width="36px" src={imdb}/>
                                                <p className="d-inline col-3 h5 text-white align-baseline">{`${props.movie.rating}/10`}</p>
                                            </div>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col md="3">
                                    <Container>
                                        <Row>
                                            <p className="text-white h3">Similar Movies</p>
                                        </Row>
                                        {similars}
                                    </Container>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <img className="col-md-4 col-12 d-inline" src={props.movie.medium_screenshot_image1}/>
                                <img className="col-md-4 col-12 d-inline" src={props.movie.medium_screenshot_image2}/>
                                <img className="col-md-4 col-12 d-inline" src={props.movie.medium_screenshot_image3}/>
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
                            <div className="col-md-8 col-12">
                                <Container>
                                    <Row>
                                        <p className="h3 text-white mt-5">Synopsis</p>
                                    </Row>
                                    <Row>
                                        <p className="h7 text-dark">{props.movie.description_intro.substring(0,373)}...</p>
                                    </Row>
                                </Container>

                            </div>
                            <div className="col-md-4 col-12">
                                <Container>
                                    <Row>
                                        <Col>
                                            <p className="h3 mt-5 text-white">Cast</p>
                                        </Col>
                                    </Row>
                                    {cast}
                                </Container>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
          )
    }else{
        return(
            <div>

            </div>
        )
    }
  
}
//1d1d1d