import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornments from "./InputAdornments";
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';

function Login(props){

    return(
        <div align="center">

            <h2 style={{color:"#347299"}}>
                Login <br></br>
                <ListItemIcon>
                <VpnKeySharpIcon color="primary" fontSize={"large"}/>
            </ListItemIcon></h2>


      
            <AccountCircle />
        
            <TextField id="User Name" label="User Name" />
          
            <InputAdornments />
            <br></br>
            <Button variant="outlined">Login</Button>
            <br></br><br></br>

            {/* {/<Router>/} */}
                <Link to="/Login" style={{color:"#347299"}}>Forgot Username / Password</Link>

            {/*        <Route path="/Login">*/}
            {/*            <Login/>*/}
            {/*        </Route>*/}

            {/* {/</Router>/} */}




        </div>
    );
        }
export default Login;
