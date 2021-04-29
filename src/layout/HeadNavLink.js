import { Link } from 'react-router-dom'

export default function HeadNavLink (props) {
  return (
    <li className="text-white hover:bg-indigo-900 cursor-pointer">
      <Link to={props.to} className="block h-full w-full px-3">{props.children}</Link>
    </li>
  )
}
