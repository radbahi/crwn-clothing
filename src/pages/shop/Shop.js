import { Component } from 'react'
import SHOP_DATA from './ShopData.js'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

export default class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  }

  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}
