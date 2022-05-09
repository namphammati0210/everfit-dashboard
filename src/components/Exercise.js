import React from "react";
import styledComponents from "styled-components";
import { Draggable } from "react-beautiful-dnd";


const Container = styledComponents.div`
  flex: direction;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 2px solid lightgrey;
  border-radius: 7px;
  padding: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styledComponents.div`
  margin-left: auto; 
  margin-right: 0;
  margin-bottom: 10px;
  text-align: right;
  font-weight: bold;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Content = styledComponents.div`
  display: flex;
  justify-content: space-between;
`

const Description = styledComponents.div`
  text-align: right;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #95A6B7;
`


const Exercise = ( {exercise, index} ) => {
  return (
    <Draggable draggableId={exercise.id} index={index}>
      {(provided) => (
        <Container 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
            <Title> { exercise.content } </Title>
            <Content>
              <div style={{ color: '#919CAD' }}>{`${exercise.set}x`}</div>
              <Description>{exercise.description}</Description>
            </Content>
        </Container>
      )}
      
    </Draggable>
  )
}

export default Exercise;