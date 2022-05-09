import React from "react";
import styledComponents from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const Container  = styledComponents.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align:center;
  background: #F3F5F8;
`;
const Title  = styledComponents.h3`
  padding: 8px
  
`;
const TaskList  = styledComponents.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({ column, tasks, index }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} key={index}>
        {(provided) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => 
              <Task 
                key={task.id} 
                task={task} 
                index={index}
              /> 
            )}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  )
}

export default Column;