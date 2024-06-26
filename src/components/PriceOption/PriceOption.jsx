import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='flex flex-col bg-blue-300 p-4 rounded-md pt-6 mt-8'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h4 className='text-2xl text-center my-6'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature
                        key={index}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button className='mt-6 bg-green-400 w-full py-2 text-xl font-medium rounded-md hover:bg-green-600'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;