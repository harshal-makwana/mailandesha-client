import React, { useState } from 'react';
import { GoogleLogin, } from 'react-google-login';

const GoogleLoginButton: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);

  const loadGoogleScript = () => {
    if (scriptLoaded) return;
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };

  const handleLogin = () => {
    loadGoogleScript();
  };

//   const handleSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
//     console.log('Google login success', response);
//   };

  const handleFailure = (error: any) => {
    console.error('Google login error', error);
  };

  return (
    <div>
      <button style={{color:"red", backgroundColor:"white",padding:"10px 20px" ,border:"1px red solid",width:"100%", fontSize:"15px"}} onClick={handleLogin}>GOOGLE</button>
      {scriptLoaded && (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          buttonText="Google"
        //   onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
};

export default GoogleLoginButton;
