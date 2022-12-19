import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/bs"

import "./Thanks.css"

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>,
}
const Thanks = ({ data, updateFileHandler}) => {
    return (
        <div className="thanks-container">
            <h2> Quase Lá...</h2>
            <p>
                Sua opinião é importante, em breve você recebera um 
                desconto de 5% na sua proxima compra
            </p>
            <p> Clique no botão enviar para concluir a sua avaliação</p>
            <h3> Resumo da sua avaliação {data.name}: </h3>
            <p className="review-data">
                <span> Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span> Comentarios:</span>
                {data.comment}
            </p>
        </div>
    )
}

export default Thanks;