const html = Number(prompt('Jaká je vaše úroveň HTML? (0 až 100)'));
const css = Number(prompt('Jaká je vaše úroveň CSS? (0 až 100)'));
const javascript = Number(
  prompt('Jaká je vaše úroveň Javascriptu? (0 až 100)'),
);

const updateSkill = (id, scale) => {
  const skillElm = document.getElementById(id);
  const progressElm = skillElm.querySelector('.skill__progress');
  const valueElm = skillElm.querySelector('.skill__value');
  valueElm.textContent = `${scale} / 100`;
  progressElm.style.width = `${scale}%`;
};

updateSkill('skill1', html);
updateSkill('skill2', css);
updateSkill('skill3', javascript);
