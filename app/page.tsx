import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Github, Linkedin, Mail, User } from "lucide-react";

// Material UI imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <User className="h-5 w-5" />
            <span>My Portfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/elcartedave"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="GitHub">
                <Github className="h-5 w-5" />
              </IconButton>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dave-elcarte-161a46223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </IconButton>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} lg={6}>
                <Box className="flex flex-col justify-center space-y-4">
                  <Box className="space-y-2">
                    <Typography
                      variant="h2"
                      component="h1"
                      className="font-bold"
                    >
                      Hi, I&apos;m{" "}
                      <span className="text-primary italic font-serif">
                        Dave Andrie A. Elcarte
                      </span>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      className="max-w-[600px]"
                    >
                      A student specializing in software development such as
                      creating mobile and web applications with Aritificial
                      Intelligence integration
                    </Typography>
                  </Box>
                  <Box className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#contact" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowRight className="h-4 w-4" />}
                      >
                        Message Me
                      </Button>
                    </Link>
                    <Link href="#projects" style={{ textDecoration: "none" }}>
                      <Button variant="outlined">View My Projects</Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                className="flex items-center justify-center"
              >
                <Box
                  component="div"
                  sx={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <Image
                    src="/assets/profilepic.jpg"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="aspect-square object-cover"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <Container maxWidth="lg">
            <Box className="flex flex-col items-center justify-center space-y-4 text-center">
              <Box className="space-y-2">
                <Typography variant="h3" component="h2" className="font-bold">
                  About Me
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className="max-w-[900px]"
                >
                  I&apos;m a passionate web developer with a strong focus on
                  creating responsive, user-friendly websites. With expertise in
                  modern frameworks like React and Next.js, I build fast,
                  scalable, and maintainable web applications.
                </Typography>
              </Box>
              <Grid container spacing={6} className="py-12 items-center">
                <Grid item xs={12} lg={6} className="order-2 lg:order-1">
                  <Box className="flex flex-col justify-center space-y-4">
                    <Box
                      component="ul"
                      className="grid gap-6"
                      sx={{ listStyle: "none", padding: 0 }}
                    >
                      <Box component="li">
                        <Box className="grid gap-1">
                          <Typography
                            variant="h6"
                            component="h3"
                            className="font-bold"
                          >
                            Education
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Bachelor of Science in Computer Science from the
                            University of the Philippines Los Baños
                          </Typography>
                        </Box>
                      </Box>
                      <Box component="li">
                        <Box className="grid gap-1">
                          <Typography
                            variant="h6"
                            component="h3"
                            className="font-bold"
                          >
                            Experience
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            3+ years of experience in Python, C programming, and
                            web development. 2+ years for mobile development and
                            Java.
                          </Typography>
                        </Box>
                      </Box>
                      <Box component="li">
                        <Box className="grid gap-1">
                          <Typography
                            variant="h6"
                            component="h3"
                            className="font-bold"
                          >
                            Interests
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Outside of my coding time, I enjoy watching
                            movies/series, playing basketball, and learn
                            cybersecurity and AI courses
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="order-1 lg:order-2 flex justify-center"
                >
                  <Image
                    src="/assets/secondpic.jpg"
                    alt="About Me"
                    width={400}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="order-1 lg:order-2 flex justify-center"
                ></Grid>
              </Grid>
            </Box>
          </Container>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <Container maxWidth="lg">
            <Box className="flex flex-col items-center justify-center space-y-4 text-center">
              <Box className="space-y-2">
                <Typography variant="h3" component="h2" className="font-bold">
                  My Skills
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className="max-w-[900px]"
                >
                  Here are the technologies and frameworks that I used for
                  software development
                </Typography>
              </Box>
              <Grid container spacing={4} className="py-12">
                <Grid item xs={12} md={4}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        <Code className="h-5 w-5" />
                        <Typography variant="h5" component="h3">
                          Frontend
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {[
                          "HTML",
                          "CSS",
                          "Tailwind CSS",
                          "JavaScript",
                          "TypeScript",
                          "React",
                          "Next.js",
                          "Flutter",
                          "Svelte",
                        ].map((skill) => (
                          <Chip key={skill} label={skill} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        <Code className="h-5 w-5" />
                        <Typography variant="h5" component="h3">
                          Backend
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {[
                          "Node.js",
                          "Express",
                          "MongoDB",
                          "Javascript",
                          "Typescript",
                          "Firebase",
                          "Pinecone",
                          "OpenAI API",
                        ].map((skill) => (
                          <Chip key={skill} label={skill} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 3,
                        }}
                      >
                        <Code className="h-5 w-5" />
                        <Typography variant="h5" component="h3">
                          Tools & Others
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {[
                          "Git",
                          "Retrieval Augmented Generation (RAG)",
                          "Figma",
                          "Responsive Design",
                          "Other APIs",
                        ].map((skill) => (
                          <Chip key={skill} label={skill} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <Container maxWidth="lg">
            <Box className="flex flex-col items-center justify-center space-y-4 text-center">
              <Box className="space-y-2">
                <Typography variant="h3" component="h2" className="font-bold">
                  My Projects
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className="max-w-[900px]"
                >
                  Here are some of my recent projects. These projects are either
                  developed for personal use, school requirements, or
                  hackathon-based projects
                </Typography>
              </Box>
              <Grid container spacing={4} className="py-12">
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Landas - Iulat, Tugunan, Aksyunan
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        A responsive website which gets crowdsourced data of the
                        condition of several roads, streets, and sidewalks. The
                        data gathered are then analyzed using OpenAI API in
                        determining which roads need immediate action from the
                        authorities.
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/landas.png"
                        alt="Project One"
                        sx={{ borderRadius: 1, my: 2 }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="Next.js" size="small" />
                        <Chip label="TypeScript" size="small" />
                        <Chip label="Tailwind CSS" size="small" />
                        <Chip label="MongoDB" size="small" />
                        <Chip label="OpenAI API" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/Dreei/sidewalk-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Labubu Love Guru
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        A user authenticated AI chatbot that specializes in
                        giving relationship, self-care advices, and quotes thru
                        a stored database and prompt engineering principles.
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/labubu.png"
                        alt="Project Two"
                        sx={{ borderRadius: 1, my: 2, objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="React" size="small" />
                        <Chip label="MongoDB" size="small" />
                        <Chip label="Express" size="small" />
                        <Chip label="Node.jS" size="small" />
                        <Chip label="Pinecone" size="small" />
                        <Chip label="OpenAI API" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/elcartedave/labubu-ai-chatbot.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        endIcon={<ArrowRight className="h-4 w-4" />}
                        component={Link}
                        href="https://labubu-ai-guru.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Sandiwapp
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        This is a mobile application for a student organization
                        which aims to provide a centralized member, applicant,
                        events, and announcements&apos; management system.
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/sandiwapp.png"
                        alt="Project Three"
                        sx={{ borderRadius: 1, my: 2, objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="Flutter" size="small" />
                        <Chip label="Firebase" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/elcartedave/sandiwapp.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        LOLCode Interpreter
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        This is a GUI-based interpreter for the LOLCode
                        programming language. It is able to execute statements
                        written in .lol file. It aims to simulate how
                        interpreters are created
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/lolcode.jfif"
                        alt="Project Four"
                        sx={{ borderRadius: 1, my: 2, objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="Python" size="small" />
                        <Chip label="LOLCode" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/Samoy-ed/LOL_Code_Interpreter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        GiveCommit
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        GiveCommit is a mobile application designed to
                        facilitate charitable donations by connecting donors
                        with organizations that accept various types of
                        contributions.
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/give.png"
                        alt="Project Five"
                        sx={{ borderRadius: 1, my: 2, objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="Flutter" size="small" />
                        <Chip label="Firebase" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/addomingo/CMSC-23-2024-GiveCommitr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        FarmToTable
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        This is a full stack e-commerce application built to
                        handle selling, keeping sales history, generating sales
                        reports, and management of agricultural products.
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/farm.png"
                        alt="Project Six"
                        sx={{ borderRadius: 1, my: 2, objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="MongoDB" size="small" />
                        <Chip label="Express" size="small" />
                        <Chip label="React" size="small" />
                        <Chip label="Nodejs" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/elcartedave/ProjectCMSC100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Putahe Puntahe
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        This application was developed to add and manage food
                        establishments, foods, assign, edit, and delete reviews,
                        showcases the mastery of Database Management Systems
                        (DBMS) and Structured Query Lange (SQL).
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/putahe.png"
                        alt="Project Four"
                        sx={{ borderRadius: 1, my: 2, objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="MariaDB" size="small" />
                        <Chip label="Express" size="small" />
                        <Chip label="React" size="small" />
                        <Chip label="Node.js" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/eljohnevnglsta/CMSC-127-Final-Project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Hoppy Froggy
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        This game is a platform game in which the sprite jumps
                        on the never ending platforms and only ends when they
                        fall/bumped into predators. It highlights the use of
                        object-oriented programming and it&apos;s pillars
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/hoppy.png"
                        alt="Project Four"
                        sx={{ borderRadius: 1, my: 2, objectFit: "cover" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="Java" size="small" />
                        <Chip label="JavaFX" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/elcartedave/hoppy-froggy.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Diet Problem Solver
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        This project is used for computing the optimal servings
                        needed by the customer in a minimum price while
                        maintaining the number of servings needed.
                      </Typography>
                      <CardMedia
                        component="img"
                        height="140"
                        image="/assets/diet.png"
                        alt="Project Four"
                        sx={{
                          borderRadius: 1,
                          my: 2,
                          objectFit: "cover",
                          height: "140",
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 2,
                        }}
                      >
                        <Chip label="R" size="small" />
                        <Chip label="Shiny" size="small" />
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        mt: "auto",
                        justifyContent: "space-between",
                        px: 2,
                        pb: 2,
                      }}
                    >
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<Github className="h-4 w-4" />}
                        component={Link}
                        href="https://github.com/elcartedave/diet-problem-solver.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <Container maxWidth="lg">
            <Box className="flex flex-col items-center justify-center space-y-4 text-center">
              <Box className="space-y-2">
                <Typography variant="h3" component="h2" className="font-bold">
                  Message Me!
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  className="max-w-[900px]"
                >
                  Feel free to reach out if you have any concerns, collaboration
                  requests, and potential opportunities
                </Typography>
              </Box>
              <Grid container spacing={4} className="py-12">
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        Contact Information
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        Feel free to reach out through any of these links
                      </Typography>
                      <Box sx={{ mt: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Mail className="h-5 w-5 text-primary" />
                          <Link
                            href="mailto:your.daelcarte@up.edu.ph"
                            className="text-sm hover:underline"
                          >
                            daelcarte@up.edu.ph
                          </Link>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Linkedin className="h-5 w-5 text-primary" />
                          <Link
                            href="https://linkedin.com/in/dave-elcarte-161a46223/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:underline"
                          >
                            linkedin.com/in/dave-elcarte-161a46223/
                          </Link>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Github className="h-5 w-5 text-primary" />
                          <Link
                            href="https://github.com/elcartedave"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:underline"
                          >
                            github.com/elcartedave
                          </Link>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom>
                        Send Me a Message
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        I&apos;ll get back to you as soon as possible
                      </Typography>
                      <Box component="form" sx={{ mt: 3 }}>
                        <TextField
                          fullWidth
                          id="name"
                          label="Name"
                          variant="outlined"
                          margin="normal"
                          placeholder="Your name"
                        />
                        <TextField
                          fullWidth
                          id="email"
                          label="Email"
                          variant="outlined"
                          margin="normal"
                          type="email"
                          placeholder="Your email"
                        />
                        <TextField
                          fullWidth
                          id="message"
                          label="Message"
                          variant="outlined"
                          margin="normal"
                          multiline
                          rows={4}
                          placeholder="Your message"
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          sx={{ mt: 2 }}
                        >
                          Send Message
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <Container maxWidth="lg">
          <Box className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <Typography
              variant="body2"
              color="text.secondary"
              className="text-center md:text-left"
            >
              © {new Date().getFullYear()} Dave Andrie A. Elcarte. All rights
              reserved.
            </Typography>
            <Box className="flex items-center gap-4">
              <Link
                href="https://github.com/elcartedave"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </IconButton>
              </Link>
              <Link
                href="https://www.linkedin.com/in/dave-elcarte-161a46223/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </IconButton>
              </Link>
              <Link href="mailto:daelcarte@up.edu.ph">
                <IconButton aria-label="Email">
                  <Mail className="h-5 w-5" />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Container>
      </footer>
    </div>
  );
}
