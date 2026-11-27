import React from "react";
import { LoremIpsum } from "lorem-ipsum";
function Card({ color }) {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            min: 2,
            max: 2
        },
        wordsPerSentence: {
            min: 2,
            max: 2
        }
    })
    return (
        <div>
            <div className="border-1 border-white flex flex-col gap-1 justify-center items-center p-5">
                <div className="size-40 content-center text-center text-gray-400" style={{ backgroundColor: color }}>
                    600 X 600
                </div>
                <p className="text-white text-center overflow-hidden whitespace-nowrap">{lorem.generateWords(5)}</p>
            </div>
        </div>
    )
}
export default Card;