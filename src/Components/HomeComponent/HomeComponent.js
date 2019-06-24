import React, { Component } from 'react'
import { 
    Container, 
    Row, 
    Col, 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import logo from "./../../assets/Images/logo-YTS.svg";
import Movie from "./../MovieComponent/MovieComponent";
import Registration from "../RegistrationComponent/Registration";
import { connect } from "react-redux";
import { getPopularMovies, getLatestMovies, getSimilarMovies, getSelectedMovie } from "../../Redux/ActionCreators";
import HomePage from "../HomePageComponent/HomePageComponent"
import MovieDetails from "../MovieDetails/MovieDetails";
import {  Route,withRouter, Switch } from "react-router-dom";

const mapStateToProps = (state) => ({
    movies: state.movies.popularMovies,
    lastestMovies: state.movies.latestMovies,
    selectedMovie: state.movies.selectedMovie,
    similarMovies: state.movies.similarMovies
})

const mapDispatchToProps = (disptach) => ({
    fetchPopularMovies :  () => {disptach(getPopularMovies())},
    fetchLatestMovies:    () => {disptach(getLatestMovies())},
    fetchMovie:           (id,history) => {disptach(getSelectedMovie(id,history))},
    fetchSuggestedMovies: (id) => {disptach(getSimilarMovies(id))}
});
class Home extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isModalOpen: false
        };
    }

    componentDidMount(){
        this.props.fetchPopularMovies();
        this.props.fetchLatestMovies();
    }

    
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    toggleModal =() =>{
        this.setState({
            ...this.state,
            isModalOpen:!this.state.isModalOpen
        })
    }

    onMovieClick =(id) => {
        this.props.fetchMovie(id,this.props.history);
        this.props.fetchSuggestedMovies(id);
    }

    

  render() {
    let popularMovies = [];
    let latestMoviesViews = [];
    let groupedLatestMoviesViews =[];
      if(this.props.movies.length!= 0){
           popularMovies = this.props.movies.map((movie, i) =>(
            <Col md={3} sm={6} xs={12} key={i}>
                <Movie onClick={()=>this.onMovieClick(movie.id)}  name={movie.title_english} year={movie.year} img={movie.medium_cover_image} rate={movie.rating} genre1={movie.genres[0]} genre2={movie.genres[1]}/>
            </Col>
          ))
      }

      
      if(this.props.lastestMovies.length != 0){
        latestMoviesViews = this.props.lastestMovies.map((movie,i) =>(
            <Col md={3} sm={6} xs={12}>
                <Movie onClick={()=>this.onMovieClick(movie.id)}  name={movie.title_english} year={movie.year} img={movie.medium_cover_image} rate={movie.rating} genre1={movie.genres[0]} genre2={movie.genres[1]}/>
            </Col>
          ));
      }
      let itemsIndex = 0;
      for(var i=0;i<latestMoviesViews.length;i++){
        groupedLatestMoviesViews[i] = <Row className="mt-5" key={i}>
            {latestMoviesViews[itemsIndex]}
            {latestMoviesViews[itemsIndex+1]}
            {latestMoviesViews[itemsIndex+2]}
            {latestMoviesViews[itemsIndex+3]}
        </Row>
        itemsIndex = itemsIndex + 4;
      }
    return (
        <div>
            <Registration ModalOpen={this.state.isModalOpen} modalToggle={this.toggleModal}/>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/" className="mr-auto  ml-4">
                    <img src={logo} alt="Logo"/> 
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar> 
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Browse Movies</NavLink>
                        </NavItem>
                        <NavItem className="ml-5">
                            <button type="button" class="btn btn-outline-light" onClick={this.toggleModal}>Login</button>
                        </NavItem>
                        <NavItem className="ml-2">
                            <button type="button" class="btn btn-outline-light" onClick={this.toggleModal}>Register</button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            
            <Route path="/movie" component={()=> < MovieDetails movie={this.props.selectedMovie} similars = {this.props.similarMovies} />} />
            <Route exact path="/" component={()=> < HomePage groupedLatestMoviesViews={groupedLatestMoviesViews} popularMovies={popularMovies} />}/>
            
            
            
        </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));