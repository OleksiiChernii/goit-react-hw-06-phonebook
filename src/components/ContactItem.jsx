import { useDispatch } from "react-redux"
import { removeContact } from "../redux/contactsSlice";
import PropTypes from 'prop-types';

export const ContactItem = ({id, name, number}) => {
    const dispatch = useDispatch();
    const handler = id => {
        dispatch(removeContact(id));
    }

    return (
        <li>
            <p>{name}: {number} <button onClick={() => handler(id)}>delete</button></p>
        </li>
    )
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}