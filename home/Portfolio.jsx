import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  CssBaseline,
  Link,
} from "@mui/material";
import porjectImgOne from "../images/c_p_manage.jpg";
import porjectImgTwo from "../images/s_dashboard.jpg";
import porjectImgThree from "../images/v_mouse.jfif.jpg";
import backImg from "../images/head-back-thumb.jpg";
import manImg from "../images/ManImage.jpg";
import AnimatedBackground from "./AnimatedBackground";
import HTMLImg from "../images/HTML.png";
import CSSImg from "../images/CSS.jfif";
import JSImg from "../images/JS-LOGO.png";
import ReactImg from "../images/React.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#", active: true },
  { name: "Projects", href: "#", active: true },
];

const projects = [
  {
    id: 1,
    projectName: "Customer Product Manager",
    projectImage: porjectImgOne,
    projectDesc:
      "Customer Product Manager is a web-based tool that helps businesses manage product development based on customer feedback. ",
  },
  {
    id: 2,
    projectName: "Student Dashboard",
    projectImage: porjectImgTwo,
    projectDesc:
      "Student Dashboard is an intuitive platform for students to track their academic progress, manage tasks, and access learning resources in one centralized place.",
  },
  {
    id: 3,
    projectName: "Virtual Mouse",
    projectImage: porjectImgThree,
    projectDesc:
      "Virtual Mouse enables users to control the cursor using hand gestures and a webcam, enhancing accessibility and providing a touch-free interface experience.",
  },
  {
    id: 4,
    projectName: "Personal Portfolio",
    projectImage: "https://via.placeholder.com/550x300?text=PORTFOLIO",
    projectDesc:
      "Personal Portfolio is a responsive website showcasing a developer's skills, projects, and contact information, designed with modern UI and smooth user experience.",
  },
];

