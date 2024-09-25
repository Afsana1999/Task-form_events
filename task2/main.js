// Tapşırıq 2: Real-Time Form Geri Bildirimi
// Forma daha bir sahə əlavə edin: "Telefon Nömrəsi" (input, type: text).
// İstifadəçi yazarkən real-time geri bildirim təmin etmək üçün JavaScript yazın:

// İstifadəçi adı sahəsi üçün: Əgər daxil edilən mətn 5 simvoldan azdırsa, sahənin altında "İstifadəçi adı ən azı 5 simvol olmalıdır" mesajını göstərin.
// Email sahəsi üçün: İstifadəçi yazmağı bitirdikdə (blur hadisəsindən istifadə edin), emailin düzgün olub-olmadığını yoxlayın. Düzgün deyilsə, "Zəhmət olmasa düzgün email ünvanı daxil edin" mesajını göstərin.
// Telefon nömrəsi sahəsi üçün: input hadisəsindən istifadə edərək yalnız rəqəmlərin daxil edilməsinə icazə verin. İstifadəçi rəqəmdən başqa bir simvol daxil edərsə, həmin girişi dayandırın.

let namee = document.getElementById("name");
let nameError = document.getElementById("nameError");
namee.addEventListener("blur", function () {
  let nameValue = namee.value;
  if (nameValue.length < 5) {
    nameError.textContent = "İstifadəçi adı ən azı 5 simvol olmalıdır";
  }
});

let email = document.getElementById("email");
let emailEror = document.getElementById("emailError");

email.addEventListener("blur", function () {
  let emailValue = email.value;
  if (!emailValue.includes("@gmail.com")) {
    emailEror.textContent = "Zəhmət olmasa düzgün email ünvanı daxil edin";
  }
});

let phone = document.getElementById("phone");
phone.addEventListener("input",function(){
  phone.value=phone.value.replace(/\D/g,"")
})