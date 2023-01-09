import React from 'react'
import { useState } from 'react'

export default function Additem({addTodo}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !description){
            alert("Title or Description cannot be blank");
        }
        else{addTodo(title,description)
        setTitle("")
        setDescription("")
        }
    }
    
    return (

        <>
            <div className='container text-center'>
                <div className="alert alert-success" role="alert">
                    <h3>Want to add Notes ?</h3>
                    <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add
                    </button>
                </div>

            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='container'>
                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea className="form-control" id="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                                    </div>
                                    <button type="submit" data-bs-dismiss="modal" className="btn btn-sm btn-success">Add Item</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
