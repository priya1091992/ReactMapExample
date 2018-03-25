export const column = [
  {id: 'col1', value: 'state'},
  {id: 'col1', value: 'city'},
  {id: 'col1', value: 'address'},
  {id: 'col1', value: 'zip'},
  {id: 'col1', value: 'category'},
]

export const mapData = [
  {lat:987 , lng:98.879 ,category: 'a'},
  {lat:987 , lng:98.879 ,category: 'a'},
  {lat:987 , lng:98.879 ,category: 'b'},
  {lat:987 , lng:98.879 ,category: 'b'},
]

export const groupdExpectedData = {
  'a': [
    {lat:987 , lng:98.879 ,category: 'a'},
    {lat:987 , lng:98.879 ,category: 'a'}
  ],
  'b': [
    {lat:987 , lng:98.879 ,category: 'b'},
    {lat:987 , lng:98.879 ,category: 'b'},
  ]
}
