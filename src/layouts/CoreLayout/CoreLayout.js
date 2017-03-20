import React, { PropTypes as toBe } from 'react'
import Header from 'components/Header/Header'
import './CoreLayout.scss'
import 'styles/core.scss'
import FbApi from 'utils/FbApi';

export class CoreLayout extends React.Component {
  static propTypes = {
    children : toBe.element.isRequired
  };

  constructor(){
    super();
    this.state = { timestamp: null }
  }

  login = () =>{
    FbApi.login();
  }

  componentDidMount(){
    //FbApi.setUpdateFn(this.triggerUpdate);
    FbApi.setUpdateFn(() =>{
      this.setState({ timestamp: +new Date })
    });
    FbApi.updateLoginStatus();
  }

  renderNotLoggedIn(){
    return(<div>
            <button className="btn btn-primary" onClick={this.login}>
              Login with Facebook
            </button>
          </div>) ;
  }

  renderLoggedIn(){
      const { children }  = this.props; //children = this.props.children;
      const { timestamp } = this.state;
      return (
        <div className='container text-center'>
          <Header />
          <div className='core-layout__viewport'>
            {React.cloneElement(children, { timestamp } )}
          </div>
        </div>
      )

  }

  render(){
    return FbApi.isLoggedIn()
      ? this.renderLoggedIn()
      : this.renderNotLoggedIn();
  }

  //render () {
  //  const { children } = this.props;
  //  return (
  //    <div className='container text-center'>
  //      <Header />
  //      <div className='core-layout__viewport'>
  //        {children}
  //      </div>
  //    </div>
  //  )
  //}
}

export default CoreLayout
