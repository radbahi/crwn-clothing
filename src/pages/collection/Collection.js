import './Collection.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selectors'

const CollectionPage = ({ match }) => {
  return (
    <div className='collection-page'>
      <h3>Collection pAGE</h3>
    </div>
  )
}
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15175872#questions
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
