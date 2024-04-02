import { Typography, Box, Container, Grid, List, ListItem } from "@mui/material";
import Image from 'next/image'

export const EducationSection = (props) => {
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
            Education
          </Typography>
        </Box>
        <List
          sx={{

            "> li + li": {
              marginTop: "24px",
              borderTop: "1px solid #373737",
              paddingTop: "24px"
            }
          }}
        >
          <ListItem
            sx={{
              padding: "0",
              gap: "24px",
              alignItems: "flex-start"
            }}
          >
            <Box
              sx={{
                width: "50px",
                flexShrink: "0",

                "@media (min-width: 768px)": {
                  width: "80px"
                },

                "img": {
                  maxWidth: "100%",
                  height: "auto"
                }
              }}
            >
              <Image
                src={'/harvardLogo.542dab89bfb35b7f5c0d.png'}
                width={500}
                height={500}
                alt=""
              />
            </Box>
            <Box
              sx={{
                flexGrow: "1"
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: "26px",
                  lineHeight: "1.5",
                  fontWeight: "400",
                  color: "#fff"
                }}
              >
                Harvard University
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "22px",
                  lineHeight: "1.5",
                  marginBottom: "8px",
                  fontWeight: "300",
                  color: "#e9e9e9"
                }}
              >
                Master of Science in Computer Science
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "14px",
                  lineHeight: "1.2",
                  marginBottom: "8px",
                  color: "#c0c0c0",
                  display: "block"
                }}
              >
                September 2017 - April 2019
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.5"
                }}
              >
                Participated in the research of XXX and published 3 papers.
              </Typography>
            </Box>
          </ListItem>
          <ListItem
            sx={{
              padding: "0",
              gap: "24px",
              alignItems: "flex-start"
            }}
          >
            <Box
              sx={{
                width: "50px",
                flexShrink: "0",

                "@media (min-width: 768px)": {
                  width: "80px"
                },

                "img": {
                  maxWidth: "100%",
                  height: "auto"
                }
              }}
            >
              <Image
                src={'/harvardLogo.542dab89bfb35b7f5c0d.png'}
                width={500}
                height={500}
                alt=""
              />
            </Box>
            <Box
              sx={{
                flexGrow: "1"
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: "26px",
                  lineHeight: "1.5",
                  fontWeight: "400",
                  color: "#fff"
                }}
              >
                Stanford University
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "22px",
                  lineHeight: "1.5",
                  marginBottom: "8px",
                  fontWeight: "300",
                  color: "#e9e9e9"
                }}
              >
                Bachelor of Science in Computer Science
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "14px",
                  lineHeight: "1.2",
                  marginBottom: "8px",
                  color: "#c0c0c0",
                  display: "block"
                }}
              >
                September 2013 - April 2017
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.5"
                }}
              >
                Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, &hellip;
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};
