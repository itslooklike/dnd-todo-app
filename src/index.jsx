import React from 'react'
import ReactDOM from 'react-dom'
import { DragDropContext } from 'react-beautiful-dnd'
import '@atlaskit/css-reset'
import Column from './Column'

import initialData from './initialData'

const App = () => {
  const [value, setValue] = React.useState(initialData)
  const onDragEnd = React.useCallback(
    (result) => {
      const { destination, source, draggableId } = result
      if (!destination) return
      if (destination.droppableId === source.droppableId && destination.index === source.index)
        return

      const column = value.columns[source.droppableId]
      console.log('column', column)
      const newTaskIds = Array.from(column.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
      const newColumn = { ...column, taskIds: newTaskIds }
      const newState = {
        ...value,
        columns: {
          ...value.columns,
          [newColumn.id]: newColumn,
        },
      }
      setValue(newState)
    },
    [value]
  )

  return (
    <DragDropContext
      onDragStart={() => console.log('onDragStart')}
      onDragUpdate={() => console.log('onDragUpdate')}
      onDragEnd={onDragEnd}
    >
      {value.columnOrder.map((columnId) => {
        const column = value.columns[columnId]
        const tasks = column.taskIds.map((taskId) => value.tasks[taskId])
        return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
