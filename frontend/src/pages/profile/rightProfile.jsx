import {useSelector, useDispatch} from 'react-redux'
import { Input } from '../../components/form/input/input'
import { Button } from '../../components/form/button/button'
import { toggleDelete } from '../../redux/profile/profileSlice'


export const RightProfile = () => {
    const { id, name, email, createdAt }  = useSelector(state => state.auth).userInfo
    const profileSelector = useSelector(state => state.profile)
    const currentPage = profileSelector.current_page
    const dispatch = useDispatch()

    const date = new Date(createdAt)
    const handleSend = (e) => {
        e.preventDefault()
        console.log("Password change")
    }

    if (currentPage === "Profile") return(
        <>
            <p>Your profile id: <b>{id}</b></p>
            <p>Your profile name: <b>{name}</b></p>
            <p>Your profile email: <b>{email}</b></p>
            <p>Your account creation date: <b>{`${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`}</b></p>

        </>
    )

    if (currentPage === "Change password") return(
        <form onSubmit={handleSend}>
            <Input type="password" label="Old password"  autoComplete="password"/>
            <Input type="password" label="New password"  autoComplete="off"/>
            <Input type="password" label="Repeat new password"  autoComplete="off"/>
            <Button type='submit' text='Confirm' clickFunc={() => console.log("password change")} />        
        </form>
    )

    if (currentPage === "Delete account") return(
        <>
            <p>Request deletion of your account by pressing button below:</p>
            <Button type='submit' text='Request' clickFunc={() => dispatch(toggleDelete(true))} />    
            
        </>
    )

    if (currentPage === "Change name") return(
        <form onSubmit={handleSend}>
            <Input type="text" label="Old name" autoComplete="off"/>
            <Input type="text" label="New name" autoComplete="off" />
            <Input type="text" label="Repeat new name"  autoComplete="off"/>
            <Button type='submit' text='Confirm' clickFunc={() => {}} />        
        </form>
    )

    return(
    <p>{currentPage}</p>
    )
}