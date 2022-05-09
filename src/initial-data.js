const intitialData = {
  exercies: {
    'ex-1': {id: 'ex-1', content: 'Bench Press Medium BLA BLA BLA', set: 3, description: '50 lb x 5,60 lb x 5,70lb'},
    'ex-2': {id: 'ex-2', content: 'Exercise B', set: 1, description: '40 lb x 10'},
    'ex-3': {id: 'ex-3', content: 'Exercise C', set: 1, description: '40 lb x 10'},
  },
  tasks: {
    'task-1': { id: 'task-1', content: 'Arm day', exerciseIds: ['ex-1', 'ex-2']},
    'task-2': { id: 'task-2', content: 'Leg day', exerciseIds: ['ex-3']},
    'task-3': { id: 'task-3', content: 'Abs day', exerciseIds: []},
    'task-4': { id: 'task-4', content: 'Cardio day', exerciseIds: []},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'MON',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      title: 'TUE',
      taskIds: ['task-3']
    },
    'column-3': {
      id: 'column-3',
      title: 'WED',
      taskIds: []
    },
    'column-4': {
      id: 'column-4',
      title: 'THU',
      taskIds: []
    },
    'column-5': {
      id: 'column-5',
      title: 'FRI',
      taskIds: []
    },
    'column-6': {
      id: 'column-6',
      title: 'SAT',
      taskIds: []
    },
    'column-7': {
      id: 'column-7',
      title: 'SUN',
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