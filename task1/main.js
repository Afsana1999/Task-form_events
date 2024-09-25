// Tapşırıq 1: Forma Doğrulaması
// Aşağıdakı sahələrdən ibarət sadə bir HTML formu yaradın:

// İstifadəçi adı (input, type: text)
// Email (input, type: email)
// Şifrə (input, type: password)
// Göndərmə düyməsi (Submit button)
// JavaScript-dən istifadə edərək submit hadisəsini idarə edin:

// Hər hansı bir sahə boşdursa, formun göndərilməsinin qarşısını alın.
// Emailin düzgün formatda olduğundan əmin olun.
// Şifrənin ən azı 8 simvol uzunluğunda olduğundan əmin olun.
// Bütün doğrulama keçərsə, konsolda uğur mesajı göstərin.
// Doğrulama uğursuz olarsa, formanı təqdim etmədən əvvəl uyğun səhv mesajını formun altında göstərin.

function register(form) {
  let isName = true;
  let isEmail = true;
  let isPasword = true;
  let name = form.name.value;
  if (name.length == 0) {
    alert("ad hissesi bos buraxila bilmez!");
    isName = false;
  }
  let email = form.email.value;
  if (!email.includes("@gmail.com")) {
    alert("Email formati duzhun deyil!");
    isEmail = false;
  } else if (email.length == 0) {
    alert("email bos buraxila bilmez!");
    isEmail = false;
  }
  let password = form.password.value;
  if (password.length < 8) {
    alert("sifre en azi 8 simvol olmalidir");
    isPasword = false;
  }
  if (isName == true && isEmail == true && isPasword == true) {
    alert("qeydiyyat ugurla tamamlandi");
  } else {
    alert("qeydiyyati tamamlamaq ucun bir daha cehd edin");
  }
}
