import { Link } from "react-router-dom";

<div>
    <Toolbar>
        <AppBar>
         <div>          
             <div className={classes.grow}/>
             <Typography variant='h6' color='textPrimary' component='p'>
                   Hola Invitado
              </Typography></></>
                 <div className={classes.button}>
                       <Link to="/signin">
                        </Link>
                   <Button variant='outlined'>
                    <strong>Sign in</strong>
                    </Button>
                <Link to="checkout-page">
                    <IconButton aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCart fontSize='large' color='primary' />
                        </Badge>
                    </IconButton>
                </Link>
                </div>
                </Toolbar>
                 </AppBar>
                 </div>
                 );
};

