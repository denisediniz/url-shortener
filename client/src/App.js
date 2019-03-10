import React, { Component } from 'react';
import axios from 'axios';
// Import Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
// Main css
import './App.css';

class App extends Component {
  state = {
    id: null,
    url: null,
    originalUrl: ''
  }

  componentDidMount() {
    // Auto initialize all the things in materialize
    M.AutoInit();
  }

  handleSubmit = value => e => {
    e.preventDefault();
    e.target.reset();
    axios.post('/api/shorturl/new', {
      original_url: value
    }).then(res => {
      if(res.data.error) {
        this.setState({
          id: null,
          url: res.data.error,
          originalUrl: ''
        });
      } else {
        this.setState({
          id: res.data.short_url,
          url: res.data.original_url,
          originalUrl: ''
        });
      }
    });
  }

  render() {
    return (
      <div className="container valign-wrapper center-align" style={{height: '100vh'}}>

        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit(this.state.originalUrl)}>
            <h1>Shortened URL Generator</h1>
            <div className="row">
              <div className="input-field col s12">
                <input id="url" type="text" className="validate" required onChange={e => this.setState({ originalUrl: e.target.value })} value={this.state.originalUrl} />
                <label htmlFor="url">URL to be shortened</label>
              </div>
              <div className="col s12">
                <button className="btn waves-effect waves-light" type="submit">GENERATE<i className="material-icons right">send</i></button>
              </div>
            </div>
          </form>
          <div className="col s12 flow-text">
              <p className={(this.state.id === null) ? '' : 'hide'}>
                {(this.state.url === null) ? 'Your shortened URL will be here' : this.state.url}
              </p>
              <p className={`scale-transition scale-out ${ (this.state.id === null) ? '' : 'scale-in' }`}>
                <a className={(this.state.id === null) ? 'hide' : ''} href={`${process.env.REACT_APP_API_URL}/api/shorturl/${this.state.id}`} title={this.state.url} target="_blank" rel="noopener noreferrer">{`${process.env.REACT_APP_API_URL}/api/shorturl/${this.state.id}`}</a>
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
