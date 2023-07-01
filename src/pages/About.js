import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15, textAlign:"center", "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        } , "& p":{
          textAlign:"justify"
        }    }}>
        <Typography variant="h4">
         Welcome To My Biriyani's Hub
        </Typography>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eaque eum accusamus nostrum a, voluptate modi cum tenetur repudiandae quidem quisquam vel iure expedita laborum quae porro soluta quod repellendus deserunt quis vitae? Similique, consequuntur doloribus quis iure quia, tempore nemo mollitia et rem numquam error itaque, totam nihil ipsum! Quod veritatis quam illum, doloremque tempora excepturi laboriosam qui asperiores fugiat minima nobis distinctio eos repudiandae itaque exercitationem error aperiam libero ipsam illo cum. Minus quisquam natus tenetur exercitationem delectus magni voluptatibus laborum! Culpa molestiae dicta cum nobis eveniet reprehenderit dolore, eligendi id ex ratione nostrum blanditiis architecto quidem asperiores?</p>
        <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non culpa earum similique rerum fugit illo, dicta quod neque repudiandae minus nostrum. Beatae illum omnis consequuntur eius quasi dolorum optio, nostrum quibusdam, in, nobis rerum incidunt expedita dolore perspiciatis soluta aperiam? Nemo, saepe laborum. Dolorem ipsum ad adipisci atque natus, nisi quos modi repudiandae. Sequi porro voluptatibus blanditiis architecto dicta ut, voluptas, quae amet quis numquam aperiam ad repudiandae cum aspernatur impedit delectus qui ipsam corporis expedita, sed quisquam? Eaque perferendis error hic. Rem repellendus hic adipisci at aspernatur molestias officiis nobis reiciendis, quibusdam dolorum modi facere? Sint, dicta minima.</p>
      </Box>
    </Layout>
  )
}

export default About
