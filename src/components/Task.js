import React from "react";
import styledComponents from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { BsThreeDots } from 'react-icons/bs';
import intitialData from "../initial-data";
import { Droppable } from "react-beautiful-dnd";
import Exercise from "./Exercise";

const Container  = styledComponents.div`
  padding: 10px;
  border: 2px solid lightgrey;
  margin-bottom: 5px;
  border-radius: 10px;
  background: #fff;
  min-height: 50px;
`;

const Header = styledComponents.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const Title = styledComponents.p`
  text-transform: uppercase;
  margin: 0;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  color: #5A57CB;
`

const ExerciseList  = styledComponents.div`
  
  
`;

const Task = ({task, index}) => {
  return (
    <Draggable draggableId={task.id} index={index} key={task.id}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Header>
            <Title>{task.content}</Title>
            <BsThreeDots />
          </Header>
          

          <Droppable droppableId={task.id} type="EXERCISES">
            {(provided) => (

              <ExerciseList 
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {task.exerciseIds.map((exerciseId, index) => {
                  const exercise = intitialData.exercies[exerciseId];
                  return <Exercise exercise={exercise} index={index}/>
                })}

                {provided.placeholder}
              </ExerciseList>
              
            )}
          </Droppable>
            

        </Container>
      )}
    </Draggable>
    
  )
}

export default Task