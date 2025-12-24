import React from 'react';

const Users = ({ userData }) => {

    console.log(userData);

    const handleDeleteUser = (_id) => {
        console.log(_id);
    }
    return (
        <div>
            <h3 className="text-3xl">Users: {userData.length}</h3>

            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Logged in users this week</li>

                {
                    userData.map(user => <li className="list-row"
                        key={user._id}
                    >
                        <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                        <div><img className="size-10 rounded-box" src={user?.photo} /></div>
                        <div className="list-col-grow">
                            <div>{user.name}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{user.email}</div>
                        </div>
                        <div className="list-col-grow">
                            <div>Created At</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{user.createdAt}</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            {/* <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg> */}E
                        </button>
                        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-square btn-ghost">
                            {/* <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg> */}X
                        </button>
                    </li>)
                }
                {/* <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                    <div className="list-col-grow">
                        <div>Dio Lupa</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                    </button>
                </li> */}

            </ul>
        </div>
    );
};

export default Users;