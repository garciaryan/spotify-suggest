import axios from 'axios';

const accessToken = () => {
  if (this.$store.state.loggedIn === true){
    let clientId = process.env.VUE_APP_CLIENT_ID,
      code = this.$store.state.code,
      secret = process.env.VUE_APP_CLIENT_SECRET;

    axios.post('https://accounts.spotify.com/api/token', {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'http:/localhost:8080/callback',
      client_id: clientId, 
      client_secret: secret 
    }, {withCredentials: true}).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  } else {
    console.log('not logged in');
  }
}

export default {
  accessToken
}