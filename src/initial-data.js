const intitialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Arm day'},
    'task-2': { id: 'task-2', content: 'Leg day'},
    'task-3': { id: 'task-3', content: 'Abs day'},
    'task-4': { id: 'task-4', content: 'Cardio day'},
  },
  columns: {
    
    'column-1': {
      id: 'column-1',
      title: 'Monday',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      title: 'Tuesday',
      taskIds: ['task-3', 'task-4']
    },
    'column-3': {
      id: 'column-3',
      title: 'Wednesday',
      taskIds: []
    },
    'column-4': {
      id: 'column-4',
      title: 'Thursday',
      taskIds: []
    },
    'column-5': {
      id: 'column-5',
      title: 'Friday',
      taskIds: []
    },
    'column-6': {
      id: 'column-6',
      title: 'Saturday',
      taskIds: []
    },
    'column-7': {
      id: 'column-7',
      title: 'Sunday',
      taskIds: []
    }
  },
  
  columnOrder: [
    'column-1',
    'column-2',
    'column-3',
    'column-4',
    'column-5',
    'column-6',
    'column-7',
  ]
}

export default intitialData;