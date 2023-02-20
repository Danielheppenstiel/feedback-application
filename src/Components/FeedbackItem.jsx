import { FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({item, handleDelete}) {

  const handleClick = () => {
    console.log(item.id);
  };

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => handleDelete(item.id)}>
          < FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
};

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem