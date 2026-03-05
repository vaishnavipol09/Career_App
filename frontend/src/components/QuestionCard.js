import React from "react";

function QuestionCard({question,onYes,onNo}){

return(

<div className="question-card">

<h3>{question}</h3>

<div className="btn-group">

<button onClick={onYes}>Yes</button>
<button onClick={onNo}>No</button>

</div>

</div>

)

}

export default QuestionCard;