import Swal from "sweetalert2";

const MyVisaApplication = ({ myApplications, setMyApplications, myApplication }) => {

    const { _id, image, countryName, selectedVisa, time, fee, validity, applicationMethod, date, fname, lname, email } = myApplication;

    const handleCancel = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b10-a10-visa-navigator-server-ten.vercel.app/visaApplications/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Removed!",
                                text: "Your Visa Application has been removed.",
                                icon: "success"
                            });

                            const remaining = myApplications.filter(myApplctn => myApplctn._id !== _id);
                            setMyApplications(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-6 pt-6">
                    <img
                        src={image}
                        alt="Country"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{countryName}</h2>
                    <p>Visa_type: {selectedVisa}</p>
                    <p>Processing_time: {time}</p>
                    <p>Fee: {fee}</p>
                    <p>Validity: {validity}</p>
                    <p>Application_method: {applicationMethod}</p>
                    <p>Applied date: {date}</p>
                    <h3 className="font-bold text-lg">Applicant's name: {fname + " " + lname}</h3>
                    <h3 className="font-bold text-lg">Email: {email}</h3>
                    <div className="card-actions">
                        <button onClick={() => handleCancel(_id)} className="btn text-base-100 bg-[#00CC99]">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplication;