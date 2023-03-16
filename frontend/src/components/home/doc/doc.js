
import { MidHeader } from '../../headers/midheader'
import { SocialIcon } from 'react-social-icons';
import './doc.scss'
import { BigHeader } from '../../headers/bigheader';




export const Documentation = () => {
    const pStyle = {
        textIndent: '50px',
        
    }

    const center = {
        display: 'flex',
        marginTop: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
    }
    

    return(
        <div className='documentation-wrapper'>
            
            <div style={center}>
                <SocialIcon url="https://github.com/xstiff" style={
                    {
                        marginRight:'20px'
                    }
                } />
                <SocialIcon url="https://www.linkedin.com/in/dominik-jaworski-07b99523a" />
            </div>
            <BigHeader text="How it works?"/>
            <MidHeader  text="Backend"/>
            <section>
                
                <p style={pStyle}>The <b>Goal API</b> allows users to create, read, update, and delete goals, while the <b>User API</b> handles user authentication and authorization.
                Each goal in the database has a unique ID, a title, a description, and a completion status.
                The User API handles user-related features such as <u>login</u>, <u>registration</u>, and <u>whoami</u>.
                When a user logs in or registers, the API generates a JSON Web Token (JWT) that is returned to the frontend for future use.
                <br />
                <br />
                Source code, as well as a simple documentation can be found <b><a href="https://github.com/xstiff/mern-stack-project" target={'_blank'}>under this link</a></b>. </p>
            </section>

            <MidHeader  text="Frontend"/>
            <section>
                <p style={pStyle}>
                The frontend of my project is responsible for making requests to the backend APIs. It is built with technologies such as React and Redux,
                which allow for a fast and responsive user interface.</p>
                <p style={pStyle}>
                Each request made by the frontend is secured with a <u>JWT</u>, which is verified by the backend. If the JWT is valid, the request is processed; otherwise,
                the frontend receives an error message. The frontend also handles token expiration by refreshing the token every 120 seconds and each time user makes an action.
                </p>
            </section>

            <MidHeader  text="Note"/>
            <section>
                <p style={pStyle}>
                At my project, I acknowledge that using LocalStorage to store tokens is not the most secure option for user authentication.
                While I have implemented measures to ensure the safe handling of tokens, I recognize that there are still potential risks associated with this approach.
                </p>
                <p style={pStyle}>
                Moving forward, I am committed to exploring more secure alternatives to LocalStorage, such as using HTTP-only cookies to manage user authentication.
                HTTP-only cookies provide an added layer of security by preventing client-side JavaScript from accessing cookie data.
                </p>
            </section>
        </div>
    )
}