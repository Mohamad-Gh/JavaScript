let count = 0;
let prv_count = 0;

function increment() {
  count++;
}

function save() {
  prv_count = count;
  count = 0;
}

$("#increment-btn").click(function () {
  increment();
  $("#count").text(count);
});
$("#save-btn").click(function () {
  save();
  $("#prv-count").text(prv_count);
  $("#count").text(count);
});
