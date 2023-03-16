import './goalForm.scss';
import { Input } from '../../form/input/input';
import { Button } from '../../form/button/button';
import { MidHeader } from '../../headers/midheader';
import { useState } from 'react';

export const GoalForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault();
        

    }
    


    return <div className="goal-form-wrapper">
            <form onSubmit={(e) => handleSubmit(e)}>
                <MidHeader text={'Add new goal'} color={'black'}/>
                <Input placeholder='Title' value={
                    title
                } inputFunc={
                    (e) => {
                        setTitle(e.target.value);
                    }
                }/>
                <Input placeholder='Description' value={description} inputFunc={
                    (e) => {
                        setDescription(e.target.value);
                    }
                } />
                <Button type='submit' text='Add goal' clickFunc={()=>{}}/>
            </form> 
        </div>
    
}
