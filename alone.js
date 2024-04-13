var list = ['안녕하세요', '쿠키와우유', '진주귀걸이', '자동차바퀴엔진','ㅁㄴㄹㅇ'];
var list2 = ['시기다른래퍼들의 반대편을 바라보는 래퍼들의 배포 그건 백프로 개뻥 마치 개빨어 마치 텐프로 됏어 보인 각본 짜인 대본 와우우웅깽', 'hi','bye','tlqkf','ㅗ']
var list3 = ['1', '2','3','4','5']

var CurrentLevel = 1;

var currentIndex = 0;

var intervalId;

function startTimer(duration, display) {
  var timer = duration - 1;
  var startTime = Date.now();

  clearInterval(intervalId);

  intervalId = setInterval(function () {
    var currentTime = Date.now();
    var elapsed = Math.floor((currentTime - startTime) / 1000);

    var seconds = duration - elapsed;
    seconds = seconds < 10 ?  seconds : seconds;

    display.textContent = seconds;

    if (elapsed >= duration) {
      clearInterval(intervalId); // 타이머 중지
      display.textContent = "finish"; // "finish" 표시
      currentIndex = 0; // 첫 번째 리스트로 돌아갑니다.
      renderList(CurrentLevel); // 첫 번째 리스트를 표시합니다.
      window.location.reload()
    }
  }, 100);
}

function renderList(listNum) {
  var listText = document.getElementById('listText');
  if(listNum==1){
    const randomint=Math.floor(Math.random() * list.length);
    const randomValue = list[randomint];
  listText.innerText = randomValue;
  list.splice(randomint,1)

  }else if(listNum==2){
    const randomint2=Math.floor(Math.random() * list2.length);
    const randomValue = list2[randomint2];
  listText.innerText = randomValue;
  list2.splice(randomint2,1)
  }

  if(listNum==3){
    const randomint=Math.floor(Math.random() * list3.length);
    const randomValue = list3[randomint];
  listText.innerText = randomValue;
  list3.splice(randomint,1)
  }
}





function enter() {
  const answer = document.getElementById('text').value;
  var display = document.querySelector("#timer");

  if (answer === document.getElementById('listText').innerText) {
    document.getElementById('truefalse').innerText = 'True';
    currentIndex++;
    if (currentIndex >= 5) {
        currentIndex=0;
        alert(CurrentLevel+1+"단계")
        CurrentLevel++;
        renderList(CurrentLevel)    
    

    } else {
      renderList(CurrentLevel);
    }
    startTimer(15 , display); // 타이머 초기화 및 재시작
  } else {
    document.getElementById('truefalse').innerText = 'False';
  }

  document.getElementById('text').value = '';
}

function startTimerOnChange() {
  var display = document.querySelector("#timer");
  startTimer(10, display);
}

function light() {
    var flashlamp = document.getElementById("maindiv")
    flashlamp.classList.add("Flash");
}