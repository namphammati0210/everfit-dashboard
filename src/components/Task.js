import React from "react";
import styledComponents from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container  = styledComponents.div`
  padding: 8px;
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  border-radius: 2px;
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
        </Container>
      )}
    </Draggable>
    
  )
}

export default Task