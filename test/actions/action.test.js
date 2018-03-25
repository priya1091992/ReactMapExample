import * as actions from './../../src/actions/app.action.js'
import { column, mapData } from './../mockData/index'

describe('actions', () => {
  it('should set the columns of csv file', () => {
    const expectedAction = {
      type: actions.SET_COLUMN,
      column
    }
    expect(actions.setColumnData(column)).toEqual(expectedAction)
  })

  it('should set map data', () => {
    const expectedAction = {
      type: actions.SET_MAP,
      mapData
    }
    expect(actions.setMapData(mapData)).toEqual(expectedAction)
  })

  it('should reset all data of application', () => {
    const expectedAction = {
      type: actions.RESET,
    }
    expect(actions.resetApp()).toEqual(expectedAction)
  })
})
