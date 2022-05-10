import React from "react";
import styledComponents from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";


const Container  = styledComponents.div`
  border: 5px solid #fff;
  width: 100%;
  min-height: 100vh;
  // min-width: vw;
  
  display: flex;
  flex-direction: column;
  background: ${({isToday}) => isToday ? '#ddd' :   '#F3F5F8' };
`;
const Title  = styledComponents.h3`
  padding: 8px
  
`;
const TaskList  = styledComponents.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;

const Date = styledComponents.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid gray;
  text-align: center;
  background: #fff;
  margin-right: 10px;
  padding: 7px;
  font-weight: 400
`

const Header = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Column = ({ column, tasks, index, day, isToday }) => {

  return (
    // <div>
    //   <Title>{column.title}</Title>
      <Container isToday={isToday}>
        <Header>
          <Title>{column.title} </Title>
          <Date>{day.split('/').splice(1, 1)}</Date>
        </Header>
        
        
        <Droppable droppableId={column.id} key={index} type="TASKS">
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
    // </div>
    
  )
}

export default Column;