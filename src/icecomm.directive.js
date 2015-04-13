angular.module('icecomm.controller', [])
.directive('icecomm', icecommDirective);

function icecommDirective() {
  return {
    restrict: 'AE',
    scope: {},
    bindToController: true,
    controller: function($attrs, $element) {
      var debugOptions = {debug: Boolean($attrs.debug)};
      var comm = new Icecomm($attrs.apikey, debugOptions);
      this.comm = comm;
      this.connect = comm.connect;
    },
    controllerAs: 'comm'
  }
}

