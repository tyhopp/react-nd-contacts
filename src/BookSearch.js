import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'



class BookSearch extends React.Component {


// need constructor and super to scope 'this' properly inside function
constructor(props) {
  super(props);
}

  state = {
    query: '',
  }


	render () {

		// destructuring props so can be called without 'this.props'
	    const { books, changeShelf } = this.props

		return (

			/* search bar */
			<div>
	   			<div className="search-books">
		            <div className="search-books-bar">
		            	<Link to="/" className="close-search">Close</Link>
		            	<div className="search-books-input-wrapper">
		                	<input 
		                		type="text" 
		                		placeholder="Search by title or author"
		                		value={this.state.query}
		                		onChange={(event) => this.updateQuery(event.target.value)}
		                	/>
		              	</div>
		            </div>
		            <div className="search-books-results">
		            	<ol className="books-grid"></ol>
		            </div>
	          	</div>

	         
	          {/* bookshelves */}
	          	<div className="bookshelf">
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                    
	                	{books.map((book) => <Book key={book.id} book={book} /> )}
	                    
	                    </ol>
	                  </div>
	                </div>
	            
	            </div>

       )
	}
}

export default BookSearch

