import React, { useState } from 'react';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../src/Redux/actions/auth.action';
import { useRouter } from 'next/router'


const ResetPasswordConfirm = ({ reset_password_confirm }) => {

    const router = useRouter();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
        if (e.target.name == "re_new_password" && formData.new_password != e.target.value)
        {
            e.target.classList.add("bg-red-500") 
        } else {
            e.target.classList.remove("bg-red-500") 
        }
    }
        

    const onSubmit = e => {
        e.preventDefault();
        
        if (formData.new_password == formData.re_new_password)
        {
            //grabing the query parameters from url string
            const query = window.location.toString().split('/');
            const length = query.length;
            const uid = query[length-2]
            const token = query[length-1]

            reset_password_confirm(uid, token, new_password, re_new_password);
            setRequestSent(true);   
        }
    };

    if (requestSent) {
       router.push('/')
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={e => onSubmit(e)}>
            <div className=''>
                    <input
                        className=''
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div >
                    <input
                        className=''
                        type='password'
                        placeholder='Confirm New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='' type='submit' onClick={onSubmit}>Reset Password</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
