// Global
let datar = new Datar();
let ruang = new Ruang();
let perintah = new Intruction();
let execPerintah = false;

let penyelesaian;
let nomorSoal = 0;
let backNext = document.querySelectorAll(".seconds");
let outputText = document.querySelector(".outputText");
let currentPilihan = document.getElementById("pilihan");
let darkIcon = document.getElementById("dark");
let bangunObject = {};
let bangunDipilih;
let question;
let answer = [];
let isAnswer = false;

function infoClick(set) {
  let element = document.getElementById("teksInfo");
  document.getElementById("info").classList[set ? "remove" : "add"]("hidden");
  element.innerHTML = utils.storeInfo;
  element.classList.remove(...utils.storeInfoClass);
}

function darkMode() {
  let theme = localStorage.theme === "dark" ? "light" : "dark";
  darkIcon.classList.toggle("fa-sun");
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", theme);
}

function darkModeLoad() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  if (localStorage.theme === "dark") darkIcon.classList.toggle("fa-sun");
}

function lihatPenyelesaian() {
  let result = bangunObject.result.rumus;
  let text = result.replace(/\n/gi, "<br>");
  let element = document.getElementById("teksInfo");
  text = text.replace(/\s/gi, "&nbsp;");
  element.innerHTML = text;
  element.classList.add(...utils.storeInfoClass);
  document.getElementById("info").classList.remove("hidden");
}

function basicFunction() {
  if (!execPerintah) {
    document.getElementById("soal").innerHTML =
      "Pilih opsi yang ingin kamu pilih (Luas/Keliling/Volume)";
    execPerintah = true;
  }
  // Change text button
  let lists = utils.number;
  let elements = document.querySelectorAll(".buttonRun");
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = lists[i];
    elements[i].classList.remove("text-biruMuda", "text-pink-600");
    elements[i].onclick = () => mainFunction(elements[i]);

    switch (lists[i]) {
      case "C":
        elements[i].classList.add("text-pink-600");
        elements[i].onclick = clearFunction;
        break;
      case "Luas Permukaan":
        elements[i].classList.add("text-biruMuda");
        elements[i].onclick = () => luasKelilingFunction("luas");
        break;
      case "Keliling":
        elements[i].classList.add("text-pink-600");
        elements[i].onclick = () => luasKelilingFunction("keliling");
        if (bangunDipilih.includes("Ruang")) {
          elements[i].onclick = () => luasKelilingFunction("volume");
          elements[i].innerHTML = "Volume";
        }
        break;
      case "Back":
        elements[i].classList.add("text-biruMuda");
        elements[i].onclick = backFunction;
        break;
      case ".":
        elements[i].classList.add(
          "text-xl",
          "md:text-2xl",
          "dark:text-gray-200"
        );
        break;
      case "=":
        elements[i].classList.add("text-green-500", "text-xl", "md:text-3xl");
        elements[i].onclick = equalFunction;
        break;
      default:
        elements[i].classList.add("text-black", "text-lg");
        elements[i].classList.add("dark:text-gray-200");
        break;
    }
  }
}

function luasKelilingFunction(opsi) {
  let backNext = document.querySelectorAll(".seconds");
  outputText.classList.remove("hidden");
  backNext.forEach((el, i) => (el.onclick = () => backNextFunction(i)));
  let text =
    currentPilihan.innerText.includes("Keliling") ||
    currentPilihan.innerText.includes("Volume")
      ? "Luas Permukaan"
      : bangunDipilih.includes("Ruang")
      ? "Volume"
      : "Keliling";

  // clear
  document.getElementById("history").innerHTML = "";
  document.getElementById("output").innerHTML = 0;
  document.getElementById("selesai").classList.add("hidden");
  nomorSoal = 0;
  isAnswer = false;
  answer = [];

  // execute
  if (currentPilihan.innerText.includes("|")) {
    clearFunction();
    if (currentPilihan.innerText.toLowerCase().includes(opsi)) return;
    let replacement = currentPilihan.innerText.replace(/\|.+/, ` | ${text}`);
    jalankanRumus(text);
    return (currentPilihan.innerHTML = replacement);
  }
  if (opsi === "keliling") {
    jalankanRumus("Keliling");
    currentPilihan.innerHTML += " | Keliling";
  } else if (opsi === "luas") {
    jalankanRumus("Luas Permukaan");
    currentPilihan.innerHTML += " | Luas Permukaan";
  } else if (opsi === "volume") {
    jalankanRumus("Keliling");
    currentPilihan.innerHTML += " | Volume";
  }
}

function jalankanRumus(opsi) {
  let bangun = bangunDipilih.split("\n")[0].replace(/\s/g, "").toLowerCase();
  let soal = document.getElementById("soal");
  let opt = {
    "Luas Permukaan": "luas",
    Keliling: "keliling",
    Volume: "keliling",
  };
  let rumus = perintah[bangun.toLowerCase()]()[opt[opsi]];
  bangunObject.object = perintah[bangun.toLowerCase()]();
  bangunObject.opsi = opt[opsi];
  question = rumus;
  soal.innerHTML = rumus[nomorSoal];
  pageNumber();
}

