type SectionTitleProps = {
    index: string;
    title: string;
    comment?: string;
};

export default function SectionTitle({ index, title, comment }: SectionTitleProps) {
    return (
        <header className="section-header">
            <h2 className="section-title">
                <span className="section-index">{index}.</span>
                {title}
            </h2>
            {comment && <p className="section-comment">{"// "}{comment}</p>}
        </header>
    );
}
