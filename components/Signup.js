import { useState } from "react";
import Avatar from '@materia-ui/core/Avatar';
import Button from '@materia-ui/core/Button';
import CssBaseline from '@materia-ui/core/CssBaseline';
import TextField from '@materia-ui/core/TextField';
import FormControlLabel from '@materia-ui/core/FormControlLabel';
import Checkbox from '@materia-ui/core/Checkbox';
import Link from '@materia-ui/core/Link';
import Grid from '@materia-ui/core/Grid';
import Box from '@materia-ui/core/Box';
import LockOutlinedIcon from '@materia-ui/core/LockOutlinedIcon';
import Typography from '@materia-ui/core/Typography';
import { makeStyles } from '@materia-ui/core/styles';
import Container from '@materia-ui/core/Container';
import {Link as RouteLink, useHistory} from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright'}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website     
    )
}

form: {
    width: '100%' ,
    marginTop: theme.spacing(3, 0, 2),
},

export default function Signup() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signup = (e) =>{
        export.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            console.log(auth);
            if (auth){
                history
            }
        }).catch(err=>alert(err.message))
    }
    
   return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Signup
        </Typography>
        <form className={classes.form} noValidate>

        


         
)