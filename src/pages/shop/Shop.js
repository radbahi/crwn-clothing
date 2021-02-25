import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/Collection'
import React from 'react'
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import { Route } from 'react-router-dom'

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15175184#questions
// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15234798#questions/11444182
// ^ converted this into class component to get data from backend

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const collectionRef = firestore.collection('collections')
    //whenever collectionRef updates or code gets run for the first time, below will send us the array
    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionsSnapshotToMap(snapshot)
    })
  }

  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  }
}

export default ShopPage
