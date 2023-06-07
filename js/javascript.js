const formMain = document.getElementById('new-element')
formMain.addEventListener('submit', function (e) {
  e.preventDefault()})
  
  const objectInputField = document.getElementById('inputfield')
  const retrievedObject = objectInputField.value
  const newObject = {
    inputfield: retrievedObject}
  console.log('Oggetto aggiunto', newObject)

  let newObjectCard = document.createElement ('div')
  newObjectCard.classList.add('objectcard')
  newObjectCard.innerHTML = `
  <p> ${retrievedObject} <p>
  <button>Elimina</button>
  `
  const savedObjectsDiv = document.getElementById('saved-objects')
  savedObjectsDiv.appendChild(newObjectCard)