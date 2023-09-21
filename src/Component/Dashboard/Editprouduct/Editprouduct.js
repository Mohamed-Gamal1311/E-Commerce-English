import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './Editprouduct.css'
const Editprouduct = () => {

    const { id } = useParams();
    const [isWaiting, setIsWaiting] = useState(true);
    const [productId, setproductId] = useState('')
    const [title, setTitle] = useState('')
    const [discription, setBody] = useState('')
    const [catogry, setcatogry] = useState('')
    const [price, setprice] = useState('')
    const [image, setImage] = useState('');
    const [watingServer, setWatingServer] = useState(false)
    const navigator = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/product/' + id)
                .then(response => {
                    console.log(response.ok)
                    if (!response.ok) {
                        throw Error('Can not connect to the server!.');
                    }
                    return response.json();
                })
                .then(data => {
                    //    console.log(data); 
                    setproductId(data.productId)
                    setTitle(data.title)
                    setBody(data.discription)
                    setprice(data.price)
                    setcatogry(data.cateogry)
                    setImage(data.image)
                    setIsWaiting(false)
                }).catch(e => {
                    console.log(e.message);
                });
        }, 2000);

    }, []);





    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    const mySubmit = (e) => {
        e.preventDefault();
        const mypost = {
            id,
            title,
            price,
            image,
            discription,
            catogry
        }
        console.log(mypost)

        setWatingServer(true);
        setTimeout(() => {
            fetch('http://localhost:5000/product/' + id, {
                method: 'PUT',
                body: JSON.stringify(mypost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json))
                .then(() => {

                    setWatingServer(false);
                    navigator('/')
                });
        }, 2000);



    }
    return (
        <div className="Editproduct">
            <div className="container">
                {isWaiting && <h1>Please wait to load data ...</h1>}

                <form onSubmit={mySubmit}>


                    <div className="mb-3">
                        <label className="form-label">Title  </label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">discription  </label>
                        <textarea
                            className="form-control"
                            rows="3"
                            required
                            value={discription}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">price  </label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={price}
                            onChange={(e) => setprice(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">cateogry </label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={catogry}
                            onChange={(e) => setcatogry(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Update Image</label>
                        <input type="file" accept="image/*" onChange={handleImageUpload} />

                    </div>
                    <div className="col-auto">
                        {!watingServer && <button type="submit" className="btn btn-success mb-3">Update  </button>}
                        {watingServer && <button type="button" className="btn btn-success mb-3" disabled>Please wait</button>}
                        <br />

                    </div>



                </form>


            </div>
        </div>
    );
}

export default Editprouduct;
