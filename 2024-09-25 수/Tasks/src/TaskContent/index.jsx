import TaskForm from '../TaskForm';
import { TaskContentBox, TaskMemo } from './style';

const TaskContent = () => {
    /*
            <TaskMemo>
                <h2>메모가 없습니다.</h2>
                <h3>새로운 메모를 추가해주세요.</h3>
            </TaskMemo>
        */
    return (
        <TaskContentBox>
            <TaskForm />
            <p>날짜/시간</p>
        </TaskContentBox>
    );
};

export default TaskContent;
