import React, {Component} from "react"
import PropTypes from "fusion:prop-types"
import Consumer from 'fusion:consumer'

@Consumer
class MovieDetail extends Component {
    state = {
        isPlotShown: false,
    }

    togglePlot = () =>  {
        console.log("hello from toggle plot")
        this.setState(({isPlotShown}) => ({isPlotShown: !isPlotShown}))
    }


    render() {
        const {isPlotShown} = this.state
        const {globalContent} = this.props
        console.log(globalContent)
        const {title, id, completed} = globalContent
        const plotButton = (
            <button onClick={this.togglePlot}>
                {isPlotShown ? "Hide Plot" : "Show Plot"}
            </button>
        );

        const plot = "Lorem Ipsum";

        return(
            <div className="movie-detail col-sm-12 col-md-18">
                <p><strong>Title:</strong>{title}</p>
                <p><strong>User ID:</strong>{id}</p>
                <p><strong>Completed:</strong>{completed ? "YES" : "NO"}</p>
                <p><strong>Plot:</strong>{plotButton} {isPlotShown && plot} </p>

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