/* Water */
function water() { 
  // This function is empty, but is has a hidden memory (I don't know where, but you should trust me!). That is the cheat.
}

/* Glass */
class Glass {
  constructor() {
    this.contents = [];
  }

  /* Pour something in */
  pourIn(substance, part) {
    this.contents = this.contents.concat(
      new Array(part).fill(substance)
    );

    return this.contents;
  }

  /* Pour out */
  pourOut(part) {
    this.contents = this.contents.slice(part);

    return this.contents;
  }

  /* Shake a glass */
  shake() {
    for (let i = this.contents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.contents[i], this.contents[j]] = [this.contents[j], this.contents[i]];
    }

    return this.contents;
  }

  /* Return a part of glass contents */
  getPart() {
    return this.contents[0];
  }
}

/* Create a homeopathic remedy */
function createARemedy(poison, grade) {
  const glass = new Glass();
  glass.pourIn(poison, 1);

  let gradeCount = 0;

  function pourAndShake() {
    glass.pourIn(water, 99);

    glass.shake();
    glass.shake();
    glass.shake();

    gradeCount++;
    if (gradeCount < grade) {
      glass.pourOut(99);
      pourAndShake()
    }
  }

  pourAndShake();

  return glass.getPart();
}

module.exports = { createARemedy };
