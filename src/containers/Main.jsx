import { connect } from 'react-redux'
import Main from '../components/Main'
import { GetSimilarPDF, GetSchool, SetSimilarPDFLoaded } from '../actions'

const mapStateToProps = (state) => ({
    data: state.PDFdata.data,
    data_isLoaded : state.PDFdata.data_isLoaded,
    searched : state.PDFdata.searched,
    maxPage: state.PDFdata.maxPage,
    school: state.PDFdata.school,
    school_isLoaded : state.PDFdata.school_isLoaded
})

const mapDispathToProps = {
    getData: GetSimilarPDF,
    getSchool: GetSchool,
    setSimilarPDFLoaded : SetSimilarPDFLoaded,
}

export default connect(mapStateToProps, mapDispathToProps)(Main)
