// var mySet = new Set();
let mySet = [];
const key = "key";
let LSValue = JSON.parse(localStorage.getItem(key));
let tabURL = [];

function render() {
  $("#ul-el").text("");
  data = JSON.parse(localStorage.getItem(key));
  data.forEach(function (value) {
    $("#ul-el").append(`<li><a href="${value}">${value}</a></li>`);
  });
}

// recall localStorage
if (LSValue) {
  mySet = LSValue;
  render();
}

// Save Tab
$("#tab-btn").click(function () {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      tabURL = tabs[0].url;
      if (!mySet.includes(tabURL)) {
        mySet.push(tabURL);
        data = JSON.stringify(mySet);
        localStorage.setItem(key, data);
        render();
      } else {
        // Do nothing
      }
    }
  );
});

// Save Input
$("#input-btn").click(function () {
  let save = $("#input-el").val();
  if (mySet.includes(save)) {
  } else {
    mySet.push(save);
    $("#input-el").val("");
    data = JSON.stringify(mySet);
    localStorage.setItem(key, data);
    render();
  }
});

//Delete Tab
$("#delete-btn").click(function () {
  $("#ul-el").text("");
  $("#input-el").val("");
  localStorage.clear();
  mySet = [];
});
