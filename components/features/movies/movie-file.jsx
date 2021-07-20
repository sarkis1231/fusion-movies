import React, {Component} from "react"
import PropTypes from "fusion:prop-types"


class MovieDetail extends Component {

    render() {
        console.log(this.props)
        return(
            <div className="movie-detail col-sm-12 col-md-18">
                <h1>Jurassic Park</h1>
                <p><strong>Director:</strong> Steven Spielberg</p>
                <p><strong>Actors:</strong>Sam Nail, Laura Dern</p>
                <p><strong>Plot:</strong>Lorem Ipsum</p>
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