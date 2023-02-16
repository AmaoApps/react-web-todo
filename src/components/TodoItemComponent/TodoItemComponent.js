import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from "react";
import './TodoItemStyles.css';
import piggyPositive from '../../assets/icons/piggy_positive.svg'
import piggyNegative from '../../assets/icons/piggy_negative.svg'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

function TodoItem(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ padding: 0.25 }} aria-label="recipe" src={piggyPositive}>
                    +/-
                    </Avatar>
                }
                action={
                    <Stack direction="row" sx={{ display: 'flex', alignItems: 'center'}} >
                        <Box height="">
                            <Typography>Costos + - </Typography>
                        </Box>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more">
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Stack>
                }
                title={props.text}
                subheader="September 14, 2016"
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <CardActions>
                        <Stack direction="row" className="stack-card-content-action-payment">
                            <IconButton aria-label="add to favorites">
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="add to favorites" onClick={props.onDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    </CardActions>
                </CardContent>
            </Collapse>
        </Card>
      
      /*
        <li>
            <p>{props.text}</p>
        </li>*/
    );
}

export { TodoItem };