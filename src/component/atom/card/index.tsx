import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const descriptions = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, molestiae. Error pariatur, beatae aut nam explicabo eaque recusandae ullam, excepturi a delectus saepe. Adipisci soluta cumque voluptatibus tempore sapiente atque."
export default function CardComponent({media, unknown = "unknown",description = descriptions} : {media : string, unknown : string,description:string}) {
  return (
    <Card sx={{maxWidth:345,backgroundColor : "#151617", padding:2}}>
    <CardActionArea>
      <CardMedia
      component={"img"}
      height={40}
      image={media}
      />
      <CardContent>
        <Typography variant="h5" component={"div"} color="white">{unknown}</Typography>
        <Typography variant="body2" sx={{color : "whitesmoke"}}>{description}</Typography>
      </CardContent>
    </CardActionArea>
    <Button size="small" color="primary">
      Visit
    </Button>
  </Card>

  )
}
