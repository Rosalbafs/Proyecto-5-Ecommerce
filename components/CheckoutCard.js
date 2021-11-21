import { useState } from "react";

const classes = useStyles();
const [expanded, setExpanded] = useState(false);
const [{basket}, dispatch] = useStateValue();

const handleExpandClick = () => {
    setExpanded(!expanded);
};

const removeItem = ()=> dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
})

return (
    <Card className={classes.root}>
        <CardHeader
        action={
            <Typography
            className={classes.action}
        }
        >
)
