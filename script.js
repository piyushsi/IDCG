     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

    function myFunction() {
      var x = document.getElementById("myText").value;
      document.getElementById("demo").innerHTML = x;
}
    function myFunction1 () {
      var x = document.getElementById("myText1").value;
      document.getElementById("demo1").innerHTML = x;
}