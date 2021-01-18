import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory-selectors'
import MenuItem from '../menu-item/MenuItem.js'
import './Directory.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {/* you can use spread to have the other props passed into MenuItem as their names. they get passed in like title={title} */}
    {sections.map(({ id, ...theRestOfTheState }) => (
      <MenuItem key={id} {...theRestOfTheState} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps, null)(Directory)
