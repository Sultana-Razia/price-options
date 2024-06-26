import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30.00,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 50.00,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free fitness assessment",
                "Group fitness classes",
                "Free guest passes (2 per month)"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 80.00,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free fitness assessment",
                "Group fitness classes",
                "Free guest passes (4 per month)",
                "Access to sauna and pool",
                "Discount on personal training sessions"
            ]
        },
        {
            "id": 4,
            "name": "Elite Membership",
            "price": 120.00,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free fitness assessment",
                "Group fitness classes",
                "Free guest passes (6 per month)",
                "Access to sauna and pool",
                "Unlimited personal training sessions",
                "Access to exclusive fitness events",
                "Priority booking for classes"
            ]
        }
    ];


    return (
        <div>
            <h2 className="text-4xl">Best Prices</h2>
            {
                priceOptions.map(option => <PriceOption
                    key={option.id}
                    option={option}
                ></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;