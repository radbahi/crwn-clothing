import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/Collection'
import React from 'react'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors'

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15190700#questions
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

//https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15175184#questions
// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15234798#questions/11444182
// ^ converted this into class component to get data from backend

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionFetching } = this.props
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
