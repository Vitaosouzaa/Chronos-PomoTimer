import { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { MainTemplate } from '../../templates/MainTemplate';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';
import { TrashIcon } from 'lucide-react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { AlternativeButton } from '../../components/AlternativeButton';
import { showMessage } from '../../adapters/showMessage';

import styles from './styles.module.css';

export function History() {
  const { state, dispatch } = useTaskContext();

  const [confirmClearHistory, setConfirmClearHistory] = useState(false);

  const hasTask = state.tasks.length > 0;

  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
    if (!confirmClearHistory) return;

    setConfirmClearHistory(false);
    dispatch({ type: TaskActionTypes.RESET_STATE });
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    return () => {
      showMessage.dissmiss();
    };
  }, []);

  useEffect(() => {
    document.title = 'Histórico - PomoTimer';
  }, []);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    showMessage.dissmiss();
    showMessage.confirm('Tem certeza que deseja fazer isso?', confirmation => {
      setConfirmClearHistory(confirmation);
    });
  }

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>
            <span>History</span>
            {hasTask && (
              <span className={styles.smallButton}>
                <AlternativeButton
                  icon={<TrashIcon />}
                  color='red'
                  aria-label='Apagar todo o histórico'
                  title='Apagar histórico'
                  onClick={handleResetHistory}
                />
              </span>
            )}
          </Heading>
        </Container>

        <Container>
          {hasTask && (
            <div className={styles.responsiveTable}>
              <table>
                <thead>
                  <tr>
                    <th
                      onClick={() => handleSortTasks({ field: 'name' })}
                      className={styles.tableThSort}
                    >
                      Tarefa ↕️
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: 'duration' })}
                      className={styles.tableThSort}
                    >
                      Duração ↕️
                    </th>
                    <th
                      onClick={() => handleSortTasks({ field: 'startDate' })}
                      className={styles.tableThSort}
                    >
                      Data ↕️
                    </th>
                    <th>Status</th>
                    <th>Tipo</th>
                  </tr>
                </thead>

                <tbody>
                  {sortTaskOptions.tasks.map(task => {
                    const taskTypeDictionary = {
                      workTime: 'Foco',
                      shortBreakTime: 'Descanso curto',
                      longBreakTime: 'Descanso longo',
                    };

                    return (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.duration}min</td>
                        <td>{formatDate(task.startDate)}</td>
                        <td>{getTaskStatus(task, state.activeTask)}</td>
                        <td>{taskTypeDictionary[task.type]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          {!hasTask && (
            <h3 style={{ textAlign: 'center' }}>
              Ainda não existem tarefas criadas
            </h3>
          )}
        </Container>
      </MainTemplate>
    </>
  );
}
