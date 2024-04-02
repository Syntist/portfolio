import { Typography, Box, Container, Grid, List, ListItem, Card } from "@mui/material";
import Image from 'next/image'

export const ExperienceSection = (props) => {
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
            Experiences
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box
              sx={{
                backgroundColor: "#2b2b2b",
                border: "1px solid #373737",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <Box
                sx={{
                  padding: "24px",
                  backgroundColor: "rgb(20, 124, 244)",
                  borderRadius: "8px 8px 0 0"
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "26px",
                    lineHeight: "1.2",
                    color: "#fff"
                  }}
                >
                  Facebook
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "100%",
                    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                    width: "100px",
                    height: "100px",
                    margin: "24px auto -70px",

                    "img": {
                      height: "auto",
                      maxWidth: "100%",
                      borderRadius: "inherit"
                    }
                  }}
                >
                  <Image
                    src={'/facebookLogo.f46d68b24e9b4f73ee8b.png'}
                    width={100}
                    height={100}
                    alt=""
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "54px 24px 24px"
                }}
              >
                <Box
                  sx={{
                    marginBottom: "24px"
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "34px",
                      lineHeight: "1.5",
                      color: "#fff",
                      marginBottom: "8px"
                    }}
                  >
                    Software Engineer
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "18px",
                      lineHeight: "1.2",
                      color: "#c0c0c0",
                      marginBottom: "8px"
                    }}
                  >
                    June 2018 – Present
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#c0c0c0"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box
              sx={{
                backgroundColor: "#2b2b2b",
                border: "1px solid #373737",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <Box
                sx={{
                  padding: "24px",
                  backgroundColor: "rgb(164, 36, 12)",
                  borderRadius: "8px 8px 0 0"
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "26px",
                    lineHeight: "1.2",
                    color: "#fff"
                  }}
                >
                  Quora
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "100%",
                    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                    width: "100px",
                    height: "100px",
                    margin: "24px auto -70px",

                    "img": {
                      height: "auto",
                      maxWidth: "100%",
                      borderRadius: "inherit"
                    }
                  }}
                >
                  <Image
                    src={'/quoraLogo.85eb29f4d52320c8ed99.png'}
                    width={100}
                    height={100}
                    alt=""
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "54px 24px 24px"
                }}
              >
                <Box
                  sx={{
                    marginBottom: "24px"
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "34px",
                      lineHeight: "1.5",
                      color: "#fff",
                      marginBottom: "8px"
                    }}
                  >
                    Front-End Developer
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "18px",
                      lineHeight: "1.2",
                      color: "#c0c0c0",
                      marginBottom: "8px"
                    }}
                  >
                    May 2017 – May 2018
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#c0c0c0"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box
              sx={{
                backgroundColor: "#2b2b2b",
                border: "1px solid #373737",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <Box
                sx={{
                  padding: "24px",
                  backgroundColor: "rgb(252, 92, 100)",
                  borderRadius: "8px 8px 0 0"
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "26px",
                    lineHeight: "1.2",
                    color: "#fff"
                  }}
                >
                  Airbnb
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "100%",
                    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                    width: "100px",
                    height: "100px",
                    margin: "24px auto -70px",

                    "img": {
                      height: "auto",
                      maxWidth: "100%",
                      borderRadius: "inherit"
                    }
                  }}
                >
                  <Image
                    src={'/airbnbLogo.e8497507db673acd3991.png'}
                    width={100}
                    height={100}
                    alt=""
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "54px 24px 24px"
                }}
              >
                <Box
                  sx={{
                    marginBottom: "24px"
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "34px",
                      lineHeight: "1.5",
                      color: "#fff",
                      marginBottom: "8px"
                    }}
                  >
                    Software Engineer Intern
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "18px",
                      lineHeight: "1.2",
                      color: "#c0c0c0",
                      marginBottom: "8px"
                    }}
                  >
                    Jan 2015 – Sep 2015
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#c0c0c0"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
