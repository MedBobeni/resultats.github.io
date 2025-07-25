let data = [];

fetch('resultats.json')
  .then(res => res.json())
  .then(json => {
    data = json;
  });

function chercher() {
  const numero = document.getElementById("numero").value.trim();
  const resultat = data.find(el => el.numero === numero);
  const box = document.getElementById("resultat");

  if (resultat) {
    const decisionClass = resultat.decision === "ناجح" ? "success" : "fail";
    box.innerHTML = `
      <h2>${resultat.nom}</h2>
      <p><strong>المسابقة|دخول الإعدادية</strong> </p>
      <p><strong>القرار:</strong> <span class="${decisionClass}">${resultat.decision}</span></p>
      <p><strong>المعدل:</strong> ${resultat.note}</p>
      <p><strong>المدرسة:</strong> ${resultat.ecole}</p>
      <p><strong>المركز:</strong> ${resultat.centre}</p>
      <p><strong>المقاطعة:</strong> ${resultat.commune}</p>
      <p><strong>الولاية:</strong> ${resultat.wilaya}</p>
    `;
  } else {
    box.innerHTML = `<p class="fail">رقم التسجيل غير موجود</p>`;
  }
}
