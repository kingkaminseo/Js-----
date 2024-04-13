var a;
var b;
function printName()  {
    const IDID = document.getElementById('ID').value;
    // document.getElementById("result").innerText = IDID;
  }

function printpassword()  {
    const password = document.getElementById('password').value;
    // document.getElementById("result2").innerText = password;
  }

  var green12 = document.getElementById("secondscril");
  green12.style.backgroundColor = "rgba(0, 0, 0, 0.441)"

  var greenbarlin = document.getElementById("trirdscril");
  greenbarlin.style.backgroundColor = "rgba(0, 0, 0, 0.441)";

function succeced() {
    if (ID.value === password.value) {
        alert("아이디와 비번이 똑같습니다.");
    } else {
        document.getElementById("succ").innerText = "회원가입 succeed!";
        a = ID.value;
        b = password.value; 
                var allElement = document.getElementById("alling");
                allElement.classList.add("animatclass");
                var grenbar = document.getElementById("greenbar");
                grenbar.classList.add("greenbaroship");
                var green12 = document.getElementById("secondscril");
                green12.style.backgroundColor = "";
                green12.classList.add("secondscril1")
    }
}


function printName2()  {
    const IDI = document.getElementById('loginID').value;
    // document.getElementById("result3").innerText = IDI;
  }

function printpassword2() {
    const password = document.getElementById('loginpassword').value;
    // document.getElementById("result4").innerText = password;
  }



function loginsucceced() {
  if (a === loginID.value && b === loginpassword.value) {
    document.getElementById("login-cuss").innerText = "로그인 succeed!";
    var allElementtel = document.getElementById("alling");
                allElementtel.classList.add("animatclass2");
                var grenbar12 = document.getElementById("greenbar");
                grenbar12.classList.add("greenbaroship2");               
                var green12 = document.getElementById("trirdscril");
                greenbarlin.style.backgroundColor = "";
                green12.classList.add("tridsscril1") 
  } 
  else {
    if(a !== loginID.value) {
      document.getElementById("login-cuss").innerText = "아이디 오류";
    }
    if (b !== loginpassword.value) {
      document.getElementById("login-cuss").innerText = "비밀번호 오류";
    }
  } 
}


