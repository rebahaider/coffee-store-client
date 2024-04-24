import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if(data.insertedId){
                    Swal.fire({
                        title: 'Successfully!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div className="bg-base-200 p-24">
            <h2 className="text-center font-bold text-3xl mb-10">Add New Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form coffee name & available quantity row */}
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <h2 className="font-bold">Coffee Name</h2>
                        <label>
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered input-secondary w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <h2 className="font-bold">Available Quantity</h2>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered input-secondary w-full" />
                    </div>

                </div>
                {/* form supplier & taste row */}
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <h2 className="font-bold">Supplier</h2>
                        <label>
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered input-secondary w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <h2 className="font-bold">Taste</h2>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered input-secondary w-full" />
                    </div>

                </div>
                {/* form category & details row */}
                <div className="md:flex mb-8">
                    <div className="md:w-1/2">
                        <h2 className="font-bold">Category</h2>
                        <label>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered input-secondary w-full" />
                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <h2 className="font-bold">Details</h2>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered input-secondary w-full" />
                    </div>

                </div>
                {/* form photo row */}
                <div className="flex mb-8">
                    <div className="md:w-full">
                        <h2 className="font-bold">Photo</h2>
                        <label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered input-secondary w-full" />
                        </label>
                    </div>

                </div>
                <div>
                    <input type="submit" value="Add Coffee" className="btn btn-outline btn-secondary w-full" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;