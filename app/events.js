const getFormFields = require('./../lib/get-form-fields.js')
const api = require('./api.js')

const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api.signUp(formDataObj).then(ui.onSignUpSuccess).catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api.signIn(formDataObj)
    .then(user => ui.onSignInSuccess(user))
    .catch(ui.onSignInFailure)
}
const onChangePw = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api
    .changePw(formDataObj)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onSignOut = function () {
  api.signOut().then(ui.onSignOutSuccess).catch(ui.onSignOutFailure)
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  const formDataObject = getFormFields(formDataRaw)
  api.updateProfile(formDataObject)
    .then(ui.onUpdateProfileSuccess)
    .catch(ui.onUpdateProfileFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onUpdateProfile
}
