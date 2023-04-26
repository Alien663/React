import { connect } from 'react-redux'
import Sample from '../Component/Sample'
import { GetSample } from '../Action'

const mapStateToProps = (state) => ({
    data: state.Sample.data,
})

const mapDispathToProps = {
    getData: GetSample,
}

export default connect(mapStateToProps, mapDispathToProps)(Sample)