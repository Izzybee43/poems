var $mobileNavTrigger = $(".mobile-nav-bar"),
    $targetMobileNav = $(".mobile-nav"),
    showMobileNavClass = "show-mobile-nav";

$mobileNavTrigger.click(function(){
  $targetMobileNav.toggleClass(showMobileNavClass);
});
