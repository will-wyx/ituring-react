import InputSearch from '../components/InputSearch'
import PropTypes from 'prop-types'

export default function HeadNavSearch (props) {
  return (
    <li>
      <InputSearch placeholder={props.placeholder} className="pl-4" onSearch={props.onSearch}/>
    </li>
  )
}

HeadNavSearch.propTypes = {
  onSearch: PropTypes.func.isRequired
}
