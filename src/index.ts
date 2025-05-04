// idea
class PupItem {
  title: string;
  id: string;
  constructor(title: string) {
    this.title = title;
    this.id = "pup-" + Date.now().toString(16);
  }
  remove() {
    document.getElementById(this.id)?.remove();
  }
}

class Pup {
  pups: PupItem[] = [];
  constructor() {}

  createPup() {
    const p = new PupItem("alex");
    const pupContainer = document.createElement("div");
    pupContainer.textContent = p.title;
    pupContainer.id = p.id;

    const pups = document.createElement("div");
    pups.appendChild(pupContainer);
    console.log(pups, document.body);
    document.body.appendChild(pups);

    setTimeout(() => {
      p.remove();
    }, 2000);
  }
}

// wait document load
document.addEventListener("DOMContentLoaded", () => {
  console.log("dom");
  const pup = new Pup();
  pup.createPup();
});

window.onload = function () {
  console.log("load");
  console.log("Tudo completamente carregado");
};
