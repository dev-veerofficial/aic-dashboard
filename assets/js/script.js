var options = {
    chart: {
      type: 'area',
      height: 320
    },
    series: [{
      name: 'KMs',
      data: [8.2,5.6,5.4,14.5,5.0,6.3,3.2,8.5,6.4,3.4,2.8,4.6,6.5,9.5,4.5,6.8,8,8.9,8.5,8.0,10.5,11,12.5,11.9,11.2,12.5,13,13.5,14,14.5]
    }],
    xaxis: {
      categories: ['1/05','02/05','03/05','04/05','05/05','06/05','07/05','08/05','09/05','10/05',
                   '11/05','12/05','13/05','14/05','15/05','16/05','17/05','18/05','19/05','20/05',
                   '21/05','22/05','23/05','24/05','25/05','26/05','27/05','28/05','29/05','30/05',
                  ]

    },
    stroke: {
        curve: 'smooth',
        colors: ['#DC4295', '#DC4295', '#546E7A', '#E91E63', '#FF9800'],
        width: 1.5
      },
    fill: {
        type: 'gradient',
        colors: ['#DC4295', '#DC4295', '#546E7A', '#E91E63', '#FF9800'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
    },
    tooltip: {
        enabled: true
    },
    dataLabels: {
        enabled: false
      },
    
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  // Profile Picture Upload
  $(document).ready(function () {
    
    var readURL = function (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('.userpic').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }

    $(".file-dpupload").on('change', function () {
      readURL(this);
    });

    $(".btn-dpupload").on('click', function () {
      $(".file-dpupload").click();
    });
  });

  // Questions - Profile Pic Upload
  
    $(document).ready(function () {

      var readURL = function (input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            $('.profile-pic').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
        }
      }

      $(".file-upload").on('change', function () {
        readURL(this);
      });

      $(".upload-button").on('click', function () {
        $(".file-upload").click();
      });
    });

    // T-shirt numbers
 
$('.btn-number').click(function(e){
  e.preventDefault();
  
  fieldName = $(this).attr('data-field');
  type      = $(this).attr('data-type');
  var input = $("input[name='"+fieldName+"']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
      if(type == 'minus') {
          
          if(currentVal > input.attr('min')) {
              input.val(currentVal - 1).change();
          } 
          if(parseInt(input.val()) == input.attr('min')) {
              $(this).attr('disabled', true);
          }

      } else if(type == 'plus') {

          if(currentVal < input.attr('max')) {
              input.val(currentVal + 1).change();
          }
          if(parseInt(input.val()) == input.attr('max')) {
              $(this).attr('disabled', true);
          }

      }
  } else {
      input.val(0);
  }
});
$('.input-number').focusin(function(){
 $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
  
  minValue =  parseInt($(this).attr('min'));
  maxValue =  parseInt($(this).attr('max'));
  valueCurrent = parseInt($(this).val());
  
  let name = $(this).attr('name');
  if(valueCurrent >= minValue) {
      $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
      alert('Sorry, the minimum value was reached');
      $(this).val($(this).data('oldValue'));
  }
  if(valueCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
  } else {
      alert('Sorry, the maximum value was reached');
      $(this).val($(this).data('oldValue'));
  }
});

$(".input-number").keydown(function (e) {
  // Allow: backspace, delete, tab, escape, enter and .
  if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
       // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) || 
       // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
           // let it happen, don't do anything
           return;
  }
  // Ensure that it is a number and stop the keypress
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
  }
});
  