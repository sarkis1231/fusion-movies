import React, {Component} from "react"
import PropTypes from "fusion:prop-types"
import Consumer from 'fusion:consumer'

@Consumer
class MovieDetail extends Component {
    state = {
        isPlotShown: false,
        user: {},
        loaded: false
    }

    togglePlot = () =>  {
        console.log("hello from toggle plot")
        this.setState(({isPlotShown}) => ({isPlotShown: !isPlotShown}))
    }

    componentDidMount() {
        console.log("working")
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => {
            console.log(json)
            this.setState((prev) => ({...prev, ...json}))
            this.setState(({loaded}) => ({loaded: !loaded}))
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.props)
        const {isPlotShown, user, loaded} = this.state
        const plotButton = (
            <button onClick={this.togglePlot}>
                {isPlotShown ? "Hide Plot" : "Show Plot"}
            </button>
        );

        const plot = "Lorem Ipsum";

        return(
            <div className="movie-detail col-sm-12 col-md-18">
                <h1>Jurassic Park</h1>
                <p><strong>Director:</strong> Steven Spielberg</p>
                <p><strong>Actors:</strong>Sam Nail, Laura Dern</p>
                <p><strong>Plot:</strong>Lorem Ipsum</p>
                <p><strong>Plot:</strong>{plotButton} {isPlotShown && plot} </p>
                {loaded ? <p>{user.title}</p> : <p>Loading</p> }

            </div>
        )
    }
}

MovieDetail.label = "Movie Detail"
MovieDetail.propTypes = {

    customFields: PropTypes.shape({
        key: PropTypes.string.tag({
            defaultValue: 'dianomi',
            group: 'Advertisement',
            name: 'Flag',
            description: 'Indicates whether the dianomi block should be inserted',
        }),
        number: PropTypes.number.tag({
            defaultValue: 5,

        })
    })

}
export default  MovieDetail