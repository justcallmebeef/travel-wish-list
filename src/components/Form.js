import React, { Fragment } from 'react' 

const Form = (props) => {
    console.log(props)
    return (
        <Fragment>
            <form>
                <label for="city">City</label>
                <input type="text" id="city" name="city" onChange={props.getCity}></input>
                <label for="country">Country</label>
                <select id="country" name="country" onChange={props.getCountry}>
                    {props.getCountryList()}
                </select>
                <button onClick={props.postLocation}>Add to Wish List!</button>
            </form>
        </Fragment>
    )
}

export default Form 