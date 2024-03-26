import * as React from 'react';
// import { Wrapper, Heading, Description } from './style';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image'

function IntroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        minHeight: "70vh",
        display: "flex",
        position: "relative",
        zIndex: "1",
        backgroundImage: "linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%)",
        color: "#fff"
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginTop: "auto",
          width: "100%",
          paddingTop: "50px",
          paddingBottom: "50px"
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center"
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "45px",
                lineHeight: "1.5",
                marginBottom: "24px",
                color: "#fff",
                fontWeight: "600"
              }}
            >
              Welcome, I am Syed Talha Khalid
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#e9e9e9",
                fontSize: "20px",
                lineHeight: "1.5"
              }}
            >
              A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: "-1",

          "img": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }}
      >
        {/* <Image
          src="/img01.jpg"
          width={1920}
          height={500}
          alt=""
        /> */}
      </Box>
    </Box>
  );
}
export default IntroSection;