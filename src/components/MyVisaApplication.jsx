import Swal from "sweetalert2";
import MyVisaApplications from "../pages/myVisaApplications";

// const MyVisaApplication = ({visaApplication}) => {
const MyVisaApplication = ({myApplications, setMyApplications, myApplication}) => {

    // console.log('visaApplication: ', visaApplication);
    console.log('myApplication: ', myApplication);
    const { _id, image, countryName, selectedVisa, time, fee, validity, applicationMethod, date, fname, lname, email } = myApplication;

    // const {user} = useContext(AuthContext);

    const handleCancel = (_id) => {
        console.log(_id);
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

                // fetch(`http://localhost:5000/addedVisas/${_id}`, {
                // fetch(`http://localhost:5000/visas/${_id}`, {
                fetch(`http://localhost:5000/visaApplications/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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
            <h3 className="font-bold text-lg">My first name: {fname}</h3>
            <h3 className="font-bold text-lg">My last name: {lname}</h3>

            <h2 className='font-black'>My ({email}) visa application id: {_id}</h2>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Country"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{countryName}</h2>
                    <p>Visa_type: {selectedVisa}</p>

                    <p>Processing_time: {time}</p>
                    <p className="py-4">Fee: {fee}</p>

                    <p>Validity: {validity}</p>
                    <p>Application_method: {applicationMethod}</p>
                    <p className="py-4">Applied date: {date}</p>

                    <h3 className="font-bold text-lg">Applicant's name: {fname + " " + lname}</h3>
                    {/* <h3 className="font-bold text-lg">Last Name! {user?.displayName}</h3> */}
                    <h3 className="font-bold text-lg">Email: {email}</h3>
                    <div className="card-actions">
                        <button onClick={() => handleCancel(_id)} className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplication;