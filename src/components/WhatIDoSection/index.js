import { Typography, Box, Container, Grid, List, ListItem } from "@mui/material";
import Image from 'next/image'

export const WhatIDoSection = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        paddingTop: "50px",
        paddingBottom: "50px"
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid
            item
            xs={6}
          >
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "10px",

                "img": {
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%"
                }
              }}
            >
              <Image
                src={'/img02.gif'}
                width={500}
                height={500}
                alt=""
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex"
            }}
          >
            <Box
              sx={{
                marginTop: "auto",
                marginBottom: "auto"
              }}
            >
              <Box
                sx={{
                  marginBottom: "45px"
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "40px",
                    lineHeight: "1.5",
                    display: "flex",
                    width: "100%",
                    alignItems: "flex-end",
                    gap: "24px",
                    fontWeight: "400",

                    "&:after": {
                      content: "''",
                      flexGrow: "1",
                      display: "block",
                      height: "1px",
                      backgroundColor: "currentcolor",
                      opacity: "0.1",
                      position: "relative",
                      top: "-9px"
                    }
                  }}
                >
                  What I do
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "25px",
                    lineHeight: "1.2",
                    textTransform: "uppercase",
                    color: "#c0c0c0"
                  }}
                >
                  CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginBottom: "24px"
                }}
              >
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #373737",
                    backgroundColor: "#2b2b2b",
                    borderRadius: "4px",

                    "img": {
                      maxWidth: "100%",
                      height: "auto"
                    }
                  }}
                >
                  <Image
                    src={'/html5-badge-h-solo.png'}
                    width={64}
                    height={64}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #373737",
                    backgroundColor: "#2b2b2b",
                    borderRadius: "4px",

                    "img": {
                      maxWidth: "100%",
                      height: "auto"
                    }
                  }}
                >
                  <Image
                    src={'/icons8-css-logo-128.png'}
                    width={64}
                    height={64}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #373737",
                    backgroundColor: "#2b2b2b",
                    borderRadius: "4px",

                    "img": {
                      maxWidth: "100%",
                      height: "auto"
                    }
                  }}
                >
                  <Image
                    src={'/icons8-react-100.png'}
                    width={64}
                    height={64}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #373737",
                    backgroundColor: "#2b2b2b",
                    borderRadius: "4px",

                    "img": {
                      maxWidth: "100%",
                      height: "auto"
                    }
                  }}
                >
                  <Image
                    src={'/icons8-node-js-128.png'}
                    width={64}
                    height={64}
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #373737",
                    backgroundColor: "#2b2b2b",
                    borderRadius: "4px",

                    "img": {
                      maxWidth: "100%",
                      height: "auto"
                    }
                  }}
                >
                  <Image
                    src={'/icons8-npm-logo.svg'}
                    width={64}
                    height={64}
                    alt=""
                  />
                </Box>
              </Box>
              <List
                sx={{

                  "> li + li": {
                    marginTop: "10px"
                  }
                }}
              >
                <ListItem
                  sx={{
                    borderLeft: "8px solid #2b2b2b"
                  }}
                >
                  ⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications
                </ListItem>
                <ListItem
                  sx={{
                    borderLeft: "8px solid #2b2b2b"
                  }}
                >
                  ⚡ Progressive Web Applications (PWA) in normal and SPA Stacks
                </ListItem>
                <ListItem
                  sx={{
                    borderLeft: "8px solid #2b2b2b"
                  }}
                >
                  ⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
