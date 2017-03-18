/**
 * Created by alimov on 3/18/17.
 */
class FbApi{
  authResponse = null;
  me ={};
  permissions = {};
  photos = [];
  update = () => {};

  isLoggedIn(){
    return !!this.authResponse;
  }
  updateLoginStatus(){
    Fb.getLoginStatus((response) =>{
      if (response.status === 'connected'){
        this.authResponse = response.authResponse;
        this.update;
      }
    })
  }
}

export default new FbApi;
