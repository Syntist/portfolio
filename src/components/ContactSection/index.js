import { Typography, Box, Container, Grid, List, ListItem, Link, TextField, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ContactSection = (props) => {
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
            xs={12}
            md={6}
            sx={{
              display: "flex"
            }}
          >
            <Box
              sx={{
                width: "100%",

                "@media (min-width: 768px)": {
                  marginTop: "auto",
                  marginBottom: "auto",
                  paddingTop: "35px",
                  paddingBottom: "35px"
                }
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
                  marginBottom: "11px",

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
                Reach Out to me!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.5"
                }}
              >
                Discuss a project or just want to say hi? My Inbox is open for all.
              </Typography>
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                  flexWrap: "wrap",
                  marginTop: "24px",
                  paddingTop: "0",
                  paddingBottom: "0",

                  "> li": {
                    display: "block",
                    width: "auto",
                    padding: "0"
                  }
                }}
              >
                <ListItem>
                  <Link href={'#'}
                    sx={{
                      color: "#c0c0c0",
                      transition: "color 0.3s ease",

                      "&:hover": {
                        color: "#fff"
                      }
                    }}
                  >
                    <FacebookIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={'#'}
                    sx={{
                      color: "#c0c0c0",
                      transition: "color 0.3s ease",

                      "&:hover": {
                        color: "#fff"
                      }
                    }}
                  >
                    <LinkedInIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={'#'}
                    sx={{
                      color: "#c0c0c0",
                      transition: "color 0.3s ease",

                      "&:hover": {
                        color: "#fff"
                      }
                    }}
                  >
                    <InstagramIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={'#'}
                    sx={{
                      color: "#c0c0c0",
                      transition: "color 0.3s ease",

                      "&:hover": {
                        color: "#fff"
                      }
                    }}
                  >
                    <GitHubIcon />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex"
            }}
          >
            <Box
              sx={{
                width: "100%"
              }}
            >
              <form action={'#'}>
                <Box
                  sx={{
                    position: "relative",
                    
                    "+ div": {
                      marginTop: "24px"
                    }
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "13px",
                      lineHeight: "1.5",
                      fontWeight: "400",
                      color: "#8C8E95",
                      marginBottom: "6px",
                      display: "block"
                    }}
                  >
                    Name
                  </Typography>
                  <TextField
                    hiddenLabel
                    sx={{
                      color: "#e9e9e9",
                      boxSizing: "border-box",
                      backgroundColor: "#131313",
                      border: "1px solid #373737",
                      borderRadius: "6px",
                      display: "block",
                      width: "100%",
                      height: "56px",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",

                      "input": {
                        padding: "8px 12px",
                        color: "#e9e9e9",
                        fontSize: "16px",
                        fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",
                        lineHeight: "20px"
                      },

                      "&:focus, &.Mui-focused": {
                        outline: "none",
                        borderColor: "#E3C050"
                      },

                      "fieldset, > div": {
                        width: "100%",
                        height: "100%"
                      },

                      "fieldset": {
                        outline: "none !important",
                        border: "0 !important",
                        boxShadow: "none !important"
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    
                    "+ div": {
                      marginTop: "24px"
                    }
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "13px",
                      lineHeight: "1.5",
                      fontWeight: "400",
                      color: "#8C8E95",
                      marginBottom: "6px",
                      display: "block"
                    }}
                  >
                    Email address
                  </Typography>
                  <TextField
                    hiddenLabel
                    sx={{
                      color: "#e9e9e9",
                      boxSizing: "border-box",
                      backgroundColor: "#131313",
                      border: "1px solid #373737",
                      borderRadius: "6px",
                      display: "block",
                      width: "100%",
                      height: "56px",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",

                      "input": {
                        padding: "8px 12px",
                        color: "#e9e9e9",
                        fontSize: "16px",
                        fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",
                        lineHeight: "20px"
                      },

                      "&:focus, &.Mui-focused": {
                        outline: "none",
                        borderColor: "#E3C050"
                      },

                      "fieldset, > div": {
                        width: "100%",
                        height: "100%"
                      },

                      "fieldset": {
                        outline: "none !important",
                        border: "0 !important",
                        boxShadow: "none !important"
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    
                    "+ div": {
                      marginTop: "24px"
                    }
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "13px",
                      lineHeight: "1.5",
                      fontWeight: "400",
                      color: "#8C8E95",
                      marginBottom: "6px",
                      display: "block"
                    }}
                  >
                    Phone Number
                  </Typography>
                  <TextField
                    hiddenLabel
                    sx={{
                      color: "#e9e9e9",
                      boxSizing: "border-box",
                      backgroundColor: "#131313",
                      border: "1px solid #373737",
                      borderRadius: "6px",
                      display: "block",
                      width: "100%",
                      height: "56px",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",

                      "input": {
                        padding: "8px 12px",
                        color: "#e9e9e9",
                        fontSize: "16px",
                        fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",
                        lineHeight: "20px"
                      },

                      "&:focus, &.Mui-focused": {
                        outline: "none",
                        borderColor: "#E3C050"
                      },

                      "fieldset, > div": {
                        width: "100%",
                        height: "100%"
                      },

                      "fieldset": {
                        outline: "none !important",
                        border: "0 !important",
                        boxShadow: "none !important"
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    
                    "+ div": {
                      marginTop: "24px"
                    }
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "13px",
                      lineHeight: "1.5",
                      fontWeight: "400",
                      color: "#8C8E95",
                      marginBottom: "6px",
                      display: "block"
                    }}
                  >
                    Message
                  </Typography>
                  <TextField
                    hiddenLabel
                    multiline
                    sx={{
                      color: "#e9e9e9",
                      boxSizing: "border-box",
                      backgroundColor: "#131313",
                      border: "1px solid #373737",
                      borderRadius: "6px",
                      display: "block",
                      width: "100%",
                      height: "126px",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",

                      "textarea": {
                        padding: "0",
                        color: "#e9e9e9",
                        fontSize: "16px",
                        fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",
                        lineHeight: "20px"
                      },

                      "&:focus, &.Mui-focused": {
                        outline: "none",
                        borderColor: "#E3C050"
                      },

                      "fieldset, > div": {
                        width: "100%",
                        height: "100%"
                      },

                      "> div": {
                        display: "block",
                        maxHeight: "100%",
                        overflowY: "auto",
                        overflowX: "hidden"
                      },

                      "fieldset": {
                        outline: "none !important",
                        border: "0 !important",
                        boxShadow: "none !important"
                      }
                    }}
                  />
                </Box>
                <Box
                  sx={{}}
                >
                  <Button
                    type="submit"
                    sx={{
                      minWidth: "1px",
                      backgroundColor: "#000 !important",
                      color: "#E9E9E9 !important",
                      borderRadius: "6px",
                      border: "1px solid #E3C050",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      fontFamily: "var(--font-oswald),var(--font-roboto) , Arial, Helvetica, sans-serif",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      fontWeight: "400",
                      padding: "12px 18px",

                      "@media (min-width: 768px)": {
                        paddingLeft: "36px",
                        paddingRight: "36px"
                      },

                      "&:hover": {
                        backgroundColor: "#454648 !important",
                        color: "#E9E9E9 !important",
                        borderColor: "#E3C050"
                      }
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
