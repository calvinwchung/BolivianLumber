import { formatDate } from '../../utils/formatDate';

const Comment = ({ comment }) => {
    const { firstName, lastName, phoneNum, email, feedback, date } = comment;

    return (
        <p>
            {feedback}
            <br />
            {firstName} {lastName} 
            <br />
            {phoneNum} {email}
            <br />
            {formatDate(date)}
        </p>
    );
};

export default Comment;