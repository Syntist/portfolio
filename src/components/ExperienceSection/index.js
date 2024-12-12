import { experience } from "@/info/experience";
import { Typography, Box, Container, Grid } from "@mui/material";
import Image from "next/image";


export const ExperienceSection = () => (
  <Box
    sx={{
      width: "100%",
      overflow: "hidden",
      paddingTop: "50px",
      paddingBottom: "50px",
    }}
  >
    <Container maxWidth="xl">
      <Box
        sx={{
          marginBottom: "45px",
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
              top: "-9px",
            },
          }}
        >
          Experiences
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {experience.map((item) => (
          <Grid key={item.title} item xs={4}>
            <Box
              sx={{
                border: "1px solid #373737",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  padding: "24px",
                  backgroundColor: item.backgroundColor,
                  borderRadius: "8px 8px 0 0",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "26px",
                    lineHeight: "1.2",
                    color: "#fff",
                  }}
                >
                  {item.title}
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

                    img: {
                      height: "auto",
                      maxWidth: "100%",
                      borderRadius: "inherit",
                    },
                  }}
                >
                  <Image src={item.logo} width={100} height={100} style={{backgroundColor: item.imageBackgroundColor}} alt="" />
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "54px 24px 24px",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "24px",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "34px",
                      lineHeight: "1.5",
                      color: "#fff",
                      marginBottom: "8px",
                    }}
                  >
                    {item.role}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "18px",
                      lineHeight: "1.2",
                      color: "#c0c0c0",
                      marginBottom: "8px",
                    }}
                  >
                    {item.startDate} – {item.endDate}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#c0c0c0",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
