import TaskList from '../TaskList';
import { TaskBarBox } from './style';

const TaskBar = () => {
    return (
        <TaskBarBox>
            <h2> 할일 정리 </h2>
            <TaskList />
            <button className='btn'>+</button>
        </TaskBarBox>
    );
};

export default TaskBar;
