(function(){
  angular.module('myApp.Companies').directive('hoverPopover',
    function ($compile, $templateCache, $timeout, $rootScope) {

      return {
        restrict: 'A',
        link: function (scope, element, attrs) {

          element.popover({
            animation: true,
            //html: true,
            placement: 'top',
            title: 'Clients',
            //trigger: 'manual',
            template: 'scripts/core/companies/companiesPopoverTemplate.html'
          });

          //element.on("mouseenter", function () {
          //  element.popover("show");
          //});
          //
          //element.on("mouseleave", function () {
          //  element.popover("hide");
          //});

          $(element).popover({trigger: "manual", html: true, animation: false})
            .on("mouseenter", function () {
              var _this = this;
              $(this).popover("show");
              $(".popover").on("mouseleave", function () {
                $(_this).popover('hide');
              });
            }).on("mouseleave", function () {
            var _this = this;
            setTimeout(function () {
              if (!$(".popover:hover").length) {
                $(_this).popover("hide");
              }
            }, 300);
          });

        }
      }
    });
}());
