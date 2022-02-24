import "./ChapterTitle.css";

const ChapterTitle  = (props) => {
    return (
        <div className="chapter-title">
            <span>{props.title}</span>
        </div>
    )
}

export default ChapterTitle;