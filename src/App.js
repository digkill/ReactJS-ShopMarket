import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setBooks} from "./actions/books";

class App extends Component {

    render() {
        const {books} = this.props.books
        const {setBooks} = this.props;
        const newBooks = [{
            id: 0,
            title: 'sadwqd32ewf3e2f43gf4r3g'
        }];
        return (<>
            {books[0].title}
            <button onClick={setBooks.bind(this, newBooks)}>Кнопка</button>
        </>)
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
