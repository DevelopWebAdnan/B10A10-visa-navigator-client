import Heading from './Heading';

const Users = ({ userData }) => {

    // console.log(userData);

    return (
        <div>
            <Heading title="Happy Clients who have Registered Their Account Here"></Heading>
            <Heading subtitle="Embark on a Global Exploration: Experience Joy in 30+ countries and Across the World"></Heading>
            <h3 className="text-xs md:text-sm lg:text-lg text-stone-800 dark:text-white">Our Users: {userData.length}</h3>
            
            <ul className="list bg-base-100 dark:bg-gray-800 text-base-content dark:text-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Registered users this year</li>

                {
                    userData.length === 0 ? (
                        <p>No data found</p>
                    ) : (
                        userData.map((user, idx) => <li className="list-row"
                            key={user._id}
                        >
                            <div className="text-4xl font-thin opacity-30 tabular-nums">{idx + 1}</div>
                            <div><img className="size-10 rounded-box" src={user?.photo} /></div>
                            <div>
                                <div>{user?.name}</div>
                            </div>
                            <div>
                                <div>Created At</div>
                                <div className="text-xs uppercase font-semibold opacity-60">{user.createdAt}</div>
                            </div>
                            <div className='list-col-wrap'>
                                <div>Last Login At</div>
                                <div className="text-xs uppercase font-semibold opacity-60">{user.lastSignInTime}</div>
                            </div>
                        </li>)
                    )
                }
            </ul>
        </div>
    );
};

export default Users;