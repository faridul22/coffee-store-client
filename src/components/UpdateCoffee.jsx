import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(updatedCoffee)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Updated has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-xl font-semibold text-center">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" name="name" defaultValue={name} required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee quantity" className="input input-bordered" name="quantity" defaultValue={quantity} required />
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter Supplier" className="input input-bordered" name="supplier" defaultValue={supplier} required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Taste" className="input input-bordered" name="taste" defaultValue={taste} required />
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex gap-5 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Category" className="input input-bordered" name="category" defaultValue={category} required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Enter Coffee Details" className="input input-bordered" name="details" defaultValue={details} required />
                    </div>
                </div>
                {/* form row */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter photo url" className="input input-bordered" name="photo" defaultValue={photo} required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-[#D2B48C] hover:bg-[#c39f70e3] text-[#331A15] border-2 border-[#331A15]" type="submit" value="Update Coffee" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;