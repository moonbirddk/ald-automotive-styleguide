// Dropdowns using http://selectric.js.org/
 moduleScripts.dropdown = function() {
    console.log('selectric initiated')
  $('.Dropdown').selectric({
    nativeOnMobile: false
  });
};

(function(){
  moduleScripts.dropdownLinks = function() {

    // Go to url when option is selected
    // The option element needs the data-href attr for this to work
    $('.selectric-items li').click(function(){
      var dataIndex = $(this).attr('data-index')
      var select = $(this).closest('.selectric-wrapper').find('.selectric-hide-select')
      select.find('option').each(function(i){
        var href = $(this).attr('data-href')
        if(i == dataIndex) {
          if (typeof href !== typeof undefined && href !== false) {
            window.location.href = href
          }
        }
      })
    })

  };
})();
