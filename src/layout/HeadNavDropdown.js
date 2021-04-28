import { Link } from 'react-router-dom'
import './HeadNavDropdown.css'
import React from 'react'

export default class HeadNavDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    return (
      <li className="text-white hover:bg-indigo-900 cursor-pointer relative">
        <span className="block h-full w-full px-3 select-none">{this.props.children}</span>
        <ul
          className="absolute bg-indigo-50 text-black min-w-px-160 py-1.5 border border-black border-opacity-10 rounded mt-px-1 leading-none shadow-lg">
          {
            this.props.items.map((item, index) => {
              return (
                <li key={index} className="hover:bg-indigo-100">
                  <Link to={item.to} className="block py-2.5 px-5">{item.text}</Link>
                </li>
              )
            })
          }
        </ul>
      </li>
    )
  }
}
