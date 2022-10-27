
// slider js logic

const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

// numberInput.addEventListener('input', handleInputChange)


// const empty = "",
let uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lCase = "abcdefghijklmnopqrstuvwxyz",
number = "0123456789",
symbol = "$ù*:!;,=-*/";

const pLength = document.getElementById("p-length"),
upperCase = document.getElementById("p-uppercase"),
lowerCase = document.getElementById("p-lowercase"),
pNumber = document.getElementById("p-number"),
pSymbol = document.getElementById("p-symbol"),
submit = document.getElementById("submit"),
password = document.getElementById("password"),
copy = document.getElementById("copy");

submit.addEventListener("click",(e)=> {
e.preventDefault();

let initialPassword = "";

//ADD Character if option is checked
upperCase.checked? (initialPassword += uCase) : "";
lowerCase.checked? (initialPassword += lCase) : "";
pNumber.checked? (initialPassword += number) : "";
pSymbol.checked? (initialPassword += symbol) : "";

password.value = generatePassword(pLength.value, initialPassword)
})


function generatePassword(l, initialPassword) {
let pass = "";

for(let i = 0 ; i<l ; i++){
    pass += initialPassword.charAt(
        Math.floor(Math.random() * initialPassword.length)
    )
}
return pass;
}

copy.addEventListener("click", () => {
if(password.value == ""){
    alert("Please genearte the password")

}else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard")
}
})

// chech the security level

const check = document.querySelectorAll('input[type=checkbox]');
console.log(check);

function checking () {

    let checkboxes = document.querySelectorAll('input[name="checked"]:checked');
    let values = 0;

    checkboxes.forEach(() => {
        values+=1;
    });
    console.log(values);

    //modifying rectangle background according to values

    const rect1 = document.querySelector(".tooWeak"),
    rect2 = document.querySelector(".weak"),
    rect3 = document.querySelector(".medium"),
    rect4 = document.querySelector(".high"),
    title = document.querySelector(".stContainer_sub_title");

    if (values==1){
      rect1.style.backgroundColor = "#F64A4A";
      title.innerHTML= "TOO WEAK"
    }
    
    if (values==2){
      rect1.style.backgroundColor = "#FB7C58";
      rect2.style.backgroundColor = "#FB7C58";
      title.innerHTML= "WEAK"
    }

    if (values==3){
      rect1.style.backgroundColor = "#F8CD65";
      rect2.style.backgroundColor = "#F8CD65";
      rect3.style.backgroundColor = "#F8CD65";
      title.innerHTML= "NORMAL"
    }

    if (values==4){
      rect1.style.backgroundColor = "#A4FFAF";
      rect2.style.backgroundColor = "#A4FFAF";
      rect3.style.backgroundColor = "#A4FFAF";
      rect4.style.backgroundColor = "#A4FFAF";
      title.innerHTML= "HIGH"
    }
}
submit.addEventListener("click",checking)

//modifying rectangle 