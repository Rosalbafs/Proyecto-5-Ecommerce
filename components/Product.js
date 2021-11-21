transition: theme.transition.create("transform", {
    duration: theme.transitions.duration.shortest,
}),
},
expandOpen: {
    transform: "rotate(180deg)",
},
}));

export default function Product({product : {id, name, productType, image, price, rating, description}})
const classes = useStyles();
conts [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
    setExpanded(!expanded);
};

const addToBasket = () => {
    dispatchEvent({ 
        type: actionTypes.ADD_TO_BASKET,
        item: {
            id,
            name,
            productType,
            image,
            price,
            rating,
            description,
        }
    })
}

return (
    <Card className={classes.root}>
       CardHeader
       action={
           <Typography
           className={classes.action}
           variant='h5'
           color='textSecondary'
           >
               {accounting.formatMoney(price, "$")}
            </Typography>
       } 
    title="name"
    subheader="in Stock"
    />
    <CardMedia
    className={classes.media}
    image="image"
    title=""
    />
    <CardContent>
    <Typography variant='body2' color='textSecondary' component='p'>
     {productType}
    </Typography>
    </CardContent>
    <CardActions disableSpacing>
    <IconButton aria-label='Add to Cart'>
        <AddShoppingCart fontSize='large' />
    </IconButton>
{Array(rating)
.fill()
.map((
    <p>descripcion del producto</p>
))}
<IconButton
className={clsx(classes.expand,{
    [classes.expandOpen]: expanded,
})}
onClick={handleExpandClick}
aria-expanded={expanded}
aria-label="show more"
>
<ExpandMoreIcon />
</IconButton>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
<Typography paragraph>{description}</Typography>
</CardContent>
</Collapse>
</Card>
);
}
