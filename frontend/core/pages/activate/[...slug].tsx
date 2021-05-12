import React, { useState } from 'react';
import { connect } from 'react-redux';
import { verify } from '../../src/Redux/actions/auth.action';
import { useRouter } from 'next/router'


const Activate = React.memo(({ verify }: any) => {

    // Next router to get all query values 
    const router = useRouter();

    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = router.query.slug[0]
        const token = router.query.slug[1]
        verify(uid, token);
        setVerified(true);
      };

      if (verified) {
          router.push({
              pathname: '/',
              query: {}
          })
      }

      return (
          <div className='container'>
              <div 
                  className='d-flex flex-column justify-content-center align-items-center'
              >
                  <h1>Verify your Account:</h1>
                  <button
                      onClick={verify_account}
                      type='button'
                      className='btn btn-primary'
                  >
                      Verify
                  </button>
              </div>
          </div>
      );
});

export default connect(null, { verify })(Activate);
