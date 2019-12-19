import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 8px;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  ${({ isDraggingOver }) => isDraggingOver && 'background-color: grey;'}
`

export default function Column(props) {
  const { column, tasks } = props
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => {
          console.log('Droppable:snapshot', snapshot)
          return (
            <TaskList
              isDraggingOver={snapshot.isDraggingOver}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index}></Task>
              ))}
              {provided.placeholder}
            </TaskList>
          )
        }}
      </Droppable>
    </Container>
  )
}
