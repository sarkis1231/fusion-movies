import PropTypes from "fusion:prop-types"
import Consumer from "fusion:consumer"


@Consumer
class Section {
    constructor(props) {
        console.log(props)
        this.props = props;

        this.fetchContent({
            section: {
                source: 'section',
                query: {
                    id: '1'
                }
            },
        })
    }

    render () {
        const {section} = this.state || {};
        console.log("our state: ", this.state)
        if(!section) {
            return null
        }

        return {
            id: section.id,
            title:  section.title,
        }
    }

}

Section.propTypes = {
    customFields: PropTypes.shape({
        section: PropTypes.string.tag({
            label: 'Section ID',
            defaultValue: "1"
        }),
    })
}

export default Section;