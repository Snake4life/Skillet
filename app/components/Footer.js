import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopCharacters();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var listyle = {
      display: 'inline-block',
      paddingRight: '15px',
      paddingTop: '15px',
      paddingBottom : '5px'
    };

    var aStyle = {
      textDecoration: 'none',
      fontSize: '10px'
    };

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <ul>
                <li style={listyle}>
                  <a stlye={aStyle} href='https://skillet.co/aboutus'>About Us</a>
                </li>
                <li style={listyle}>
                  <a stlye={aStyle} href='https://skillet.co/contact'>Contact</a>
                </li>
                <li style={listyle}>
                  <a stlye={aStyle} href='https://skillet.co/advertise'>Advertise</a>
                </li>
                <li style={listyle} className="pull-right">© 2016 Skillet, LLC
                </li>
               </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
