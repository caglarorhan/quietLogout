let quietLogout ={
    countDownAmount: 0,
    counter:null,
    isActive: true,
    tryCount:1,
   async  init(payload={}){
        this.logoutURL = payload.logoutURL;
       this.redirectURL = payload.redirectURL;
       this.countDown = payload.timeout;
       this.tryLimit= payload.tryLimit;
       this.afterTryLimitReachedURL = payload.afterTryLimitReachedURL;
       this.listenUserActions();
       await this.resetCounter();
   },
    listenUserActions() {
        document.addEventListener('mousemove', this.resetCounter.bind(this));
        document.addEventListener('mousedown', this.resetCounter.bind(this));
        document.addEventListener('contextmenu', this.resetCounter.bind(this));
        document.addEventListener('keypress', this.resetCounter.bind(this));
        document.addEventListener('touchstart', this.resetCounter.bind(this));
    },
     async resetCounter(){
        if(!this.isActive) return false;
         if (this.counter) {
             clearInterval(this.counter);
         }
        this.countDownAmount = this.countDown;
       this.counter = setInterval(async () =>{
           this.countDownAmount--;
           console.log(this.countDownAmount);
           if(this.countDownAmount<=0){
               clearInterval(this.counter);
               let logoutSuccess = await  this.logoutRequest();
               if(logoutSuccess){
                   console.log('Logout successful');
                   this.isActive = false;
                   console.log('Redirect started');
                   window.location.href = this.redirectURL;
               }else{
                   console.log('Logout failed');
                   if (this.tryCount >= this.tryLimit) { // Add this block
                       console.log('Try limit reached, redirecting to emergency page');
                       window.location.href = this.afterTryLimitReachedURL;
                   }else{
                       this.tryCount++;
                       console.log('Logout try count is: ' + this.tryCount);
                       setTimeout(()=>{this.resetCounter()},1000);
                   }
               }
           }
       },  1000)
     },
    async logoutRequest() {
        try {
            let response = await fetch(this.logoutURL,{
                // TODO: servers specific needs here as options, like method, header, token etc
            });
            if (response.status === 200) {
                return true;
            } else {
                // Handle non-200 responses here
                console.error('Logout request failed with status: ', response.status);

                return false;
            }
        } catch (error) {
            // Handle network errors here
            console.error('Logout request failed with error: ', error);
            return false;
        }
    }

}
