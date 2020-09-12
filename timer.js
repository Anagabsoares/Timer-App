class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) { // we are going to pass in references to DOM elemnets that out Timer class are doing to listen into.
        console.log(this);// that is going to be the value of this inside the define property

        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;

        } //to callback be optional


        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining); //when we first start the timer this timerEMAINING THE VALUE IS GONNA BE HOW LONG THE TIMER IT'S GOING TO RUN IN TOTAL
        }
        this.tick()
        this.interval = setInterval(this.tick, 50); //ruun this.tick once every 1 second
        //	JavaScript can be executed in time-intervals.This is called timing events


    };
    pause = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        // const timeRemaining = this.timeRemaining;  // THAT IS GOING TO AUTOMATICALLY INVOKE THIS FUNCTION RIGHT HERE EVEN THOUGH WE DONT HAVE THE PARENTHESIS ON THE END- THEE REASON IT GETS INVOKED IS BECAUSE OF THAT GET KEYWORD WE SET UP
        if (this.timeRemaining <= 0) {
            this.pause
            if (this.onComplete) {
                this.onComplete();
                return this
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05;
            if (this.onTick) {
                this.onTick(this.timeRemaining)
            }
            //this value will be the argument in the setter (time)
        }
    };

    get timeRemaining() { //getter method 
        return parseFloat(this.durationInput.value) //parsefloat return a decimal
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2); //ROUND THE DECIMAL UNDER THERE JUST TWO DECIMAL PLACES 
    }

    // getTime() {
    //     return parseFloat(this.durationInput.value);
    // }

    // setTime(time) {
    //     this.durationInput.value = time;
    // }

    //The get syntax binds an object property to a function that will be called when that property is looked up.
    // In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. 
}
