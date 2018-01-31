import Controller from '@ember/controller';

export default Controller.extend({
actions:{

login()
    {
let u=this.get('userName');
let p=this.get('password');




if(u==p)

{
  alert("Welcome "+u);

  this.transitionToRoute('rentals');
}
else {
  alert("Wrong username or password");
  this.transitionToRoute('index');
}
  }
}

});
