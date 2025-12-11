import VisaCard from "./VisaCard";

const LatestVisas = ({ visas }) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                visas.map(visa =>
                    // <div className="card bg-base-100 image-full w-96 shadow-sm">
                    //     <figure>
                    //         <img
                    //             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    //             alt="Shoes" />
                    //     </figure>
                    //     <div className="card-body">
                    //         <h2 className="card-title">Card Title</h2>
                    //         <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    //         <div className="card-actions justify-end">
                    //             <button className="btn btn-primary">Buy Now</button>
                    //         </div>
                    //     </div>
                    // </div>
                    <VisaCard
                        key={visa._id}
                        visa={visa}
                    ></VisaCard>
                )
            }
        </div>
        // <div className="card bg-base-100 image-full w-96 shadow-sm">
        //     <figure>
        //         <img
        //             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        //             alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Card Title</h2>
        //         <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
        // <VisaCard></VisaCard>
    );
};

export default LatestVisas;