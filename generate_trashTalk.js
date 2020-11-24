// generate_trash_talk.js

// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define trashTalk function
function generateTrashTalk(options) {

  //  Trash talk collection
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // alert non-value
  if (options === 0) {
    return "請選擇職業"
  }

  // create a collection to store things user picked up
  const trashWords = (sample(task[options]) + sample(phrase))

  return trashWords
}
// invoke generatePassword function 
module.exports = generateTrashTalk