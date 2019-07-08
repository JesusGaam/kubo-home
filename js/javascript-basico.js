WebFontConfig = {google: { families: ['Muli:300,400,700'] }};(function() {var wf = document.createElement('script'); wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js'; wf.type = 'text/javascript'; wf.async = 'true'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wf, s);})();

$("document").ready(function () {

  setHeaderHeight();

  $("#hamburger-menu").on("click", function(){
    if($("#header-menu").hasClass("open")){
      $("#header-menu").removeClass("open").addClass("close")
    } else {
      $("#header-menu").removeClass("close").addClass("open")
    }
  });


  /***  MODAL DIALOG  ***/
  $(".link-modal-dialog").on("click", function(){
    var stringId = $(this).attr("data-content-modal-dialog");
    var content = $("<div>").addClass(stringId).html($("#"+stringId).html());

    $("body").css("overflow", "hidden");
    $("#modal-dialog .dinamic-content").html(content);

    centerModal();
    $("#modal-dialog").removeClass("close").addClass("open");
  });

  $("#modal-dialog .close-modal, #modal-dialog").on("click",function(e){
    var t = e.target || e.srcElement;
    if($(t).is("#modal-dialog") || $(t).hasClass("close-modal")){
      $("body").css("overflow", "initial");
      $("#modal-dialog").removeClass("open").addClass("close");
      //$("#modal-dialog .dinamic-content").html("");
    }
  });
  /***   MODAL DIALOG   ***/

  $(window).resize(function(){
    setHeaderHeight();
    centerModal();
  });

});


function setHeaderHeight(){
  var headerTopHeight = $(window).width() > 768? 100 : 38;
  var headerHeight = $(window).height() - headerTopHeight;
  $("#header, #header .container-center").height(headerHeight + "px");
}

function centerModal(){
  setModalWidth();

  var widthWindow = $(window).width();
  var heightWindow = $(window).height();

  var widthContainer = $("#modal-dialog .container").width()/2;
  var heightContainer = $("#modal-dialog .container").height();

  var topPosition = parseInt((heightWindow/2) - (heightContainer/2));

  if(widthWindow > 768){

    var leftPosition = parseInt(widthWindow/2 - widthContainer);
    $("#modal-dialog > .container").css({
      "margin-left": leftPosition + "px",
      "margin-top": topPosition + "px"
    });
  } else {
    if(heightContainer >= heightWindow){
      topPosition = 10;
    }

    $("#modal-dialog > .container").css({
      "margin-top": topPosition + "px",
      "margin-left": "10px"
    });
  }
}

function setModalWidth(){
  var paddingContainer = 100;
  var widthContent = $("#modal-dialog .dinamic-content > div").width() + paddingContainer;

  if($(window).width() > 768){
    $("#modal-dialog .container").width(widthContent+"px");
  } else {
    $("#modal-dialog .container").css("width", "initial");
  }
}
