import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {props.children}
    </div>
  );
};

export default TopicListItem;
