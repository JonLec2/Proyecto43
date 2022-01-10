class Security {

    constructor(){

        this.name=createInput("Name")
        this.name.position(660, 50);
        this.name.style('background', 'white');  

        this.button4=createButton('Send');
this.button4.position(660, 78);
this.button4.style('background', 'lightgrey');

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button


this.access3=createInput("Code3");
this.access3.position(150, 300);
this.access3.style('background', 'white')

this.button3=createButton('Check');
this.button3.position(150, 330);
this.button3.style('background', 'lightgrey');

        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed


this.button3.mousePressed(()=>{
    if(system.authenticate(accessCode3, this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
    }

})
        

this.button4.mousePressed(()=>{
    nameplayer=this.name.value();
    this.button4.hide();
    this.name.hide();
    

})

    }
}