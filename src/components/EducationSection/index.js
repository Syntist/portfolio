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
            border: "1px solid #373737",
            backgroundColor: "#2b2b2b",
            padding: "24px",
            borderRadius: "8px"
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              xs={6}
            >
              <Box
                sx={{
                  border: "1px solid #373737",
                  backgroundColor: "#1f1f1f",
                  padding: "24px",
                  borderRadius: "4px",
                  width: "100%"
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
                    Education
                  </Typography>
                </Box>
                <List
                  sx={{
                    
                    "> li + li": {
                      marginTop: "24px"
                    }
                  }}
                >
                  <ListItem
                    sx={{
                      padding: "0 0 0 24px",
                      position: "relative",
                      gap: "14px",
                      alignItems: "flex-start",

                      "&:before": {
                        content: "''",
                        borderRadius: "100%",
                        width: "8px",
                        height: "8px",
                        position: "absolute",
                        left: "0",
                        top: "5px",
                        backgroundColor: "#E3C050"
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        border: "1px solid #373737",
                        backgroundColor: "#454648",
                        borderRadius: "4px",
                        
                        "img": {
                          maxWidth: "100%",
                          height: "auto"
                        }
                      }}
                    >
                      <Box>
                        <Image
                          src={'/icons8-logo-96.png'}
                          width={64}
                          height={64}
                          alt=""
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flexGrow: "1"
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "14px",
                          lineHeight: "1.2",
                          display: "block",
                          color: "#c0c0c0"
                        }}
                      >
                        2020 - 2024
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "26px",
                          lineHeight: "1.5",
                          color: "#fff",
                          marginBottom: "4px"
                        }}
                      >
                        Web Designer &amp; Developer
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          lineHeight: "1.3",
                          color: "#c0c0c0"
                        }}
                      >
                        Ranked top 10% in the program.
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      padding: "0 0 0 24px",
                      position: "relative",
                      gap: "14px",
                      alignItems: "flex-start",

                      "&:before": {
                        content: "''",
                        borderRadius: "100%",
                        width: "8px",
                        height: "8px",
                        position: "absolute",
                        left: "0",
                        top: "5px",
                        backgroundColor: "#373737"
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        border: "1px solid #373737",
                        backgroundColor: "#454648",
                        borderRadius: "4px",
                        
                        "img": {
                          maxWidth: "100%",
                          height: "auto"
                        }
                      }}
                    >
                      <Box>
                        <Image
                          src={'/icons8-logo-96.png'}
                          width={64}
                          height={64}
                          alt=""
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flexGrow: "1"
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "14px",
                          lineHeight: "1.2",
                          display: "block",
                          color: "#c0c0c0"
                        }}
                      >
                        2017 - 2020
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "26px",
                          lineHeight: "1.5",
                          color: "#fff",
                          marginBottom: "4px"
                        }}
                      >
                        Master of Science in Computer Science
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          lineHeight: "1.3",
                          color: "#c0c0c0"
                        }}
                      >
                        Participated in the research of published 3 papers.
                      </Typography>
                    </Box>
                  </ListItem>
                </List>
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
                  border: "1px solid #373737",
                  backgroundColor: "#1f1f1f",
                  padding: "24px",
                  borderRadius: "4px",
                  width: "100%"
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
                    Experience
                  </Typography>
                </Box>
                <List
                  sx={{
                    
                    "> li + li": {
                      marginTop: "24px"
                    }
                  }}
                >
                  <ListItem
                    sx={{
                      padding: "0 0 0 24px",
                      position: "relative",
                      gap: "14px",
                      alignItems: "flex-start",

                      "&:before": {
                        content: "''",
                        borderRadius: "100%",
                        width: "8px",
                        height: "8px",
                        position: "absolute",
                        left: "0",
                        top: "5px",
                        backgroundColor: "#E3C050"
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        border: "1px solid #373737",
                        backgroundColor: "#454648",
                        borderRadius: "4px",
                        
                        "img": {
                          maxWidth: "100%",
                          height: "auto"
                        }
                      }}
                    >
                      <Box>
                        <Image
                          src={'/icons8-logo-96.png'}
                          width={64}
                          height={64}
                          alt=""
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flexGrow: "1"
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "14px",
                          lineHeight: "1.2",
                          display: "block",
                          color: "#c0c0c0"
                        }}
                      >
                        2020 - 2024
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "26px",
                          lineHeight: "1.5",
                          color: "#fff",
                          marginBottom: "4px"
                        }}
                      >
                        Web Designer &amp; Developer
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          lineHeight: "1.3",
                          color: "#c0c0c0"
                        }}
                      >
                        Ranked top 10% in the program.
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      padding: "0 0 0 24px",
                      position: "relative",
                      gap: "14px",
                      alignItems: "flex-start",

                      "&:before": {
                        content: "''",
                        borderRadius: "100%",
                        width: "8px",
                        height: "8px",
                        position: "absolute",
                        left: "0",
                        top: "5px",
                        backgroundColor: "#373737"
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: "0",
                        border: "1px solid #373737",
                        backgroundColor: "#454648",
                        borderRadius: "4px",
                        
                        "img": {
                          maxWidth: "100%",
                          height: "auto"
                        }
                      }}
                    >
                      <Box>
                        <Image
                          src={'/icons8-logo-96.png'}
                          width={64}
                          height={64}
                          alt=""
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flexGrow: "1"
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "14px",
                          lineHeight: "1.2",
                          display: "block",
                          color: "#c0c0c0"
                        }}
                      >
                        2017 - 2020
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "26px",
                          lineHeight: "1.5",
                          color: "#fff",
                          marginBottom: "4px"
                        }}
                      >
                        Master of Science in Computer Science
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          lineHeight: "1.3",
                          color: "#c0c0c0"
                        }}
                      >
                        Participated in the research of published 3 papers.
                      </Typography>
                    </Box>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
