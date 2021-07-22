import Consumer from "fusion:consumer"


@Consumer
class TestingGlobalContent {
    constructor(props) {
        this.props = props;
    }

    render() {
        const {globalContent} = this.props
        return globalContent

    }
}


export default TestingGlobalContent