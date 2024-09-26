import { useEffect } from 'react';
import { TaskFormBox } from './style';

const TaskForm = () => {
    const changeInput = (e) => {};
    return (
        <TaskFormBox>
            <div>
                <input type='text' className='title' name='title' />

                <textarea className='content' name='content'></textarea>
            </div>
        </TaskFormBox>
    );
};

export default TaskForm;
