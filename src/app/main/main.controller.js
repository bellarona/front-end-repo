export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http =  $http;
    this.getProducts();
  }

  getProducts(){
      var vm = this;
      this.$http.get('http://localhost:9000/api/products').then(function(result){
        console.log(result);
          vm.products = result.data;
      });
  }



}
