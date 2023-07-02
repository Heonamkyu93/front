
document.getElementById('form').addEventListener('submit', function (event) {
    if(dp===1) return false;
    event.preventDefault();

    let formData = new FormData(this);

    let formDataObject = {};
    formData.forEach(function (value, key) {
        console.log(key);
        console.log(value);
        formDataObject[key] = value;
    });

    var cryp = CryptoJS.AES.encrypt(JSON.stringify(formDataObject), '누구').toString();

    console.log('암호화');
    console.log(cryp);



    var encry = cryp;
    var enkey = "누구";

    console.log('=======================');
    var decr = CryptoJS.AES.decrypt(encry, enkey);

    var fin = decr.toString(CryptoJS.enc.Utf8);
    console.log('복호화');
    console.log(fin);

});





let emvali = 1;
var dp = 1;
function dpch() {
    alert('중복확인했다치고')
    dp = 2;
}

function dpch1() {
    dp = 1;
}

function changemail() {
    emvali = 1;
    let ee = document.getElementById('email').value;
    let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (ee.match(regExp) != null) {
        document.getElementById('p4').innerText = '';
        emvali = 2;
    } else {
        document.getElementById('p4').innerText = '이메일형식에 맞는 값을 입력해주세요.';
    }
}


function re() {
    if (document.getElementById("pwd").value.length !== 0) {
        document.getElementById('p').innerText = '';
    }
}

function re2() {
    if (document.getElementById("name").value.length !== 0) {
        document.getElementById('p3').innerText = '';
    }
}

function ch() {
    var id = document.getElementById('id');
    let pwd = document.getElementById("pwd");
    let pwd2 = document.getElementById("pwd2");
    let name = document.getElementById("name");
    let email = document.getElementById("email");


    if (id.value.length === 0) {
        alert("ID를 확인하세요");
        return false;
    } else if (pwd.value == null || pwd.value === "") {
        document.getElementById("p").innerText = '비밀번호를 입력해주세요.';
        return false;
    } else if (pwd2.value == null || pwd2.value === "") {
        document.getElementById("p2").innerText = '다시 확인해 주세요';
        return false;
    } else if (name.value.length === 0) {
        document.getElementById("p3").innerText = '다시 확인해 주세요';
        return false;
    } else if (email.value.length === 0) {
        document.getElementById("p4").innerText = '다시 확인해 주세요';
        return false;
    } else if (pwd.value != pwd2.value) {
        document.getElementById("str").style.color = 'red';
        return false;
    } else if (emvali === 1) {
        return false;
    } else if (dp != 2) {
        alert('중복확인 버튼 눌러주세요');
        return false;
    }
}
