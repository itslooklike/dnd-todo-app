import React from 'react'
import ReactDOM from 'react-dom'

import initialData from './initialData'

const App = () => {
  const [value, setValue] = React.useState(initialData)
  return 'hi'
}

ReactDOM.render(<App />, document.getElementById('root'))
