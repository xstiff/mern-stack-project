import {useSelector} from 'react-redux'
import { Input } from '../../components/form/input/input'
import { Button } from '../../components/form/button/button'



export const RightProfile = () => {
    const { id, name, email }  = useSelector(state => state.auth).userInfo
    const profileSelector = useSelector(state => state.profile)
    const currentPage = profileSelector.current_page

    const handleSend = (e) => {
        e.preventDefault()
        console.log("Password change")
    }

    if (currentPage === "Profile") return(
        <>
            <p>Your profile id: <b>{id}</b></p>
            <p>Your profile name: <b>{name}</b></p>
            <p>Your profile email: <b>{email}</b></p>
            <p>Your account creation date: <b>YYYY-mm-dd</b></p>

        </>
    )

    if (currentPage === "Change password") return(
        <form onSubmit={handleSend}>
            <Input type="password" label="Old password" />
            <Input type="password" label="New password" />
            <Input type="password" label="Repeat new password" />
            <Button type='submit' text='Confirm' clickFunc={() => {}} />        
        </form>
    )

    if (currentPage === "Delete account") return(
        <>
            <p>Request deletion of your account by pressing button below:</p>
            <Button type='submit' text='Request' clickFunc={() => console.log("account deletion")} />    
            
        </>
    )

    if (currentPage === "Change name") return(
        <form onSubmit={handleSend}>
            <Input type="text" label="Old name" />
            <Input type="text" label="New name" />
            <Input type="text" label="Repeat new name" />
            <Button type='submit' text='Confirm' clickFunc={() => {}} />        
        </form>
    )

    return(
    <p>{currentPage}</p>
    )
}