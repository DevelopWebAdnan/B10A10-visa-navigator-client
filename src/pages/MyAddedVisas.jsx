import { useLoaderData, useParams } from "react-router-dom";
import MyAddedVisa from "../components/MyAddedVisa";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyAddedVisas = () => {

    const myLoadedVisas = useLoaderData();

    const { email } = useParams();

    const [myVisas, setMyVisas] = useState(myLoadedVisas);

    const { user } = useContext(AuthContext);

    // console.log('myLoadedVisas: ', myLoadedVisas, 'email from useParams(): ', email, 'user?.email: ', user?.email, 'myVisas: ', myVisas);

    return (
        <div>
            <title>MyAddedVisas | Visa Navigator</title>
            <h3 className="font-bold text-sm md:text-base lg:text-lg text-gray-800">My Added Visas: {myVisas.length}</h3>

            {email === user?.email && <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        // myVisas.map((myVisa, index) => <MyAddedVisa
                        myVisas.map((myVisa) => <MyAddedVisa
                            key={myVisa?._id}
                            myVisa={myVisa}
                            myVisas={myVisas}
                            setMyVisas={setMyVisas}
                        ></MyAddedVisa>)
                    }
                </div>
            </>
            }
        </div>
    );
};

export default MyAddedVisas;