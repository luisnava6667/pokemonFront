import axios from 'axios'

export function getAllPokemons() {
  return async function (dispatch) {
    const { data } = await axios.get('http://localhost:3001/api/pokemons')
    return dispatch({
      type: 'GET_ALLPOKEMONS',
      payload: data
    })
  }
}
export function getAllTypes() {
  return async function (dispatch) {
    const { data } = await axios.get('http://localhost:3001/api/types')
    return dispatch({
      type: 'GET_ALLTYPES',
      payload: data
    })
  }
}
export function getDetail(id) {
  return async function (dispatch) {
    const { data } = await axios.get(`http://localhost:3001/api/pokemon/${id}`)
    return dispatch({
      type: 'GET_DETAIL',
      payload: data
    })
  }
}
export function postPokemon(payload) {
  return async function () {
    const { data } = await axios.post(
      'http://localhost:3001/api/pokemons',
      payload
    )
    return data
  }
}
export function filterPokemonsByType(payload) {
  return {
    type: 'FILTER_BY_TYPE',
    payload
  }
}
export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload
  }
}
export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
}
export function orderById(payload) {
  return {
    type: 'ORDER_BY_ID',
    payload
  }
}

export function createPokemons(payload) {
  return async function () {
    const { data } = await axios.post(
      'http://localhost:3001/api/createPokemons',
      payload
    )
    return data
  }
}
export function orderByAttack(payload) {
  return {
    type: 'ORDER_BY_ATTACK',
    payload
  }
}
export function getNamePokemons(name) {
  return async function (dispatch) {
    const { data } = await axios.get(
      `http://localhost:3001/api/pokemons?name=${name}`
    )
    return dispatch({
      type: 'GET_NAMEPOKEMONS',
      payload: data
    })
  }
}
