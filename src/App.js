import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import EverfitDashboard from './components/EverfitDashboard';
import { DragDropContext } from 'react-beautiful-dnd';
import intitialData from './initial-data';
import Column from './components/Column';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
  display: flex;
  
`

function App() {
  const [state, setState] = useState(intitialData);
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ state", state)

  const onDragEnd = (result) => {
    console.log("🚀 ~ file: App.js ~ line 13 ~ onDragEnd ~ result", result)
    const { destination, source, draggableId, type } = result;

    if(!destination) {
      return;
    }

    if( destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if(type === 'TASKS') {
      const start = state.columns[source.droppableId];
      const finish = state.columns[destination.droppableId];

      if(start.id === finish.id) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          taskIds: newTaskIds
        }

        setState({
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id] : newColumn
          }
        });

        return;
      }

      //Moving from one list to another
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds
      }

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      };

      setState({
        ...state,
        columns: {
          ...state.columns,
          [newStart.id] : newStart,
          [newFinish.id] : newFinish,
        }
      });
      return;
    }

    if( type === 'EXERCISES') {
      const start = state.tasks[source.droppableId];
      const finish = state.tasks[destination.droppableId];

      if(start.id === finish.id) {
        const newExerciseIds = Array.from(start.exerciseIds);
        newExerciseIds.splice(source.index, 1);
        newExerciseIds.splice(destination.index, 0, draggableId);
        
        console.log("🚀 ~ file: App.js ~ line 91 ~ onDragEnd ~ newExerciseIds", newExerciseIds)
        const newTask = {
          ...start,
          exerciseIds: newExerciseIds
        }

        setState({
          ...state,
          tasks: {
            ...state.tasks,
            [newTask.id] : newTask
          }
        });

        return;
      }

      //Moving from one list to another
      const startExerciseIds = Array.from(start.exerciseIds);
      startExerciseIds.splice(source.index, 1);
      const newStart = {
        ...start,
        exerciseIds: startExerciseIds
      }

      const finishExerciseIds = Array.from(finish.exerciseIds);
      finishExerciseIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        exerciseIds: finishExerciseIds
      };

      setState({
        ...state,
        tasks: {
          ...state.tasks,
          [newStart.id] : newStart,
          [newFinish.id] : newFinish,
        }
      });
      return;
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {state.columnOrder.map((columnId, index) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

          return <Column 
              key={column.id} 
              column={column} 
              tasks={tasks} 
              index={index}
              style={{ margin: '20px'}}
            />;
        })}
      </Container>
    </DragDropContext>
  );
}

export default App;
