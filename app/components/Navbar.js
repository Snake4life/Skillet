import React from 'react';
import {Link, History} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActions';
import {NavDropdown, MenuItem} from 'react-bootstrap';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  userNameClick(event) {
    event.preventDefault();
    console.log('XXXXX');
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();
    console.log(searchQuery);
    if (searchQuery) {
      NavbarActions.findVideo({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm.getDOMNode(),
        history: this.props.history
      });
    }
  }

  render() {
    var padStyle = {
      paddingTop: '3px',
      paddingBottom: '5px'
    };
    var profileLink = "/user/" + AuthStore.state.username;
    var yourimg = (
      <img src="../img/profileImage.png" height="27" width="27"></img>
    );
    if(AuthStore.state._user) {
      var loginList = (
        <ul className='nav navbar-nav navbar-right'>
          <li>
          <Link to='/upload' style={padStyle}>  <button className="btn btn-default nav-btn">
            Upload
            </button></Link>
            </li>
        <NavDropdown eventKey={3} title={yourimg} id="basic-nav-dropdown" onClick={this.userNameClick}>
          <MenuItem eventKey="1"><Link to={profileLink}>View Your Pofile</Link></MenuItem>
          <MenuItem eventKey="2">Likes</MenuItem>
          <MenuItem eventKey="3">Playlists</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Help</MenuItem>
          <MenuItem eventKey="5"><Link to="/logout">Logout</Link></MenuItem>
        </NavDropdown>
          </ul>
      );

    } else if(!AuthStore.state._user){

      var loginList = (
                <ul className='nav navbar-nav navbar-right'>
          <li>
          <Link to='/signup' style={padStyle}>  <button className="btn btn-default nav-btn">
            Upload
            </button></Link>
            </li>
          <li><Link to='/login'>Log In</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>

      </ul>
  );

    }
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            <span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
            </span>
            Skillit.tv
            <span className='badge badge-up badge-danger'>{this.state.onlineUsers}</span>
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
            <div className='input-group'>
              <input type='text' className='form-control' placeholder="Search..." value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery} />
              <span className='input-group-btn'>
                <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
              </span>
            </div>
          </form>
            {loginList}
        </div>
      </nav>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Navbar;
