(function(){
  $(window).bind("load", function() {

    var tabletScreenWidth =  768

    // Move Dropdown from container to container
    function moveModelSelectorDropdown() {
      var dropdown = $('.ModelSelector-dropdown')
      var containerTablet = $('.ModelSelectorSection-dropdown')

      if (window.matchMedia("(min-width: "+tabletScreenWidth+"px)").matches) {
        dropdown.appendTo(containerTablet);
      }
    }

    moveModelSelectorDropdown()

    $( window ).resize(function() {
      moveModelSelectorDropdown()
    })

  })
})();
