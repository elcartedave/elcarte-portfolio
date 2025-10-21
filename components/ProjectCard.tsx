import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
  Box,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 40px rgba(59, 130, 246, 0.15)",
          borderColor: "primary.main",
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={imageAlt}
          sx={{
            borderRadius: 1,
            my: 2,
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
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
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
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
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
              borderColor: "primary.main",
              transform: "translateY(-2px)",
            },
          }}
        >
          Code
        </Button>
        {demoUrl && (
          <Button
            size="small"
            variant="contained"
            endIcon={<ArrowRight className="h-4 w-4" />}
            component={Link}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                "& .MuiSvgIcon-root": {
                  transform: "translateX(4px)",
                },
              },
            }}
          >
            Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
