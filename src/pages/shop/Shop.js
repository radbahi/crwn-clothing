import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/Collection'
import React from 'react'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop-actions'

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15190700#questions
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15175184#questions
// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15234798#questions/11444182
// ^ converted this into class component to get data from backend

class ShopPage extends React.Component {
  state = { loading: true }
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')
    //whenever collectionRef updates or code gets run for the first time, below will send us the array

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
