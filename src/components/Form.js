import React, { Fragment } from 'react' 

const Form = (props) => {
    return (
        <Fragment>
            <form>
                <label for="city">City</label>
                <input type="text" id="city" name="city" onChange={props.getCity}></input>
                <label for="country">Country</label>
                <input type="text" id="country" name="country" onChange={props.getCountry}></input>
                <button onClick={props.postLocation}>Add to Wish List!</button>
            </form>
        </Fragment>
    )
}

export default Form 