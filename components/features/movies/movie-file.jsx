import React, {Component} from "react"
import PropTypes from "fusion:prop-types"


class MovieDetail extends Component {

    render() {
        console.log(this.props)
        return(
            <div>
                <h1>Jurassic Park</h1>
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