import { Typography, Box, Container } from "@mui/material";

export const Proficiency = (props) => {
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
            Proficiency
          </Typography>
        </Box>
        <Box
          sx={{

            "> div + div": {
              marginTop: "24px"
            }
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "26px",
                lineHeight: "1.5",
                color: "#e9e9e9",
                fontWeight: "400",
                marginBottom: "11px"
              }}
            >
              Frontend / Design
            </Typography>
            <Box
              sx={{

                "progress": {
                  width: "100%",
                  display: "block",
                  backgroundColor: "#373737",
                  borderRadius: "4px",

                  "&::-webkit-progress-bar": {
                    backgroundColor: "#373737",
                    borderRadius: "4px"
                  },

                  "&::-webkit-progress-value": {
                    backgroundColor: "#E3C050",
                    borderRadius: "4px"
                  },

                  "&[value]::-moz-progress-bar": {
                    backgroundColor: "#E3C050",
                    borderRadius: "4px"
                  }
                }
              }}
            >
              <progress value={'65'} max={'100'}></progress>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "26px",
                lineHeight: "1.5",
                color: "#e9e9e9",
                fontWeight: "400",
                marginBottom: "11px"
              }}
            >
              Backend
            </Typography>
            <Box
              sx={{

                "progress": {
                  width: "100%",
                  display: "block",
                  backgroundColor: "#373737",
                  borderRadius: "4px",

                  "&::-webkit-progress-bar": {
                    backgroundColor: "#373737",
                    borderRadius: "4px"
                  },

                  "&::-webkit-progress-value": {
                    backgroundColor: "#E3C050",
                    borderRadius: "4px"
                  },

                  "&[value]::-moz-progress-bar": {
                    backgroundColor: "#E3C050",
                    borderRadius: "4px"
                  }
                }
              }}
            >
              <progress value={'85'} max={'100'}></progress>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: "26px",
                lineHeight: "1.5",
                color: "#e9e9e9",
                fontWeight: "400",
                marginBottom: "11px"
              }}
            >
              Programming
            </Typography>
            <Box
              sx={{

                "progress": {
                  width: "100%",
                  display: "block",
                  backgroundColor: "#373737",
                  borderRadius: "4px",

                  "&::-webkit-progress-bar": {
                    backgroundColor: "#373737",
                    borderRadius: "4px"
                  },

                  "&::-webkit-progress-value": {
                    backgroundColor: "#E3C050",
                    borderRadius: "4px"
                  },

                  "&[value]::-moz-progress-bar": {
                    backgroundColor: "#E3C050",
                    borderRadius: "4px"
                  }
                }
              }}
            >
              <progress value={'75'} max={'100'}></progress>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
