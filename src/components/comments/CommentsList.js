import { useSelector } from 'react-redux'
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectComments } from './commentsSlice'
import ContactForm from '../ContactForm';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ id }) => {    
    const comments = useSelector(selectComments(id));

    const isLoading = useSelector((state) => state.comments.isLoading);
    const errMsg = useSelector((state) => state.comments.errMsg);
    if (isLoading) {
        return (
            <Col>
                <Loading />
            </Col>
        );
    }

    if (errMsg) {
        return (
            <Col>
                <Error errMsg={errMsg} />
            </Col>
        );
    }
    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <ContactForm id={id} />
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments yet.
        </Col>
    );
};

export default CommentsList;