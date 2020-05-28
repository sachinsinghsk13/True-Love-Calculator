/// <reference path="jquery-3.5.1.js"/>

function combineBothNameWithLove(a, b) {
  return (a + "Loves" + b).toUpperCase();
}

function getCharacterCountString(str) {
  let finalStr = "";
  for(let i = 0; i < str.length; i++) {
    let charCount = 0;
    let character = str.charAt(i);
    for (let j = 0; j < str.length; j++) {
        if (character == str.charAt(j))
            charCount++;
    }
    finalStr += charCount;
  }
  return finalStr;
}

function reduceCountString(str) {
    if (str.length == 2)
        return str;
    else {
        let finalString = "";
        for (let i = 0; i < str.length / 2; i++) {
            let rearIndex = str.length - i - 1;
            if (i == rearIndex)
                finalString += parseInt(str.charAt(i));
            else
                finalString += parseInt(str.charAt(i)) + parseInt(str.charAt(rearIndex));
        }
        return reduceCountString(finalString);
    }
}
function calculateLove(yourname, crushname) {
  let combinedName = combineBothNameWithLove(yourname, crushname);
  let characterCountString = getCharacterCountString(combinedName);
  return reduceCountString(characterCountString);
}

$(function () {

    $('#name, #crushname').focus(() => {
        $("#result").html("");
    })

  $("#calculate-button").click(function () {
    let name = $("#name").val();
    let crushname = $("#crushname").val();
    if (!name || !crushname) {
      alert("Please Provide your name and your crush name");
    } else {
        $('#result').html(`<img src="heart.png"/>`)
        setTimeout(() => {
            let love = calculateLove(name, crushname);
        $('#result').html(`Love Between <b>You</b> And <b>${crushname}</b> is <b>${love}%</b>`);
        }, 1500);
    }
  });
});
