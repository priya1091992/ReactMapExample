export const SET_COLUMN='SET_COLUMN';
export const SET_MAP='SET_MAP';
export const RESET='RESET';

export function setColumnData(column) {
  return {
    type: 'SET_COLUMN',
     column
  };
}

export function setMapData(mapData) {
  return {
    type: 'SET_MAP',
     mapData
  };
}

export function resetApp() {
  return {
    type: 'RESET'
  };
}
