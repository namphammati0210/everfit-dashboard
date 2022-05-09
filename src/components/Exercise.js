import React from "react";
import styledComponents from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styledComponents.div`
  flex: direction;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const Exercise = ( {exercise, index} ) => {
  return (
    <Draggable draggableId={exercise.id} index={index}>
      {(provided) => (
        <Container 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          { exercise.content }
        </Container>
      )}
      
    </Draggable>
  )
}

export default Exercise;