import React from "react";
import styledComponents from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import intitialData from "../initial-data";
import { Droppable } from "react-beautiful-dnd";
import Exercise from "./Exercise";

const Container  = styledComponents.div`
  padding: 20px;
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  border-radius: 2px;
`;

const ExerciseList  = styledComponents.div`
  padding: 20px;
  
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
          {task.content}

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