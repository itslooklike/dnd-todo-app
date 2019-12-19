import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${({ isDragging }) => (isDragging ? 'yellow' : 'white')};
`

export default function Task(props) {
  const { task, index } = props
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => {
        console.log('Draggable:snapshot', snapshot)
        return (
          <Container
            isDragging={snapshot.isDragging}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {task.content}
          </Container>
        )
      }}
    </Draggable>
  )
}
