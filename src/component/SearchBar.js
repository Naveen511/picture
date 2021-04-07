import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
    state={searchText:  ''};
    onInputChange = (e) => {
        this.setState({ searchText: e.target.value});
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.clickSubmit(this.state.searchText);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className= "field">
                        <input type="text" value= {this.state.searchText} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;