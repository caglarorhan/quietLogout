let quietLogout ={
   async  init(payload={}){
        this.logoutURL = payload.logoutURL;
       this.redirectURL = payload.redirectURL;
       this.countDown = payload.timeout;
       this.counter = null;
       this.resetCounter();
   },
     resetCounter(){
       this.counter = setInterval(() =>{
           this.countDown--;
           console.log(this.countDown);
           if(this.countDown>=0){
               clearInterval(this.counter);
               console.log("Burada redirect edilecek");
           }
       },  1000)
     },

}
