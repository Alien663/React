import { connect } from 'react-redux'
import Sample from '../components/Sample'
import { GetSample } from '../actions'

const mapStateToProps = (state) => ({
    data: state.Sample.data,
})

const mapDispathToProps = {
    getData: GetSample,
}

export default connect(mapStateToProps, mapDispathToProps)(Sample)