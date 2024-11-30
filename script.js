// function handleRadioChange(event) {
//     const options = document.querySelectorAll('.option');
//     options.forEach(option => option.classList.remove('active'));
//     const parentDiv = event.target.closest('.option');
//     if (parentDiv) {
//         parentDiv.classList.add('active');
//     }
//     const selectedValue = document.getElementById('selected-value');
//     selectedValue.textContent = event.target.value;
// }
// const radioButtons = document.querySelectorAll('input[type="radio"]');
// radioButtons.forEach(radio => {
//     radio.addEventListener('change', handleRadioChange);
// });





$(document).ready(function() {

    function handleRadioChange(event) {
        $('.option').removeClass('active');
        $(event.target).closest('.option').addClass('active');
        $('#selected-value').text(event.target.value);
      }

      $('input[type="radio"]').on('change', handleRadioChange);

    function getSelectedValues() {
      $('.option.active').each(function() {
        const optionDiv = $(this);
        const selectedUnitValue = optionDiv.find("input[type='radio']:checked").val();
        const size1 = optionDiv.find('#size1').val();
        const color1 = optionDiv.find('#color1').val();
        const size2 = optionDiv.find('#size2').val();
        const color2 = optionDiv.find('#color2').val();
        if (selectedUnitValue) {
         // alert(`Unit: ${selectedUnitValue}\nSize 1: ${size1}\nColor 1: ${color1}\nSize 2: ${size2}\nColor 2: ${color2}`);
          $('#unitVal').text(selectedUnitValue)
          $('#Size1').text(size1)
          $('#Size2').text(size2)
          $('#Color1').text(color1)
          $('#Color2').text(color2)
          $('#cart_Details').show()
        } else {
            $('#cart_Details').hide()
        }
      });
    }

    $('#getValuesBtn').click(getSelectedValues);
  
  });
  
