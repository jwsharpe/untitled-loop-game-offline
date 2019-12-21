const instruments = document.querySelector("#instruments ul");

function switchInstrument(event) {
  if (event.target.dataset.channel) {
    if (instruments.querySelector(".instrument_selected")) {
      instruments.querySelector(".instrument_selected").className = "";
    }
    event.target.className = "instrument_selected";
    APP.currentInstrumentID = +event.target.dataset.channel;
  }
}
instruments.addEventListener("click", switchInstrument);
