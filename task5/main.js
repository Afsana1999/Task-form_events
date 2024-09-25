// Tapşırıq 5: Formada Avtomatik Doldurma
// Təlimatlar:

// Aşağıdakı sahələri olan form yaradın:
// Ad (First Name)
// Soyad (Last Name)
// Ölkə (Açılan siyahı ilə "ABŞ", "Kanada", "Digər" seçimləri)
// İstifadəçi "ABŞ" seçərsə, avtomatik olaraq "Ad" sahəsini "John", "Soyad" sahəsini isə "Doe" ilə doldurun.
// Bu avtomatik doldurma prosesini həyata keçirmək üçün ölkə seçim siyahısında change hadisəsindən istifadə edin.

let country = document.getElementById("country");
let namee = document.getElementById("name");
let surname = document.getElementById("surname");

country.addEventListener("change", function () {
  if (country.value == "ABS") {
    namee.value = "John";
    surname.value = "Doe";
  }
  if (country.value == "Kanada") {
    namee.value = "Riko";
    surname.value = "Fiko";
  }
  if (country.value == "Diger") {
    namee.value = "Basqa";
    surname.value = "Basqaaa";
  }
});
