/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, supplier, taste, category, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
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
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="grid md:grid-cols-3 items-center p-3 bg-[#F5F4F1] rounded-xl">
            <div>
                <figure>
                    <img src={photo} alt="Coffee" />
                </figure>
            </div>
            <div className="">
                <p className="text-left">
                    <span className="font-bold">Name: </span>{name}
                </p>
                <p className="text-left">
                    <span className="font-bold">Taste: </span>{taste}
                </p>
                <p className="text-left">
                    <span className="font-bold">Category: </span>{category}
                </p>
                <p className="text-left">
                    <span className="font-bold">Supplier: </span>{supplier}
                </p>
            </div>
            <div className="flex flex-col mx-auto my-auto gap-2 me-0">
                <button className="btn btn-warning">View</button>
                <button className="btn btn-neutral">Edit</button>
                <button className="btn btn-error"
                    onClick={() => handleDelete(_id)}
                >Delete</button>
            </div>
        </div>
    );
};

export default CoffeeCard;