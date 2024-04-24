import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
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

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="mr-8"><img className="w-[250px] h-[250px]" src={photo} alt="Coffee" /></figure>
            <div className="flex ">
                <div>
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Supplier : {supplier}</p>
                    <p>Taste : {taste}</p>
                    <p>Category : {category}</p>
                    <p>Details : {details}</p>
                </div>
                <div className="card-actions justify-end mr-4">
                    <div className="join join-vertical space-y-4">
                        <button className="btn ">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn ">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;