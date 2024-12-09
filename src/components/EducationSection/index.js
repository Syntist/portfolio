import { education } from "@/info/education";
import {
  Typography,
  Box,
  Container,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";

export const EducationSection = () => {
  return (
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
            Education
          </Typography>
        </Box>
        <List
          sx={{
            "> li + li": {
              marginTop: "24px",
              borderTop: "1px solid #373737",
              paddingTop: "24px",
            },
          }}
        >
          {education.map((item) => (
            <ListItem
              key={item.title}
              sx={{
                padding: "0",
                gap: "24px",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "80px",
                  flexShrink: "0",

                  img: {
                    maxWidth: "100%",
                    height: "auto",
                  },
                }}
              >
                <Image
                  src={item.logo}
                  width={500}
                  height={500}
                  style={item.style}
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  flexGrow: "1",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "26px",
                    lineHeight: "1.5",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "22px",
                    lineHeight: "1.5",
                    marginBottom: "8px",
                    fontWeight: "300",
                    color: "#e9e9e9",
                  }}
                >
                  {item.degree}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "1.2",
                    marginBottom: "8px",
                    color: "#c0c0c0",
                    display: "block",
                  }}
                >
                  {item.start} - {item.end}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};
