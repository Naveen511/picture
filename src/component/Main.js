import React from 'react';
import ReactDOM from 'react-dom';
import Splash from '../api/splash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class Main extends React.Component {
    state={images: []};
    onHandleSubmit = async data => {
        const response = await Splash.get('search/photos', {
            params: { query: data},
        });
        this.setState({images: response.data.results});
    }

    render() {
        return <div className="ui container">
            <SearchBar clickSubmit={this.onHandleSubmit}/>
            Founde {this.state.images.length} images
            <ImageList datapass = {this.state.images} />
            </div>
    }
}

export default Main;