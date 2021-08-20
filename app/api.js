const config = require('./config.js')
const store = require('./store.js')

const signUp = function (dataObj) {
  // console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'post',
    data: dataObj
  })
}

const signIn = function (dataObj) {
  // console.log(dataObj)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'post',
    data: dataObj
  })
}

const changePw = function (dataObj) {
  // console.log(dataObj, store.user.token)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'patch',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: dataObj
  })
}

const updateProfile = function (dataObj) {
  // console.log(dataObj, store.user.token)
  return $.ajax({
    url: config.apiUrl + '/update-profile',
    method: 'patch',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: dataObj
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'delete',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newPiece = function (dataObj) {
  return $.ajax({
    url: config.apiUrl + '/pieces',
    method: 'post',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: dataObj
  })
}

const getPieces = function () {
  return $.ajax({
    url: config.apiUrl + '/pieces',
    method: 'get',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const updatePiece = function (dataObj) {
  return $.ajax({
    url: config.apiUrl + '/pieces/' + store.pieceId,
    method: 'patch',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: dataObj
  })
}

const deletePiece = function () {
  return $.ajax({
    url: config.apiUrl + '/pieces/' + store.pieceId,
    method: 'delete',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut,
  updateProfile,
  newPiece,
  getPieces,
  updatePiece,
  deletePiece
}
