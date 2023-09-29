import './form.css'
export default function Form({handleChange, formInputData, handleSubmit, handleCancleClick}){

    return(
    
    <div className='modal'>
    <h1>DATA FORM</h1>
    <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className ="col-25">
            <label htmlFor="name">Name:</label>
        </div>
        <div className ="col-75">
            <input type="text" id="name" name="name" value={formInputData.name} placeholder='Your name...' onChange={handleChange} required/>
        </div>
        </div>

        <div className='row'>
        <div className ="col-25">
            <label htmlFor="age">Age:</label>
        </div>
        <div className ="col-75">
            <input type="number" id="age" name="age" value={formInputData.age} placeholder='Your age...' onChange={handleChange} required/>       
        </div>
        </div>

        <div className='row'>
        <div className ="col-25">
            <label htmlFor="email">Email:</label>
        </div>
        <div className ="col-75">
            <input type="email" id="email" name="email" value={formInputData.email} placeholder='Your Email...' onChange={handleChange} required/>        
        </div>
        </div>

        <div className='row'>
        <div className ="col-25">
            <label htmlFor="mobile">Mobile:</label>
        </div>
        <div className ="col-75">
            <input type="tel" id="mobile" name="mobile" value={formInputData.mobile} placeholder='Your Mobile number...' onChange={handleChange} required/>
        </div>
        </div>

        <div className='row'>
        <div className ="col-25">
            <label htmlFor="city">City:</label>
        </div>
        <div className ="col-75">
            <input type="text" id="city" name="city" value={formInputData.city} placeholder='Your City...' onChange={handleChange} required/>
        </div>
        </div>
        <div>
            <input type="submit" value="Submit" id="submit" />
            <button id='cancle' onClick={handleCancleClick}>Cancle</button>
        </div>
        
    </form>
    </div>
    )
}