const logos = [
  { src: HTMLImg, left: "10%", size: 60, delay: 0, name: "HTML" },
  { src: CSSImg, left: "30%", size: 50, delay: 2, name: "CSS" },
  { src: JSImg, left: "50%", size: 70, delay: 4, name: "JavaScript" },
  { src: ReactImg, left: "70%", size: 60, delay: 6, name: "React.js" },
  { src: HTMLImg, left: "85%", size: 50, delay: 8, name: "HTML" },
];
export default function Portfolio() {
  // const [hover, setHover] = React.useState(false);
  const colors = ["#2196f3", "#4caf50", "#ff9800", "#9c27b0", "#e91e63"]; // Blue, Green, Orange, Purple, Pink
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <AnimatedBackground />
      <Box
        sx={{
          minHeight: "50vh",
          height: "100%",
          // background: "linear-gradient(180deg,#071029 0%, #0f1724 100%)",
          backgroundImage: `url(${backImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "#e6eef6",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'",
        }}
      >
        <CssBaseline />

        {/* Header */}
        <AppBar
          position="static"
          sx={{ background: "transparent", boxShadow: "none", px: 4, pt: 2 }}
        >
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(90deg,#fff,#bde9d6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: 20,
              }}
            >
              MyLogo
            </Typography>
            <Box sx={{ display: "flex" }}>
              {navLinks.map(({ name, href, active }) => (
                <Link
                  key={name}
                  href={href}
                  underline="none"
                  sx={{
                    ml: 2,
                    px: active ? 1.5 : 0,
                    py: active ? 1 : 0,
                    borderRadius: 2,
                    color: active ? "#e6eef6" : "#e6eef6aa",
                    background: active
                      ? "rgba(255,255,255,0.04)"
                      : "transparent",
                    backdropFilter: active ? "blur(6px)" : "none",
                    "&:hover": {
                      background: "#e6eef6",
                      color: "#071029",
                    },
                  }}
                >
                  {name}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            py: 8,
            px: 4,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ maxWidth: 900 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              I am a Web designer.
            </Typography>
            <Typography variant="body1" sx={{ color: "#9aa4b2", mb: 3 }}>
              Clean, modern interfaces focused on clarity and delightful micro
              interactions.
            </Typography>
            <Box>
              <Button
                variant="contained"
                sx={{
                  mr: 2,
                  borderRadius: "10px",
                  background: "linear-gradient(90deg,#6ee7b7,#60a5fa)",
                  color: "#052127",
                  fontWeight: 600,
                  boxShadow: "0 6px 18px rgba(99,102,241,0.12)",
                }}
              >
                See Projects
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  color: "#9aa4b2",
                  borderColor: "rgba(255,255,255,0.06)",
                  fontWeight: 600,
                  "&:hover": {
                    background: "#e6eef6",
                    color: "#071029",
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Projects */}
        <Box sx={{ pb: 8, textAlign: "center", px: 4 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 650 }}>
            Projects
          </Typography>
          <Grid container xs={12} sm={6} md={3} spacing={3}>
            {projects.map((data, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    position: "relative",
                    maxWidth: 425,
                    borderRadius: "14px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                    boxShadow: "0 6px 20px rgba(2,6,23,0.6)",
                    border: "1px solid rgba(255,255,255,0.03)",
                    transition: "0.4s ease-in-out",
                    cursor: "pointer",
                    "&:hover .hover-bg": {
                      opacity: 1,
                      transform: "scale(1.05)",
                    },
                    "&:hover .hover-content": {
                      opacity: 0,
                    },
                    "&:hover .project-title": {
                      fontSize: "2rem",
                      textAlign: "center",
                    },
                    textAlign: "center",
                  }}
                >
                  {/* Background image */}
                  <Box
                    className="hover-bg"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${data.projectImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      opacity: 0,
                      transform: "scale(1)",
                      transition: "all 0.5s ease-in-out",
                      zIndex: 1,
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0,0,0,0.6)",
                      zIndex: 2,
                    }}
                  />

                  {/* Foreground content */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        height: 120,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 2,
                      }}
                    >
                      <Typography
                        className="project-title"
                        variant="h5"
                        sx={{
                          color: "#6ee7b7",
                          margin: "auto",
                          fontWeight: 700,
                          textAlign: "center",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {data.projectName}
                      </Typography>
                    </Box>

                    <CardContent
                      className="hover-content"
                      sx={{
                        flexGrow: 1,
                        opacity: 1,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#9aa4b2" }}>
                        {data.projectDesc}
                      </Typography>
                    </CardContent>

                    <CardActions
                      className="hover-content2"
                      sx={{
                        px: 2,
                        pb: 2,
                        opacity: 1,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      <Button
                        size="small"
                        sx={{
                          borderRadius: "8px",
                          fontSize: "13px",
                          fontWeight: 500,
                        }}
                      >
                        View
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        sx={{
                          borderRadius: "8px",
                          fontSize: "13px",
                          color: "#9aa4b2",
                          borderColor: "rgba(255,255,255,0.06)",
                          "&:hover": {
                            background: "#e6eef6",
                            color: "#071029",
                          },
                        }}
                      >
                        Details
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      {/* Experience */}
      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: 650, color: "#e6eef6" }}
        >
          what I do
        </Typography>
        <Box
          sx={{
            p: 4,
            flexGrow: 1,
            textAlign: "start",
            borderRadius: "15px",
            backgroundColor: "#9191910d", // optional background for visibility
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* === Text Content === */}
            <Grid item xs={12} md={7} size={8}>
              <Box sx={{ p: 2, color: "#9aa4b2" }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: currentColor,
                    fontWeight: 700,
                  }}
                >
                  Executive Web designer at LPC Advisors Pvt. Ltd.
                </Typography>
                <br />
                <Typography variant="h5">
                  I have gained 1 year and 10 months of hands-on experience in
                  web development and frontend technologies, including HTML,
                  CSS, JavaScript, and React.js. During this time, I worked on
                  building responsive and user-friendly web interfaces that
                  enhanced overall user experience.
                </Typography>
                <br />
                <Typography variant="h4" sx={{ fontWeight: 650, mb: 1 }}>
                  Certificates:
                </Typography>
                <Box component="dl" sx={{ pl: 2, m: 0 }}>
                  <Typography
                    component="dt"
                    sx={{ fontWeight: 600, fontSize: "20px" }}
                  >
                    JAVA Full Stack Development, <span style={{fontSize: '18px', fontWeight: 'normal'}}>codekul institute, Kothrud</span> <Link><OpenInNewIcon /></Link>
                  </Typography>
                  <Typography component="dd" sx={{ ml: 2, fontSize: "16px" }}>
                    Covered backend with Java, Spring Boot, and frontend with
                    React.
                  </Typography>

                  <Typography
                    component="dt"
                    sx={{ fontWeight: 600, fontSize: "20px", mt: 2 }}
                  >
                    React Development, Udemy <Link><OpenInNewIcon /></Link>
                  </Typography>
                  <Typography component="dd" sx={{ ml: 2, fontSize: "16px" }}>
                    Focused on creating mobile-first layouts using HTML, CSS,
                    and Flexbox/Grid.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* About */}

      <Box sx={{ textAlign: "center", p: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: 650, color: "#e6eef6" }}
        >
          About
        </Typography>

        <Box
          sx={{
            p: 4,
            flexGrow: 1,
            textAlign: "start",
            borderRadius: "15px",
            backgroundColor: "#9191910d", // optional background for visibility
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* === Text Content === */}
            <Grid item xs={12} md={7} size={8}>
              <Box sx={{ p: 2, color: "#9aa4b2" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: currentColor,
                    fontWeight: 700,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  I'am Mayur Kumbhar
                </Typography>
                <br />
                <Typography variant="h5">
                  I’m a passionate Web Designer focused on creating engaging,
                  responsive websites that not only look great but perform
                  flawlessly. With hands-on experience in modern frontend tools
                  like React and a strong eye for design, I bring ideas to life
                  on the web.
                </Typography>

                {/* === Skills Section === */}
                <Box sx={{ mt: 6, textAlign: "center" }}>
                  <Typography variant="h4" gutterBottom>
                    Skills
                  </Typography>
                  <Grid container spacing={3} justifyContent="center">
                    {logos.map((logo, index) => (
                      <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                        <Box sx={{ textAlign: "center" }}>
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            style={{
                              width: 80,
                              height: 80,
                              border: "1px solid #000000",
                              borderRadius: "15px",
                              objectFit: "contain",
                            }}
                          />
                          <Typography variant="body1" sx={{ mt: 1 }}>
                            {logo.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>

            {/* === Image === */}
            <Grid item xs={12} md={5} size={4}>
              <Box
                component="img"
                src={manImg}
                alt="Mayur Kumbhar"
                sx={{
                  width: "100%",
                  maxWidth: 550,
                  borderRadius: "10px",
                  objectFit: "cover",
                  transform: "scaleX(-1)",
                  mx: "auto",
                  display: "block",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "auto",
          py: 3,
          px: 4,
          color: "#9aa4b2",
          fontSize: 13,
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} — Crafted with care.
      </Box>
    </>
  );
}
