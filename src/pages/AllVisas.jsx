
const AllVisas = () => {
    return (
        <div>
            <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
                <li><a>Item 1</a></li>
                <li>
                    <details open>
                        <summary>Parent item</summary>
                        <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li><a>item 1</a></li>
                                        <li><a>item 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            All Visas
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllVisas;