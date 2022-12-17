const txtElement = ['Catalysts!']
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();

//inisiasi soal dalam quiz
const questions = [
    {
        question: "Kota Palu berada di provinsi?",
        optionA: "Sumatera Barat",
        optionB: "Sulawesi Utara",
        optionC: "Sumatera Selatan",
        optionD: "Sulawesi Tengah",
        correctOption: "optionD"
    },

    {
        question: "Zona waktu untuk Papua disebut?",
        optionA: "WIB",
        optionB: "WIT",
        optionC: "WIS",
        optionD: "WITA",
        correctOption: "optionB"
    },

    {
        question: "Gunung yang terletak di wilayah Tegal adalah?",
        optionA: "Gunung Semeru",
        optionB: "Gunung Lawu",
        optionC: "Gunung Arjuno",
        optionD: "Gunung Slamet",
        correctOption: "optionD"
    },

    {
        question: "Monumen terkenal di kota Paris adalah?",
        optionA: "Menara Pisa",
        optionB: "Patung Liberty",
        optionC: "Menara Eiffel",
        optionD: "Hagia Sophia",
        correctOption: "optionC"
    },

    {
        question: "Bahan bakar kereta api adalah?",
        optionA: "Minyak tanah",
        optionB: "Bensin",
        optionC: "Avgas",
        optionD: "Batu bara",
        correctOption: "optionD"
    },

    {
        question: "Pusat peredaran tata surya adalah?",
        optionA: "Matahari",
        optionB: "Bulan",
        optionC: "Asteroid",
        optionD: "Satelit",
        correctOption: "optionA"
    },

    {
        question: "Nama mata uang Jerman adalah?",
        optionA: "Yen",
        optionB: "Dollar",
        optionC: "Euro",
        optionD: "Peso",
        correctOption: "optionC"
    },

    {
        question: "Siapakah pahlawan perempuan Indonesia di bidang kesehatan?",
        optionA: "Kardinah",
        optionB: "RA. Kartini",
        optionC: "Cut Meutia",
        optionD: "Dewi Sartika",
        correctOption: "optionA"
    },

    {
        question: "Ibu kota pertama Republik Indonesia adalah?",
        optionA: "Jakarta",
        optionB: "Bandung",
        optionC: "Surabaya",
        optionD: "Yogyakarta",
        correctOption: "optionD"
    },

    {
        question: "Rumah Dulohupa merupakan rumah adat dari daerah?",
        optionA: "Riau",
        optionB: "Jambi",
        optionC: "Bengkulu",
        optionD: "Gorontalo",
        correctOption: "optionD"
    },

    {
        question: "Ada berapa negara yang tergabung dalam ASEAN?",
        optionA: "12",
        optionB: "9",
        optionC: "10",
        optionD: "21",
        correctOption: "optionC"
    },

  
    {
        question: "Dimana kerajaan Majapahit terletak?",
        optionA: "Jawa Timur",
        optionB: "Jawa Barat",
        optionC: "Jawa Tengah",
        optionD: "Palembang",
        correctOption: "optionA"
    },


    {
        question: "Kota Bogor dijuluki sebagai?",
        optionA: "Kota Pahlawan",
        optionB: "Kota Hujan",
        optionC: "Kota Batik",
        optionD: "Serambi Madinah",
        correctOption: "optionB"
    },

    {
        question: "Sumpah yang diucapkan Patih Gajah Mada disebut?",
        optionA: "Sumpah Trisakti",
        optionB: "Sumpah Pemuda",
        optionC: "Sumpah Mahapatih",
        optionD: "Sumpah Palapa",
        correctOption: "optionD"
    },

    {
        question: "Siapa pemegang kekuasaan eksekutif?",
        optionA: "Presiden dan Wakil Presiden",
        optionB: "DPR",
        optionC: "MPR",
        optionD: "Mahkamah Agung",
        correctOption: "optionA"
    },

    {
        question: "Majas yang maknanya melebih-lebihkan situasi atau suatu hal disebut?",
        optionA: "Metafora",
        optionB: "Personifikasi",
        optionC: "Hiperbola",
        optionD: "Asosiasi",
        correctOption: "optionC"
    },

    {
        question: "Negara Asia yang tidak pernah di jajah?",
        optionA: "Thailand",
        optionB: "Cina",
        optionC: "Filipina",
        optionD: "Jepang",
        correctOption: "optionA"
    },

    {
        question: "Apa nama negara yang memiliki tanggal kemerdekaan yang sama seperti Indonesia?",
        optionA: "Malaysia",
        optionB: "Afghanistan",
        optionC: "Gabon",
        optionD: "Kamboja",
        correctOption: "optionC"
    },

    {
        question: "Alat ukur tekanan udara disebut?",
        optionA: "Termometer",
        optionB: "Amperemeter",
        optionC: "Voltmeter",
        optionD: "Barometer",
        correctOption: "optionD"
    },

    {
        question: "Apa nama latin dari padi?",
        optionA: "Oryza Sativa",
        optionB: "Cocos Nucifera",
        optionC: "Mangifera Indica",
        optionD: "Zea Mays",
        correctOption: "optionA"
    },

    {
        question: "Be merupakan simbol untuk unsur kimia?",
        optionA: "Boron",
        optionB: "Bariun",
        optionC: "Bromin",
        optionD: "Berilium",
        correctOption: "optionD"
    },

    {
        question: "Besaran bunyi adalah?",
        optionA: "Frekuensi",
        optionB: "Desibel",
        optionC: "Magnitude",
        optionD: "Dimensi",
        correctOption: "optionB"
    },

    {
        question: "Tari piring berasal dari daerah?",
        optionA: "Aceh",
        optionB: "Minangkabau",
        optionC: "Bali",
        optionD: "Tapanuli Utara",
        correctOption: "optionB"
    },

    {
        question: "Alat pernapasan semut adalah?",
        optionA: "Paru-paru",
        optionB: "Insang",
        optionC: "Trakea",
        optionD: "Kulit",
        correctOption: "optionC"
    },

    {
        question: "Ketakutan berlebihan pada suatu hal disebut?",
        optionA: "Amnesia",
        optionB: "Mortalitas",
        optionC: "Fobia",
        optionD: "Morbiditas",
        correctOption: "optionC"
    },

    {
        question: "Ketakutan berlebihan pada suatu hal disebut?",
        optionA: "Amnesia",
        optionB: "Mortalitas",
        optionC: "Fobia",
        optionD: "Morbiditas",
        correctOption: "optionC"
    },


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Nilai kamu kurang bagus ): berlatih lagi, ya."
        remarkColor = "#C21F08"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Nilai kamu pas, kamu pasti bisa lebih baik lagi!"
        remarkColor = "#F49307"
    }
    else if (playerScore >= 7) {
        remark = "Keren! Pertahankan, ya!"
        remarkColor = "#15800C"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}