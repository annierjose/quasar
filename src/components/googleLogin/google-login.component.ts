import { Component, Vue } from 'vue-property-decorator'
import './google-login.component.css'

@Component({
  template: require('./google-login.component.html')
})
export default class GoogleLoginComponent extends Vue {
  public GoogleAuth: any
  public isAuthorized: boolean = false
  public currentApiRequest: any

  public username: string = ''
  public user: object = {}

  public initClient(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.$getGapiClient().then(gapi => {
        console.log('gapii', gapi)
        gapi.client.init({
          'apiKey': 'AIzaSyAC7DtltZlBWSa3SP0Y914_IcAA30AFGvw',
          'clientId': '813252868868-l4c5tjs3e7dv15tb7cgg320qrf0gs8iv.apps.googleusercontent.com',
          'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
        })
        console.log('nulla')
        this.GoogleAuth = gapi.auth2.getAuthInstance();
        // Listen for sign-in state changes.
        this.GoogleAuth.isSignedIn.listen(this.updateSigninStatus);

        let user = this.GoogleAuth.currentUser.get();

        console.log('user', user)
        this.user = user
        resolve()
      }).catch(reason => {
        console.log('reason', reason)
        reject()
      })
    })

  }
  public updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      this.isAuthorized = true;
      if (this.currentApiRequest) {
        this.sendAuthorizedApiRequest(this.currentApiRequest);
      }
    } else {
      this.isAuthorized = false;
    }
  }
  sendAuthorizedApiRequest(requestDetails) {
    this.currentApiRequest = requestDetails;
    if (this.isAuthorized) {
      // Make API request
      // gapi.client.request(requestDetails)

      // Reset currentApiRequest variable.
      this.currentApiRequest = {};
    } else {
      this.GoogleAuth.signIn();
    }
  }

  public handleAuthClick() {
    if (this.GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked 'Sign out' button.
      this.GoogleAuth.signOut();
    } else {
      // User is not signed in. Start Google auth flow.
      this.GoogleAuth.signIn().then(value => {
        console.log('value', value)
      }).catch(reason => {
        console.log('reason', reason)
      });
    }
  }

  public  revokeAccess() {
    this.GoogleAuth.disconnect();
  }

  public mounted () {
    this.initClient()
  }
}
