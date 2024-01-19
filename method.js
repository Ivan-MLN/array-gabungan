document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var satu = document.querySelector('input[name="satu"]').value;
    var dua = document.querySelector('input[name="dua"]').value;
    var tiga = document.querySelector('input[name="tiga"]').value;

    var hasilArray = [satu, dua, tiga];
    var pesan = `Isi input:
    Array ke-1: ${satu}
    Array ke-2: ${dua}
    Array ke-3: ${tiga}
    
    Result: 
    ${JSON.stringify(hasilArray)}`;
    alert(pesan);
  });
});
