import Controller from '@ember/controller';

export default Controller.extend({
  validator:{
    title:{
      pattern:/^[A-Za-z]+\s*[A-Za-z]$/,
    },
    category:{
      pattern:/^[A-Za-z]+\s*[A-Za-z]$/,
    },
    city:{
      pattern:/^[A-Za-z]+\s*[A-Za-z]$/,
    },
    owner:{
      pattern:/^[A-Za-z]+\s*[A-Za-z]$/,
    },
    bedrooms:{
      pattern:/^[0-9]*$/,
      label:'bedrooms'
    }
  },
  actions:{
    postProperty:function(){
        let newEntry={
        title:this.get('title'),
        image:this.get('image'),
        category:this.get('category'),
        city:this.get('city'),
        owner:this.get('owner'),
        bedrooms:this.get('bedrooms')
      }
      var flag=false;
      if(!this.validator.title.pattern.test(newEntry.title)){
        flag=true;
        //alert("1");
      }else if (!this.validator.city.pattern.test(newEntry.city)) {
        flag=true;
        //alert("2");
      }else if (!this.validator.bedrooms.pattern.test(newEntry.bedrooms)) {
        flag=true;
        //alert("3");
      }else if (!this.validator.category.pattern.test(newEntry.category)) {
        flag=true;
        //alert("4");
      }else if (!this.validator.owner.pattern.test(newEntry.owner)) {
        flag=true;
        //alert("5");
      }

      if(flag){
        alert("Check the field Entries");
      }
      else{
        this.get('model').pushObject(newEntry);
        document.getElementById("myForm").reset();
        this.set('title',null);
        this.set('image',null);
        this.set('owner',null);
        this.set('city',null);
        this.set('location',null);
        this.set('bedrooms',null);
      }

    }
  }
});
