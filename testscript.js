document.getElementById("rangeone").addEventListener("change", SetScore);

const response_array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const question_set = [
    "question_one", 
    "question_two", 
    "question_three", 
    "question_four", 
    "question_five",
    "question_six",
    "question_seven",
    "question_eight",
    "question_nine",
    "question_ten",
    "question_eleven",
    "question_twelve",
    "question_thirteen",
    "question_fourteen",
    "question_submit"
    ];
var question_counter = 0;
var current_question = question_set[question_counter];
var question_text = "";
var high_text = "";
var low_text = "";
Questions();

function Arrow(direction) {
    
    if (direction == "left") {
        if (question_counter == 0) {
            question_counter = question_set.length;
        }
        current_question = question_set[--question_counter];
        
    } else {
        if (question_counter == question_set.length - 1) {
            question_counter = -1;
        }
        current_question = question_set[++question_counter];
    }
    Questions();
}

function Questions() {
    SetDisplayValue(question_counter);
    switch(current_question) {
        case "question_one":
            question_text = "How much do you enjoy cold weather?";
            high_text = "Love it";
            low_text = "Hate it";
            break;
        case "question_two":
            question_text = "In terms of safety, how do you feel when driving in the winter?";
            high_text = "Very safe";
            low_text = "Very unsafe";
            break;
       case "question_three":
            question_text = "If money were not an issue, what type of climate would you move to?";
            high_text = "Warmer";
            low_text = "Colder";
            break;
        case "question_four":
            question_text = "To what extent does your mood change during winter?";
            high_text = "Drastic changes";
            low_text = "No changes";
            break;
        case "question_five":
            question_text = "How do you typically feel during winter?";
            high_text = "Happy";
            low_text = "Sad";
            break;
        case "question_six":
            question_text = "Compared to other seasons, how physically active are you in winter?";
            high_text = "Much more";
            low_text = "Much less";
            break;
        case "question_seven":
            question_text = "What type of memories do you have surrounding winter?";
            high_text = "Good memories";
            low_text = "Bad memories";
            break;
        case "question_eight":
            question_text = 'At what temperature (F) would you start to say "It is cold outside"? (65, 55, 45...)';
            high_text = "65";
            low_text = "25 or lower";
            break;
        case "question_nine":
            question_text = "How often have you faced dangerous cold and/or hypothermia?";
            high_text = "Many times";
            low_text = "Never";
            break;
        case "question_ten":
            question_text = "How involved are you in recreational winter activities?";
            high_text = "Very involved";
            low_text = "Rarely involved";
            break;
        case "question_eleven":
            question_text = "When considering going outside, how important are insects in your consideration?";
            high_text = "Very important/do care";
            low_text = "Not important/don't care";
            break;
        case "question_twelve":
            question_text = "Where would you rate winter as a season, 1 being horrible and 5 being amazing?";
            high_text = "5";
            low_text = "1";
            break;
        case "question_thirteen":
            question_text = "If holidays never existed during any season, where would you rate winter?";
            high_text = "5";
            low_text = "1";
            break;
        case "question_fourteen":
            question_text = "Did you like taking this survey?";
            high_text = "Yes";
            low_text = "No";
            break;
        case "question_submit":
            question_text = "Submit Survey";
            high_text = "";
            low_text = "";
            break;
    }
    document.getElementById("question_text").textContent = question_text;
    document.getElementById("high_text").textContent = high_text;
    document.getElementById("low_text").textContent = low_text;
    if (current_question == "question_submit") {
        document.getElementById("question_text").innerHTML = '<h1 class="col-auto mt-5 mb-5 click_selector text_decoration" id="question_text"><a href=”mailto:sidney.cheney@gmail.com">Submit Survey</a></h1>';
    }
}
function SetScore() {
    response_array[question_counter] = document.getElementById("rangeone").value;
}

function SetDisplayValue(question) {
    if (response_array[question] != 0) {
        document.getElementById("rangeone").value = response_array[question];
    } else {
        document.getElementById("rangeone").value = 3;
    }
}

function SubmitSurvey() {
    response_array[14] = "submited"
    console.log("submited yay!");
    console.log(response_array);
}
