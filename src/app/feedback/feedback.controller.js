export class FeedbackController {
  constructor ($http) {
    'ngInject';

    this.$http =  $http;
    this.getMessages();
  }

  getMessages(){
      var vm = this;
      this.$http.get('http://localhost:9000/api/message').then(function(result){
        // console.log(result);
          vm.messages = result.data;
      });
  }

    postMessage() {
        this.$http.post('http://localhost:9000/api/message', {msg: this.message})
        // console.log("test");
    }

}
