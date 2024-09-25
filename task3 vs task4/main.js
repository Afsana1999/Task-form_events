// Tapşırıq 3: Dinamik Forma Sahələri
// Təlimatlar:

// "İştirakçıların Sayı" adlı mətn girişi ilə form yaradın.

// Daxil edilmiş say əsasında iştirakçıların adlarını daxil etmək üçün dinamik olaraq mətn giriş sahələri yaradın (change və ya input hadisəsindən istifadə edin):

// Məsələn, istifadəçi "3" daxil edərsə, hər iştirakçının adını daxil edə biləcəyi 3 giriş sahəsi yaradın.
// Say dəyişdikdə, iştirakçıların sayına uyğun olaraq formu yeniləyin.

let caount = document.getElementById("caount");
let newUser = document.getElementById("newUsers");
let resetBtn=document.getElementById("resetBtn")
caount.addEventListener("input", function () {
  let caountValue = caount.value.replace(/\D/g, "");
  for (let i = 0; i < caountValue; i++) {
    let newName = document.createElement("input");
    newName.placeholder = `${i + 1}. iştirakcı  adı`;
    newUser.appendChild(newName);
  }
});


// Tapşırıq 4: Formanın Yenidən Qurulması
// Təlimatlar:

// Formaya "reset" düyməsi əlavə edin.

// reset hadisəsini idarə etmək üçün JavaScript yazın:

// Forma yenidən qurulduqda "Forma yenidən qurulmuşdur" mesajı göstərin.
// Əvvəlki dövrlərdə göstərilmiş hər hansı səhv mesajlarını və ya real-time geri bildirimləri təmizləyin.
resetBtn.addEventListener("click",function(){
  caountValue=""
  alert("forma yeniden qurulr")
})
