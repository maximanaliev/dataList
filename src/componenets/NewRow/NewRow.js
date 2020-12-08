import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import FormElement from "../UI/FormElement";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import withStyles from "@material-ui/core/styles/withStyles";
import {addData} from "../../store/actions/actions";
import {toast} from "react-toastify";
import {css} from "glamor";

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        borderBottom: '2px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
            borderBottom: 'none',
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderBottom: '2px solid rgba(0, 0, 0, .125)',
    },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "0 auto",
    },
    inputBlock: {
        display: 'flex'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        textAlign: "left",
        fontWeight: "bold",
        color: '#1976d2'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    btn: {
        fontSize: "15px",
        textTransform: "none",
    },
}));

const NewRow = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState('');
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const data = {id, firstName, lastName, email, phone};

    const submitHandler = e => {
        e.preventDefault();
        dispatch(addData(data, {dataAddSuccess}));
    };

    const dataAddSuccess = () => {
        setExpanded(null);
        setId('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        toast.info("Запись добавлена", {
            className: css({
                background: "#595959 !important",
                textAlign: "center",
                border: "1px solid #FFF",
                borderRadius: "15px !important",
                marginBottom: "0 !important"
            }),
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    return (
        <>
            <Accordion
                className={classes.container}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    <Typography className={classes.heading}>
                        Добавить
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <form onSubmit={submitHandler}>
                        <div className={classes.inputBlock}>
                            <FormElement
                                required
                                propertyName="id"
                                value={id}
                                title="Номер id"
                                onChange={event => setId(event.target.value)}
                                placeholder="Введите id"
                                autoComplete="new-id"
                            />
                            <FormElement
                                required
                                propertyName="firstName"
                                value={firstName}
                                title="Имя"
                                onChange={event => setFirstName(event.target.value)}
                                placeholder="имя"
                                autoComplete="new-firstName"
                            />
                            <FormElement
                                required
                                propertyName="lastName"
                                value={lastName}
                                title="Фамилия"
                                onChange={event => setLastName(event.target.value)}
                                placeholder="фамилия"
                                autoComplete="new-secondName"
                            />
                            <FormElement
                                required
                                type="email"
                                propertyName="email"
                                value={email}
                                title="Email"
                                onChange={event => setEmail(event.target.value)}
                                placeholder="email"
                                autoComplete="new-email"
                            />
                            <FormElement
                                required
                                propertyName="phone"
                                value={phone}
                                title="Номер телефона"
                                onChange={value => setPhone(value)}
                                placeholder="номер телефона"
                                autoComplete="new-phone"
                            />
                        </div>
                        <Button
                            className={classes.btn}
                            type="submit"
                            variant="outlined"
                            color="primary"
                        >
                            Добавить в таблицу
                        </Button>
                    </form>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default NewRow;