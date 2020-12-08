import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import MuiPhoneNumber from "material-ui-phone-number";

const FormElement = props => {

    const myStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: '0 2px 16px'
    };

    let inputChildren = undefined;

    let inputComponent = (
        <TextField
            fullWidth
            variant="outlined"
            label={props.title}
            error={!!props.error}
            type={props.type}
            select={props.type === 'select'}
            name={props.propertyName}
            id={props.propertyName}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            children={inputChildren}
            helperText={props.error}
            style={myStyle}
        >
            {inputChildren}
        </TextField>
    );

    if (props.propertyName === 'phone') {
        inputComponent = (
            <MuiPhoneNumber
                defaultCountry={'ru'}
                regions={'ex-ussr'}
                fullWidth
                variant="outlined"
                label={props.title}
                error={!!props.error}
                name={props.propertyName}
                id={props.propertyName}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                autoComplete={props.autoComplete}
                placeholder={props.placeholder}
                children={inputChildren}
                helperText={props.error}
                style={myStyle}
            />
        )
    }

    return inputComponent;
};

FormElement.propTypes = {
    propertyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
    error: PropTypes.string,
    autoComplete: PropTypes.string,
};

export default FormElement;