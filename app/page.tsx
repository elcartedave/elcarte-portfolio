import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Github, Linkedin, Mail, User } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

// Material UI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
          <Link href="/" className="flex items-center gap-2 pl-4 bold">
            <User className="h-5 w-5" />
            <span>Dave Andrie A. Elcarte</span>
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
          <div className="flex items-center gap-2 pr-4">
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
        <section className="w-full py-6 md:py-12 lg:py-18 xl:py-24">
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
                      A BS Computer Science student specializing in software
                      development such as creating mobile and web applications
                      with automation and artificial Intelligence integration
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
          className="w-full py-4 md:py-8 lg:py-12 xl:py-16 bg-muted/50"
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
                  I&apos;m a programmer and a software developer with a focus on
                  mobile and web development. Also, my main expertise lies in
                  modern frameworks like React and Next.js, with Firebase and/or
                  Google Cloud Platform (GCP) as backend, and integrating it
                  with AI functionalities. I build fast, scalable, and
                  maintainable applications suitable for long-term use.
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
                            movies/series, playing basketball, and learn data
                            science, cybersecurity and AI courses
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
          className="w-full py-4 md:py-8 lg:py-12 xl:py-16 bg-muted/50"
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
                          "Google API",
                          "Google Cloud",
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
        <section
          id="projects"
          className="w-full py-4 md:py-8 lg:py-12 xl:py-16"
        >
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
                  developed for my clients, personal use, school requirements,
                  or hackathon-based projects
                </Typography>
              </Box>

              <Grid container spacing={4} className="py-12">
                {projects.map((project) => (
                  <Grid item xs={12} md={4} key={project.id}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      imageAlt={project.imageAlt}
                      technologies={project.technologies}
                      githubUrl={project.githubUrl}
                      demoUrl={project.demoUrl}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-4 md:py-8 lg:py-12 xl:py-16">
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
                            href="mailto:daelcarte@up.edu.ph"
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
