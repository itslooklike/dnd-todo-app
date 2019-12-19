const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: '1 kfshjdjhfskjfsdkh' },
    'task-2': { id: 'task-2', content: '2 kfshjdjhfskjfsdkh' },
    'task-3': { id: 'task-3', content: '3 kfshjdjhfskjfsdkh' },
    'task-4': { id: 'task-4', content: '4 kfshjdjhfskjfsdkh' },
    'task-5': { id: 'task-5', content: '5 kfshjdjhfskjfsdkh' },
    'task-6': { id: 'task-6', content: '6 kfshjdjhfskjfsdkh' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6'],
    },
  },
  columnOrder: ['column-1'],
}

export default initialData
