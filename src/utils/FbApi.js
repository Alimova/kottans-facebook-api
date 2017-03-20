/**
 * Created by alimov on 3/18/17.
 */
class FbApi{
  authResponse = null;
  me ={};
  permissions = {};
  photos = [];
  update = () => {};

  setUpdateFn(fn){
    this.update = fn;
  }

  isLoggedIn(){
    return !!this.authResponse;
  }
  updateLoginStatus(){
    FB.getLoginStatus(this.processResponse)
  }

  login(){
    FB.login(this.processResponse)
  }
  processResponse = (response) => {
    if (response.status === 'connected'){
      this.authResponse = response.authResponse;
      this.update();
      this.updateMe();
      this.getPhotos();
    }
  }

  updateMe(){
    FB.api('/me', (response) =>{
      this.me = response;
      this.update();
    })
  }

  getPhotos(){
    FB.api('/me', (response) =>{
      this.photos = response;
      this.update();
    })
  }
}

export default new FbApi;
