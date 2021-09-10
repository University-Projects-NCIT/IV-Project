import { GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux'
import { useMutation } from 'react-query'
import { addProfileImage } from '../../apis/productapi';

const GooglesignIn: React.FC = ({googleAuthenticate} : any) => {


  const getId = (id, imageUrl) => {
    mutation.mutate({userId: id, imageUrl})
  }


   const mutation = useMutation(addProfileImage, {
    onSuccess: () => console.log("Added successfully "),
    onError: (err) => console.log(err)
  })

  const responseGoogle = (response) => {
    
    console.log("resposne", response)


    
    if (typeof response.accessToken != "undefined")
    {
      console.log("resposne ", response.profileObj.imageUrl)
      const imageUrl = response.profileObj.imageUrl
      googleAuthenticate(response.accessToken, imageUrl, getId)
    }

    

  }
  return (
    <>
      <GoogleLogin
          clientId="868430702423-gk55l9271hl75gotk2hh3t89u2etnmhj.apps.googleusercontent.com"
          buttonText="Login with Google Account"
          disabled={false}
          className="w-full"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
    </>
  )
}

const mapStateToProps = state=> ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  access: state.auth.access
})

export default connect(mapStateToProps)(GooglesignIn)