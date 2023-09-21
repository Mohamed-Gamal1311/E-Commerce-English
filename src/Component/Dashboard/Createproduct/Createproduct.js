import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Createproduct.css'
const Createproduct = ()=>{

    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [discription, setdiscription] = useState('')
    const [price, setprice] = useState('')
    const [catogry, setcatogry] = useState('')
    const [image, setImage] = useState('')
    const [watingServer, setWatingServer] = useState(false)
    const navigator = useNavigate();
    const mySubmit = (e)=>{
        e.preventDefault();
        const mypost = {
            title ,
           discription ,
            id ,
            catogry,
            price,
            image,
        }
        console.log(mypost)

        setWatingServer(true);
        setTimeout(() => {
        fetch('http://localhost:5000/product', {
            method: 'POST',
            body: JSON.stringify(mypost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                console.log('new post added');
                setWatingServer(false);
                navigator('/')
            });
        }, 2000);



    }
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
          setImage(e.target.result);
        };
    
        reader.readAsDataURL(file);
      };
    return(
        <div className="Createproduct">
<div className="container">
            <form onSubmit={mySubmit}>
                <div className="mb-3">
                    <label for="exampleFormControlInput0" className="form-label"> Id  </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput0" 
                    required 
                    value={id} 
                    onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title  </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">discription </label>
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                        required
                        value={discription}
                        onChange={(e) => setdiscription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Price </label>
                    <input 
                    type="number" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                        required
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Catogry </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                        required
                        value={catogry}
                        onChange={(e) => setcatogry(e.target.value)}
                    />
                </div>
                <div> 
                    <label className="image-Add">Add Image</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                </div>

                <div class="col-auto">
           {!watingServer &&<button type="submit" class="btn btn-success mb-3">Create  </button>}
           {watingServer && <button type="button" class="btn btn-success mb-3" disabled>Please wait</button>}
                </div>


                <br/>
            
             
    </form>

</div>
</div>
    );
}

export default Createproduct;