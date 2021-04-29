import { Link } from 'react-router-dom'
import './HeadNavDropdown.css'
import React from 'react'
import clsx from 'clsx'

export default class HeadNavDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClick = (e) => {
    e.stopPropagation()
    this.setState({
      open: true
    })
  }

  handleDocumentClick = () => {
    this.setState({
      open: false
    })
  }

  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleDocumentClick, false)
  }

  render () {
    return (
      <li className="text-white hover:bg-indigo-900 cursor-pointer relative">
        <span className="block h-full w-full px-3 select-none" onClick={this.handleClick}>{this.props.children}</span>
        <ul
          className={clsx('list', this.state.open && 'open')}>
          {
            this.props.items.map((item, index) => {
              if (item.divider) {
                return <li className="h-px my-2.5 bg-gray-300"/>
              } else {
                return (
                  <li key={index} className="hover:bg-indigo-100">
                    <Link to={item.to} className="block py-2.5 px-5">{item.text}</Link>
                  </li>
                )
              }
            })
          }
        </ul>
      </li>
    )
  }
}
