
        // <!-- option-3 -->
        function makeRed(){
            document.body.style.background ='red'
        };
        const makeBlueButton = document.getElementById('make-orange');
        makeBlueButton.onclick = makeOrange;

        function makeOrange(){
            document.body.style.background='blueViolet'
        };
        const makeBlackButton = document.getElementById('black');
        makeBlackButton.onclick = makeBlack;
// <!-- option-4  -->
        function makeBlack(){
            document.body.style.background = 'black'
};
        // option-3 we will use this sometimes
        const makePurpleButton = document.getElementById('make-purple');
        makePurpleButton.onclick = function(){
            document.body.style.background='purple'
        };
        const makePinkButton = document.getElementById('make-pink');
        makePinkButton.addEventListener('click', makePink);
        function makePink(){
            document.body.style.background = 'pink'
        };
        // final option 
        document.getElementById('make-goldenrod').addEventListener('click', function(){
            document.body.style.background = 'goldenRod'
        })

  