function mainFunction(input) {
  if (isAnswer) return;
  if (!currentPilihan.innerHTML.includes("|")) {
    let soal = document.getElementById("soal");
    soal.classList.add("text-red-500", "dark:text-red-500");

    setTimeout(() => {
      soal.classList.remove("text-red-500", "dark:text-red-500");
    }, 1000);
    return;
  }
  let output = document.getElementById("output");
  let text = output.innerText;
  pageNumber();
  if (text.length === 1 && text === "0") {
    if (input.innerText === "0" || input.innerText === ".") return;
    return (output.innerHTML = input.innerText);
  } else if (text.length === 7) return;
  output.innerHTML += input.innerText;
}

function backFunction() {
  document.getElementById("bodyCalc").innerHTML = utils.store;
  currentPilihan.innerText = "";
  backNext.forEach((el) => el.classList.add("hidden"));
  outputText.classList.add("hidden");
  document.getElementById("history").innerHTML = "";
  document.getElementById("selesai").classList.add("hidden");
  nomorSoal = 0;
  execPerintah = false;
  answer = [];
  question = null;
  isAnswer = false;
  main();
}

function clearFunction() {
  if (!currentPilihan.innerHTML.includes("|")) {
    let soal = document.getElementById("soal");
    soal.classList.add("text-red-500", "dark:text-red-500");

    setTimeout(() => {
      soal.classList.remove("text-red-500", "dark:text-red-500");
    }, 1000);
    return;
  }
  document.getElementById("output").innerHTML = "0";
  document.getElementById("history").innerHTML = "";
  document.getElementById("soal").innerHTML = question[0];
  document.getElementById("selesai").classList.add("hidden");
  nomorSoal = 0;
  pageNumber();
  answer = [];
  isAnswer = false;
}

function backNextFunction(index) {
  // 1 => true, 0 => false | 1 => next, 0 => back
  let soal = document.getElementById("soal");
  let output = document.getElementById("output");
  let textArray = bangunObject.object.history[bangunObject.opsi];
  let textPush = `${textArray[nomorSoal]}: ${output.innerText}`;

  if (index) {
    answer.push(textPush);
    nomorSoal++;
  } else {
    answer.pop();
    nomorSoal--;
  }

  pageNumber(); // hidden backnext
  soal.innerHTML = question[nomorSoal]; // set question
  output.innerHTML = 0;
  document.getElementById("history").innerHTML = answer.join("<br>");
}

function equalFunction() {
  if (isAnswer) return;
  if (
    !currentPilihan.innerHTML.includes("|") ||
    bangunObject.object[bangunObject.opsi].length - 1 !== answer.length
  ) {
    let soal = document.getElementById("soal");
    soal.classList.add("text-red-500", "dark:text-red-500");

    setTimeout(() => {
      soal.classList.remove("text-red-500", "dark:text-red-500");
    }, 1000);
    return;
  }

  let textArray = bangunObject.object.history[bangunObject.opsi];
  let textPush = `${textArray[nomorSoal]}: ${output.innerText}`;
  output.innerHTML = 0;
  answer.push(textPush);
  document.getElementById("history").innerHTML = answer.join("<br>");

  let option = {
    "Luas Permukaan": "luas",
    Volume: "volume",
    Keliling: "keliling",
  };
  let point = currentPilihan.innerText.split(" | ");
  let bangun = point[0].split(" ").join("").toLowerCase();
  let opsi = option[point[1]];

  let resultAnswer = answer.map((x) => parseFloat(x.split(" ").slice(-1)));
  let result;
  try {
    result = datar[bangun.toLowerCase()](...resultAnswer)[opsi];
  } catch (error) {
    result = ruang[bangun.toLowerCase()](...resultAnswer)[opsi];
  }
  output.innerHTML = result.hasil.toLocaleString();
  bangunObject.result = result;
  document.getElementById("selesai").classList.remove("hidden");
  isAnswer = true;

  let backNext = document.querySelectorAll(".seconds");
  backNext.forEach((el) => el.classList.add("hidden"));
  document.getElementById("soal").innerHTML = "Pertanyaan telah dijawab !";
}

function pageNumber() {
  let backNext = document.querySelectorAll(".seconds");
  let back = backNext[0].classList;
  let next = backNext[1].classList;

  if (question.length === 1) {
    back.add("hidden");
    next.add("hidden");
  } else if (!nomorSoal) {
    back.add("hidden");
    next.remove("hidden");
  } else if (nomorSoal === question.length - 1) {
    back.remove("hidden");
    next.add("hidden");
  } else {
    back.remove("hidden");
    next.remove("hidden");
  }
}

function main() {
  document.getElementById("output").innerHTML = 0;
  document.querySelectorAll(".buttonRun").forEach((el) => {
    el.addEventListener("click", () => {
      if (el.innerHTML.includes("(")) {
        let dipilih = el.innerText;
        bangunDipilih = dipilih;
        currentPilihan.innerText = dipilih.split("\n")[0];
      }

      basicFunction();
    });
  });
}

function keyboardType(e) {
  if (isAnswer) return;
  if (!currentPilihan.innerHTML.includes("|")) return;
  let number = e.key;
  let output = document.getElementById("output");
  let text = output.innerText;
  if (number !== "." && isNaN(number)) return;
  pageNumber();
  if (text.length === 1 && text === "0") {
    if (number === "0" || number === ".") return;
    return (output.innerHTML = number);
  } else if (text.length === 7) return;

  output.innerHTML += number;
}

main();
darkModeLoad();
addEventListener("keypress", keyboardType);
