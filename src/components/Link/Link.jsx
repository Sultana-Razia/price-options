import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <li className='hover:bg-yellow-100 px-3 py-1 rounded-xl'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;