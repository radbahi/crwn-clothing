import './Collection.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selectors'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h3 className='title'>{title}</h3>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15175872#questions
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
