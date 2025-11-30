import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const GoogleRecaptcha = (props) => {
    function onChange(value) {

    }
    return (
        <>
            <ReCAPTCHA sitekey="6LfSiIYoAAAAAArTQAKKdYR51IqP0gnzIbVHJbnv" onChange={onChange} />,
        </>
    )
}

GoogleRecaptcha.propTypes = {}

export default GoogleRecaptcha
