import React from 'react';
import EditProfile from '../../pages/editProfilePage/editProfile';
import './editProfileComp.css'
import profilePic from '../../assets/DesktopIconsJPG/ben-parker-OhKElOkQ-1.jpg'

const EditProfileComponent = () => {
    return(
        
        <div className = 'signupForm'>
            {/* <h1>SIGN UP FORM</h1> */}
            <div className = 'profilePic'>

                <img id = 'profileImage' src = {profilePic} ></img>
                <p style = {{marginLeft: '45%', marginTop: '2px', fontSize: '20px', color:'blue' }}>Change Profile Pic</p>
            </div>

            <div className = 'fillupForm'>
                    <form className = 'FormField'>
                        <div className = 'form-group'>
                            <label className = 'FormField__Label' htmlFor = 'uname'>User Name</label>
                            <input type = 'text' id = 'uname' className = 'FormField__Input' placeholder = 'Enter your user name' name = 'uname' />
                        </div>
                        <div className = 'form-group'>
                            <label className = 'FormField__Label' htmlFor = 'name'>Name</label>
                            <input type = 'text' id = 'name' className = 'FormField__Input' placeholder = 'Enter your name' name = 'name' />
                        </div>
                        <div className = 'form-group'>
                            <label className = 'FormField__Label' htmlFor = 'bio'>Bio</label>
                            <input type = 'text' id = 'bio' className = 'FormField__Input' placeholder = 'Enter your bio' name = 'bio' />
                        </div>
                        <div className = 'form-group'>
                            <label className = 'FormField__Label' htmlFor = 'location'>Location</label>
                            <input type = 'text' id = 'location' className = 'FormField__Input' placeholder = 'Enter your location' name = 'location' />
                        </div>
                        <div className = 'form-group'>
                            <label className = 'FormField__Label' htmlFor = 'proffession'>Proffession</label>
                            <input type = 'text' id = 'profession' className = 'FormField__Input' placeholder = 'Enter your profession' name = 'profession' />
                        </div>
                        <div className = 'form-group'>
                            <label className = 'FormField__Label' htmlFor = 'genre'>Genre</label>
                            <input type = 'text' id = 'genre' className = 'FormField__Input' placeholder = 'Enter your genre' name = 'genre' />
                        </div>
                        <div className = 'submit-button'>
                            <button className = 'submit'>
                                SAVE PROFILE
                            </button>

                        </div>

                    </form>

            </div>
        </div>
        )
}

export default EditProfileComponent;