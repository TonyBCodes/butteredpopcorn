import React, { Component } from "react";
import movieAPI from "../utils/movieAPI";
import InfoPage from "./InfoPage";
import MovieInfo from "./MovieInfo";


class Results extends Component {
    state = {
        info: ""
    }

    // function for searching for movie
    searchTitle = event => {
        const id = this.props.id;
        const type = this.props.media;
        console.log("id", id);
        console.log("media:", type);

        if (type === "movie") {
            movieAPI.searchMovie(id)
                .then(res => {
                    this.setState({
                        info: res.data
                    });
                    console.log(this.state.info);
                })
                .catch(err => console.log(err));
        };

        if (type === "tv") {
            movieAPI.searchTV(id)
                .then(res => {
                    this.setState({
                        info: res.data
                    });
                    console.log(this.state.info);
                })
                .catch(err => console.log(err));
        };
    };

    render() {
        return (
            <div>
                {!this.state.info ? (
                    <div className="row" id={this.props.id}>
                        <div>
                            {this.props.showTitle ? (
                                <h3 onClick={this.searchTitle}>{this.props.showTitle}</h3>
                            ) : (
                                    <h3 onClick={this.searchTitle}>{this.props.movieTitle}</h3>
                                )}
                        </div>
                        <div>
                            <h4>{this.props.media}</h4>
                            <p>{this.props.overview}</p>
                        </div>
                    </div>) : (
                        <div>
                            <InfoPage>
                                <MovieInfo info={this.state.info} />
                            </InfoPage>
                        </div>
                    )
                }
            </div>
        )
    }
}



// const Results = props => (
//     <div className="row" id={props.id}>
//         <div>
//         {props.showTitle ? 
//         // (<a href="/info"><h3 onClick={() => props.searchTitle(props.id, props.media)}>{props.showTitle}</h3></a>) :
//         // (<a href="/info"><h3 onClick={() => props.searchTitle(props.id, props.media)}>{props.movieTitle}</h3></a>)}
//        (<h3 onClick={() => props.searchTitle(props.id, props.media)}>{props.showTitle}</h3>) :
//         (<h3 onClick={() => props.searchTitle(props.id, props.media)}>{props.movieTitle}</h3>)}

//         </div>
//         <div>
//         <h4>{props.media}</h4>
//         <p>{props.overview}</p>
//         </div>
//     </div>

// )

export default Results;