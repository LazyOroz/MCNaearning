function redirectToDepositPage() {
    window.location.href = "/deposit.html";
}

function redirectToWithdrawPage() {
    window.location.href = "/withdraw.html";
}

function Home() {
    window.location.href = "/index.html";
}

function redirectToAAPage() {
    window.location.href = "/aa.html";
}

function redirectToNextPage() {
    var mcnAmount = document.getElementById("mcnAmount").value;
    if (mcnAmount) {
        // Перенаправление на следующую страницу с передачей значения mcnAmount через URL-параметр
        window.location.href = "depositEnd.html?mcnAmount=" + mcnAmount;
    } else {
        alert("Пожалуйста, введите количество MCN.");
    }
}

function copyAddress() {
    var address = document.getElementById("ethereumAddress");
    var range = document.createRange();
    range.selectNode(address);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Адрес скопирован: " + address.textContent);

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = "https://apps.apple.com/app/apple-store/id1288339409";
        } else if (/Android/i.test(navigator.userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp";
        }
    } else {
        alert("Эта функция доступна только на мобильных устройствах.");
    }
}

function sendTransaction() {
    var transactionDescription = document.getElementById("transactionDescription").value;
    if (transactionDescription) {
        // Здесь можно добавить логику отправки транзакции
        alert("Транзакция успешно отправлена!");
    } else {
        alert("Пожалуйста, введите описание транзакции.");
    }
}


function updateBalance() {
    window.location.href = "/depositEnd.html";
    // Получаем новое значение из поля ввода
    var newAmount = parseFloat(document.getElementById("mcnAmount").value) || 0;
    // Получаем текущее значение из Local Storage
    var currentAmount = parseInt(localStorage.getItem("mcnAmount")) || 0;
    // Суммируем новое и текущее значения
    var totalAmount = currentAmount + newAmount;
    // Обновляем отображение на странице
    document.getElementById("balance").textContent = totalAmount;
    // Сохраняем новое значение в Local Storage
    localStorage.setItem("mcnAmount", totalAmount.toString());
    // Очищаем поле ввода после добавления суммы
    document.getElementById("mcnAmount").value = "";
}
