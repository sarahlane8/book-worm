import React from 'react'
import { getLists } from '../../util/api-calls'
import List from '../List/List'
import Navbar from '../Navbar/Navbar'
import { Bookshelf } from '../Bookshelf/Bookshelf'
import Details from '../Details/Details'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { AppState, SingleBook } from '../../util/types'
import Error from '../Error/Error'

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      list: [],
      error: '',
      favorites: [],
      currentBook: {}
    }
  }

  setBookDetails = ( details: SingleBook ) => {
    this.setState({ currentBook: details })
    //send currentBook to Details
  }

  componentDidMount = () => {
    getLists()
      .then(data => {
        this.setState({ list: data })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  addToFavorites = (book: SingleBook, isFavorited: boolean) => {
    if(!isFavorited) {
      let array = this.state.favorites.filter(favoriteBook => favoriteBook.id !== book.id)
      this.setState( { favorites: array } )
    } else {
      if (!this.state.favorites.find(favoriteBook => favoriteBook.id === book.id)) {
        this.setState({ favorites: [...this.state.favorites, book]})
      }
    }
  }

  render() {
    return (
      <main className="App">
        <Navbar />
        {this.state.error && <Error message={this.state.error}/>}
        <Switch>

          <Route
            exact path='/'
            render={ () => {
              return(
                !this.state.list.length  
                  ? !this.state.error && <h2 className='loading-msg'>Loading...</h2>
                  : <List list={this.state.list} />
              )
            }}
          />

          <Route
            exact path='/bookshelf/:queryName'
            render={ ({ match }) => {
              const { queryName } = match.params
              if (queryName !== 'favorites') {
                return (
                  <Bookshelf
                    setBookDetails={this.setBookDetails}
                    queryID={queryName}
                    favoriteBooks={this.state.favorites}
                    addToFavorites={this.addToFavorites}
                  />
                )
              } else {
                const header = this.state.favorites.length ? "Favorites!" : "You haven't favorited any books yet!"
                return (
                  <Bookshelf
                    setBookDetails={this.setBookDetails}
                    favoritesHeader={header}
                    favoriteBooks={this.state.favorites}
                    addToFavorites={this.addToFavorites}
                  />
                )
              }
            }}
          />

          <Route exact path='/bookshelf/details/:id'
            render={ () => {
              return (
                <Details 
                info={this.state.currentBook}
                />
              )
            }
            }
          />
           

          <Route
            render={() => <Error message='Sorry, page not found!' />}
          />

        </Switch>
      </main>
    )
  }
}

export default App;
