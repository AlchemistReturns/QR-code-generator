let queries = [];

function generateQr() {

    let imgContainer = document.getElementById("img-container");
    let qrImg = document.getElementById("qr-image");
    let qrText = document.getElementById("qr-text");

    if (qrText.value) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgContainer.classList.add("show-img");
        queries.push(qrText.value);
        let items = queries.slice(-5);
        items.reverse();
        let ul = document.getElementById("recents");
        ul.innerHTML = '';
        items.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
    }
    else {
        qrText.setAttribute("placeholder", "Enter something!");
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 400)
    }
}