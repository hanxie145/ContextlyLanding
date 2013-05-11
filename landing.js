// Generated by CoffeeScript 1.4.0
(function() {

  $(document).ready(function() {
    var flashInOut;
    $('body').append('\
    <div id="contextlyFlashesHolder"></div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="draggableFlash" class="hide alert alert-success" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 200px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>Element made draggable</p>\
    </div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="changeFontFlash" class="hide alert alert-success" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 200px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>Font changed</p>\
    </div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="wrapClassFlash" class="hide alert alert-success" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 230px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>Element wrapped in specified div</p>\
    </div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="addToClassFlash" class="hide alert alert-success" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 230px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>Element added to specified div</p>\
    </div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="changeTagNameFlash" class="hide alert alert-success" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 200px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>Element\'s tagName changed</p>\
    </div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="modifyClassFlash" class="hide alert alert-success" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 200px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>Class changed</p>\
    </div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="resizableFlash" class="hide alert alert-success" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 200px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>Element made resizable</p>\
    </div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="revertFlash" class="hide alert alert-success" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 200px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>Change reverted</p>\
    </div>\
    ');
    $('#contextlyFlashesHolder').prepend('\
     <div id="failRevertFlash" class="hide alert alert-error" style="\
    z-index: 10000000;\
    position: fixed;\
    left: 41%;\
    top: 2%;\
    width: 200px;\
      ">\
      <a class="close" id= "closeMyFlash" href="#">×</a>\
      <p>No changes to revert</p>\
    </div>\
    ');
    flashInOut = function(id, callback) {
      id = "#" + id;
      $(id).fadeIn(1500, function() {
        return $(this).fadeOut();
      });
      if (callback) {
        return callback();
      }
    };
    $("reload").click(function(e) {
      return document.location.reload(true);
    });
    $("#quill").animate({
      "left": "580px",
      "top": "55px"
    }, 1500, "linear", function() {
      flashInOut("changeFontFlash");
      $('.jumbotron h3').css("font-size", "150px");
      return $('.jumbotron h3').css("font-family", "Open Sans");
    });
    return $("#quill").animate({
      "left": "580px",
      "top": "140px"
    }, 1500, "linear", function() {
      flashInOut("resizableFlash", function() {
        $(".jumbotron").animate({
          "height": "312px"
        }, 1500, "linear");
        return $("#quill").animate({
          "top": "351px"
        }, 1500, "linear");
      });
      return $("#quill").animate({
        "top": "310px"
      }, 1500, "linear", function() {
        flashInOut("draggableFlash");
        $('#addObject').animate({
          "left": "174px",
          "top": "644px"
        }, 1500, "linear");
        return $("#quill").animate({
          "left": "220px",
          "top": "624px"
        }, 1500, "linear", function() {
          return $('#quill').animate({
            "top": "323px"
          }, 1500, "linear", function() {
            flashInOut("draggableFlash");
            $('#absolute').animate({
              "top": "410px"
            }, 1500, "linear");
            return $('#quill').animate({
              "top": "410px"
            }, 1500, "linear", function() {
              return $('#quill').animate({
                "left": "690px",
                "top": "305px"
              }, 1500);
            });
          });
        });
      });
    });
  });

}).call(this);