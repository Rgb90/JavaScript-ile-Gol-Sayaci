let scoreA = 0;
let scoreB = 0;

/* tanımlamayınca sayı artırmaya çalışırken NaN çıktı */

function increaseScore1() {
  scoreA++;
  document.getElementById("scoreA").innerHTML = scoreA;
}

function decreaseScore1() {
  if (scoreA > 0) {
    scoreA--;
    document.getElementById("scoreA").innerHTML = scoreA;
  }
}

function increaseScore2() {
  scoreB++;
  document.getElementById("scoreB").innerHTML = scoreB;
}

function decreaseScore2() {
  if (scoreB > 0) {
    scoreB--;
    document.getElementById("scoreB").innerHTML = scoreB;
  }
}

function changeName1() {
  document.getElementById("teamName").innerHTML = prompt(
    "Takımın adını giriniz."
  );
}

function changeName2() {
  document.getElementById("teamNameTwo").innerHTML = prompt(
    "Takımın adını giriniz."
  );
}

/*  function functionFive() {
   document.getElementById("scoreA").innerHTML = prompt(
     "Gol sayısını giriniz."
   );
 }

 Yukarıdaki gibi yapınca harf de kabul ediyor. Bize sadece sayı lazım.
 Eğer sayı olursa doğru. Değilse uyarı verecek
*/

/* function writeScore1() {
  let score = prompt("Gol sayısını giriniz.");
  score = Number(score);
  if (score) {
    document.getElementById("scoreA").innerHTML = score;
  } else {
    alert("Lütfen sayı giriniz.")
  }
}    */

/* üstteki ilk yaptığım. aşağıdaki 0 ın altındaki sayıları da
kabul etmeyecek şekilde bir çözüm */

const writeScore1 = () => {
  scoreA = prompt("Gol sayısını giriniz.");
  if (isNaN(scoreA) || +scoreA < 0) {
    return alert("Lütfen sayı giriniz.");
  }
  document.getElementById("scoreA").innerHTML = scoreA;
}


const writeScore2 = () => {
  scoreB = prompt("Gol sayısını giriniz.");
  if (isNaN(scoreB) || +scoreB < 0) {
    return alert("Lütfen sayı giriniz.");
  }
  document.getElementById("scoreB").innerHTML = scoreB;
}

