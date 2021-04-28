import { Link } from 'react-router-dom'
import './LinkButton.css'

export default function LinkButton (props) {
  return (
    <Link to={props.to}
          className="block text-white bg-indigo-700 hover:bg-indigo-600 px-3 h-8 leading-8 rounded btn-shadow">{props.children}</Link>
  )
}
