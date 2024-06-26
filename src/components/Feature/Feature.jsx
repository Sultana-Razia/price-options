import PropTypes from 'prop-types';

const Feature = ({ feature }) => {
    return (
        <div className='pl-3'>
            <li>{feature}</li>
        </div>
    );
};


Feature.propTypes = {
    feature: PropTypes.string,
}

export default Feature;