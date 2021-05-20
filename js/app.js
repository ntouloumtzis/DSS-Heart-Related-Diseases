function onReset() {
  document.getElementById("result").remove();
}

function result() {
  my_class = calculate();
  document.getElementById("result").innerHTML = "Result: " +  my_class;
} 

function calculate() { 
  var thal = document.getElementsByName("thal")[0].value;
  var chest = document.getElementsByName("chest")[0].value;
  var max_heart_rate = document.getElementsByName("max_heart_rate")[0].value;
  var oldpeak = document.getElementsByName("oldpeak")[0].value;
  var slope = document.getElementsByName("slope")[0].value;
  var number_of_major_vessels = document.getElementsByName("number_of_major_vessels")[0].value;

// J48 Algorithm Output [Hardcoded]
  if (thal <= 3) {
    if (number_of_major_vessels <= 0) {
      return "Absent";
    }
    else {
      if (chest <= 1) {
        if (slope <= 1) {
          return "Absent";
        }
        else {
          return "Present";
        }
      }
      if (chest = 2) {
        return "Absent";
      }
      if (chest = 3) {
        return "Absent";
      }
      else {
        return "Present";
      }
    }
  }
  if (thal = 6) {
    if (number_of_major_vessels <= 0) {
      return "Absent";
    }
    else {
      return "Present";
    }
  }
  else {
    if (chest <= 1) {
      return "Absent";
    }
    if (chest = 2) {
      if (oldpeak <= 0.1) {
        return "Absent";
      }
      else {
        return "Present";
      }
    }
    if (chest = 3) {
      if (slope <= 1) {
        return "Absent";
      }
      else {
        if (number_of_major_vessels <= 0) {
          if (max_heart_rate <= 152) {
            return "Present";
          }
          else {
            return "Absent";
          }
        }
        else {
          return "Present";
        }
      }
    }
    else {
      if (oldpeak <= 0.6) {
        if (max_heart_rate <= 143) {
          return "Absent";
        }
        else {
          return "Present";
        }
      }
      else {
        return "Present";
      }
    }
  }
}

$("input").focus(function(){
  $(this).addClass("boxvisit");
})
$("input").focusout(function(){
  $(this).removeClass("boxvisit");
})

$("select").focus(function(){
  $(this).addClass("boxvisit");
})
$("select").focusout(function(){
  $(this).removeClass("boxvisit");
})