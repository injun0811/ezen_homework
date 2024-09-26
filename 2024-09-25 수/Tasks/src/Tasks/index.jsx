import { useRef, useState } from 'react';

import { TaskBox } from './style';
import TaskBar from '../TaskBar';
import TaskContent from '../TaskContent';

const Tasks = () => {
    const [tasks, setTasks] = useState([]); // 전체
    const [cnt, setCnt] = useState(0); // 총 개수
    const [task, setTask] = useState({
        // 선택
        title: '타이틀',
        content: '기본 타이틀',
        dateAt: '2024-09-25',
        timeAt: '18:17',
        isSelect: true,
    });
    const no = useRef(1);

    //추가
    const onAdd = () => {};

    //선택
    const selectTask = () => {};

    //삭제
    const onDel = () => {};

    return (
        <TaskBox>
            <TaskBar />
            <TaskContent />
        </TaskBox>
    );
};

export default Tasks;
