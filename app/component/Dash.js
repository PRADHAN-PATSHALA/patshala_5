import React from 'react'
import {ID, account} from '../appwrite'


const Dash = () => {


    const Logout = async () => {
        try {
            await account.deleteSession('current');
            setUser(null);
        } catch (error) {
            return <p className='text-red-600'>{error}</p>
        }
    } 



  return (
      <>
         <div className='text-white'>
              <h1>Loged in</h1>
              <button onClick={Logout}>Logout</button>
         </div>

      </>
  )
}

export default Dash
