import React from 'react'
import ReactDOM from 'react-dom'
import { DragDropContext } from 'react-beautiful-dnd'
import '@atlaskit/css-reset'
import Column from './Column'

import initialData from './initialData'

const App = () => {
  const [value, setValue] = React.useState(initialData)

  return (
    <DragDropContext
      onDragStart={() => console.log('onDragStart')}
      onDragUpdate={() => console.log('onDragUpdate')}
      onDragEnd={() => console.log('onDragEnd')}
    >
      {value.columnOrder.map((columnId) => {
        const column = value.columns[columnId]
        const tasks = column.tasksIds.map((taskId) => value.tasks[taskId])
        return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
