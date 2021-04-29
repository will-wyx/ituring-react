import React from 'react'
import FontAwesome from 'react-fontawesome'
import './InputSearch.css'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export default class InputSearch extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSearch()
  }

  handleFocus = () => {
    console.log('focus')
  }
  handleBlur = () => {
    console.log('blur')
  }

  render () {
    return (
      <form className={clsx('input-search-container', this.props.className)}
            onSubmit={this.handleSubmit}>
        <input type="text"
               className="h-full block rounded bg-indigo-200 focus:bg-indigo-50 outline-none pl-3 pr-8 w-full"
               placeholder={this.props.placeholder}
               onFocus={this.handleFocus}
               onBlur={this.handleBlur}
        />
        <button className="absolute right-0 top-0 h-8 leading-8 px-3 text-indigo-900 opacity-30 hover:opacity-100">
          <FontAwesome name="search"/>
        </button>
      </form>
    )
  }
}
