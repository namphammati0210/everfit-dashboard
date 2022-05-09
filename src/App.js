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
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    if( destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    console.log("🚀 ~ file: App.js ~ line 34 ~ onDragEnd ~ start", start)
    const finish = state.columns[destination.droppableId];
    console.log("🚀 ~ file: App.js ~ line 36 ~ onDragEnd ~ finish", finish)

    if(start.id === finish.id) {
      console.log('hello1')
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

    console.log('hello2')
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
    console.log("🚀 ~ file: App.js ~ line 68 ~ onDragEnd ~ newFinish", newFinish)

    setState({
      ...state,
      columns: {
        ...state.columns,
         [newStart.id] : newStart,
         [newFinish.id] : newFinish,
      }
    });


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
            />;
        })}
      </Container>
    </DragDropContext>
  );
}

export default App;
