async function getPatterns() {
  const response = await fetch("./assets/data.json");
  const data = await response.json();

  console.log("Ref patterns loaded from data.json");
  console.log(data);

  return data;
}

async function init() {
  KanjiCanvas.refPatterns = await getPatterns();

  console.log("Ref patterns loaded");
  console.log(KanjiCanvas.refPatterns);
}

init();